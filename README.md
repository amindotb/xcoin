# xcoin project
List of changes and improvements.  

## Changes:
- Remove unused packages
- Add gitignore
- Separate the app and server due to best practices for integration tests
- Add eslint files
- Linting project
- Remove duplicate middleware usage on simulator.router
- Define DB connection
- Refactor config file based on `dotenv` module
- Refactor mongoose models
- Refactor seed script
- Define types for each model in `./types`
- Set project hierarchy like bulletproof Node.js architecture
- Move `/api` from every route to entry point. Also it's best practice to change `/api` to `/v1`. The api endpoint versioning and prevent redundant url segment.
- Reformat API routers base on API best practices like: `/profile` to `/profiles` or  `/favorites/:profileId` to `/favorites/profile/:profileId`
- Install joi to validate user inputs
- Set a error catcher middleware
- Set a response model on express response
- Set a logging strategy

## What Next:
- We need authentication for app
- We need to sanitize the inputs for XSS and SQL injection attacks
- Shipping logs to log manager
- Setting and gathering application statuses
