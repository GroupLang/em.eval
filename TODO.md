# "Dashboard" page

When navigating to /dashboard, a user should see a list of bots, both theirs and other users'.

- [x] A card for each of their bots, with:
  - [ ] a link for creating a new chat and one that would expand a list of all the chats with that bot.
  - [ ] (the link should create the chat and then redirect to it)
  - [x] The name and avatar of the user who created the bot.
- A filtering interface should be provided, so that the user can filter by:
  - author
  - bot's username
  - emulee's username
- a form to create a new one.

This page, together with the chat, should be included in a new layout.

The layout will have: a sidebar / burger menu with all the past chats and a link to the developers page + a button to create a new one.

# Your summary
<!-- 
Here are the tasks that need to be done based on the TODO file:

1. In the dashboard.tsx file, you need to add a card for each bot. This card should contain:
- A link for creating a new chat and one that would expand a list of all the chats with that bot.
- The name and avatar of the user who created the bot.

2. You also need to provide a filtering interface on the dashboard page so that the user can filter bots by:
- Author
- Bot's username
- Emulee's username --> DONE

3. You need to add a form to create a new bot.

4. The dashboard page and the chat page should be included in a new layout. This layout will have a sidebar/burger menu with all the past chats and a link to the developers page, plus a button to create a new bot.

For the chat/index.tsx file, it seems to be handling the chat functionality well. However, you might want to consider adding error handling for the sendMessage mutation and also handling the case where the conversationId or bot.username is not available.

Remember to use GraphQL for fetching and manipulating data, and the custom OGM methods for interacting with the Neo4j database. Also, use arrow functions as per your style preference.
