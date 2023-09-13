# Notes

1. Next.js automatically loads environment variables from .env.local during build time. You don't need to use dotenv or require('dotenv').config() in your Next.js application.
2. When dealing with promises in JavaScript, always remember to handle promise rejections. This can be done using .catch() blocks for promises, or try/catch blocks for async/await syntax. Unhandled promise rejections can lead to unexpected behavior and can make debugging more difficult.
3. (from @lumpenspace) ogm-src is not part of the source code; it contains useful extracts from the npm libraries we use.