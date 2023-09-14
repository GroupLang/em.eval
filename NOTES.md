# Notes

1. Next.js automatically loads environment variables from .env.local during build time. You don't need to use dotenv or require('dotenv').config() in your Next.js application.
2. When dealing with promises in JavaScript, always remember to handle promise rejections. This can be done using .catch() blocks for promises, or try/catch blocks for async/await syntax. Unhandled promise rejections can lead to unexpected behavior and can make debugging more difficult.
3. (from @lumpenspace) ogm-src is not part of the source code; it contains useful extracts from the npm libraries we use.
4. Remember to secure your API key and not expose it in client-side code or public repositories. It's a good practice to store sensitive data like API keys in environment variables.
5. Remember to add the necessary error handling in your resolvers. For example, you should handle the case where an App_Emulee entity with the given ID does not exist.
6. Remember to update the type of ResponseData to reflect the new structure of the response data.
7. Providing specific error messages can help the user understand what went wrong and how they can fix it.
8. Remember to always prioritize security when dealing with sensitive data like API keys. This can include using HTTPS, storing the API key securely, encrypting the API key, and using secure cookies.
9. Always store sensitive data like API keys in environment variables and never expose them in your codebase or commit them to source control.
10. Testing is a crucial part of software development. It helps to ensure that your code works as expected, and it can catch bugs and issues before they affect your users. Always include tests for your code, including unit tests, integration tests, and end-to-end tests.
11. When writing tests, aim for high coverage but also consider the quality of your tests. It's better to have meaningful tests that cover the most important parts of your code than to have 100% coverage with shallow or meaningless tests.


