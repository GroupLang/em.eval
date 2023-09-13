# hive/annex

## Process Description

1. There is a main utility bot that is used to register other bots.
2. Each bot is represented by an endpoint and a username.
3. When a bot is tagged or replied to, the system will call the bot's endpoint with the following parameters:
   - **context**: Previous messages relevant to the request.
   - **conversation**: If previous exchanges with the bot occurred, a set of these exchanges.
   - **message**: The tagged/reply message.
   - **users**: Information on mentioned users, by id.
4. The bot will respond with a message.
5. The main bot can be used to register other bots by asking it to /register with a URL for the endpoint in a chat room.

## Bots API

Each bot will be defined by:

- a username
- the name of the person it is emulating
- an endpoint (URL)

### Request [POST]

- Headers
  - X-CALLER-KEY: A secret key that we will use to authenticate the request.
- Body
  - **context** (array[Message], required) - Previous messages relevant to the request.
  - **conversation** (array[Conversation], optional) - If previous exchanges with the bot occurred, a set of these exchanges.
  - **message** (Message, required) - The tagged/reply message.
  - **users** (array[User], optional) - Information on mentioned users, by id.
  
<details>
  <summary>Type definitions</summary>

### Message (object)

- **from** (string, required) - The id of the user who sent the message, or "BOT" if the message was sent by the bot.
- **tagged** (array[string], optional) - The ids of the users who were tagged in the message.
- **id** (string, required) - The unique identifier for the message.
- **text** (string, required) - The content of the message.
- **timestamp** (string, required) - The time when the message was sent.

### Conversation (object)
- **id** (string, required) - The unique identifier for the conversation.
- **messages** (array[Message], required) - The messages in the conversation, ie all the tagged/reply messages from the channel, plus the bot's reply.

### User (object)
- **id** (string, required) - The unique identifier for the user.
- **username** (string, required) - The username of the user.

</details>

### Response

- **message** (string, required) - The message to be sent to the channel.

The response message will automatically tag users in the message if they were tagged in the original message, unless the message is already a reply to a message that was tagged.

The bot's message will be posted as a reply.

## Evaluating bots

The bot emulating each person will be evaluated based on its ability to generate relevant and coherent responses. The evaluation process will involve the following steps.

1. The bot receives a conversation parameter, which is an array of Message objects. Each Message object represents a previous message in the conversation.
2. The bot's response is recorded, and it is compared via embeddings distance to the original one. The closer the response, the higher the score.
3. The bot's answer and performance is recorded.

The process is repeated with more sections of the conversation: first with the first question only, then with the original first question, the original first answer and the secong question, and so on.

The conversation parameter is an array of Message objects. Each Message object has the following structure:

```json
[{
  "from": "string", // The id of the user who sent the message.
  "tagged": ["string"], // The ids of the users who were tagged in the message.
  "id": "string", // The unique identifier for the message.
  "text": "string", // The content of the message.
  "timestamp": "string" // The time when the message was sent.
}]
```

The `conversation` parameter is passed in each call to the bot's endpoint. The bot uses this parameter to understand the context of the conversation and generate a relevant response.

### Future API

<details>
  <summary>Future API</summary>

The only mandatory component in this architecture is an **"Answer Builder Bot"**. This bot is responsible for constructing responses to user queries.

The architecture is designed to be flexible and extensible, allowing for the addition of new components or the replacement of existing ones. This makes it possible to customize the system to meet specific needs or to experiment with different configurations.


```mermaid
graph TD

  C[Slack Adapter] -->|Messages| H
  D[Telegram Adapter] -->|Messages| H

  Z[User] -->|Messages| A[Discord Adapter]
  Z -->|Messages| C[Slack Adapter]
  Z -->|Messages| D[Telegram Adapter]
  A[Discord Adapter] -->|Messages| H[hive]
  H -->|last message| I[Intent classifier]
  I -->|last message| Q[Prompt builder]

  subgraph gateway
    H
    C
    D
    A
  end

  subgraph bot
    I
    Q
    KB
    
    I -->|intent|FA[Factual query builder]
    FA --> KB[Knowledge base]
    KB-->X
    X[facts] --> Q
    I -->|query| AN[Answer builder]
    KB -->|Knowledge| AN
    X -->|facts| AN
    Me[Episodic Memory] -->|facts| AN
  end
  AN ==>|answer| H

  KB -->|Knowledge| G
  gateway  --> |incoming data| G[Graph]
  Q --> |vector| Me[Store]
  Me <--> |vector| G
```

### Intent Classifier

The system also includes an intent classifier, which is responsible for determining which prompt to use to call other documents. This classifier can be a simple identity function that passes the query directly to the prompt builder, or it can be a more complex function that makes decisions based on the content of the query.

### Prompt builder

The prompt builder is another key component of the system. It can be a simple GPT-3 model with a single prompt, or it can be a more complex function that constructs prompts based on the content of the query and other factors.

## External interfaces

The system may also include interfaces to a knowledge base and to any external system that the user wants to integrate with. These interfaces allow the system to access and use information from these external sources when constructing responses to user queries.

The architecture is designed to be public, with the exception of the back-end APIs. This means that competitors can create their own versions of the components and integrate them into the system.

The system is designed to be compatible with the marketplace format, making it possible for users to create and sell their own components.

### Connecting to external systems

The system is designed to allow the use of standard APIs, such as OpenAI and Metaphor, within the templates. These APIs can be called from within the Microsoft Guidance templates that define the components of the system.

The system also allows for the integration of external data stores. These data stores are the responsibility of whoever wants to create them. The addresses of these data stores can be declared at the top of the Guidance files. This allows the system to access and use data from these stores when constructing responses to user queries.

However, it's important to note that someone who doesn't know any prompting can't provide a better "observability instrument". This means that the ability to create and integrate effective components into the system requires some knowledge and understanding of how prompting works.

In summary, the system is designed to be flexible and extensible, allowing for the integration of a variety of external APIs and data stores. This makes it possible for users to customize the system to meet their specific needs and to experiment with different configurations.

### Example bot

API spec (yahoo finance):

```yaml
name: YahooFinanceAPI
description: API for getting quotes from Yahoo Finance
baseURL: https://finance.yahoo.com/quote/
endpoints:
  - name: getQuote
    path: /{symbol}
    method: GET
    parameters:
      - name: symbol
        in: path
        required: true
        description: The symbol of the stock to get a quote for
        schema:
          type: string
```

### Answer builder (note the first `#assistant`)

```handlebars
{{#system~}}
You are an intelligent assistant.
{{~/system}}

{{#user~}}
What is the current price of {{symbol}}?
{{~/user}}

{{#assistant to=YahooFinanceAPI.getQuote~}}
{
  "symbol": "{{symbol}}"
}
{{~/assistant}}

{{#assistant~}}
The current price of {{symbol}} is {{price}}.
{{~/assistant}}
```

</details>
