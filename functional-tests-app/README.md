## General info

These repository includes API tests for the UPMC Chat-bot in MyHealth consumer portal

## Tech stack

Mocha - test framework

mochaawesome reporter

node-fetch

## Infrastructure setup 

1. Install Node & NPM

2. Clone project 

```git clone https://gitlab.mobidev.biz/borsuk/upmc-chat-bot-api-tests.git```

3. In project root directory run

``npm install``

4. Create a .env file in the project root directory. Define the next variables:

* API_KEY - Chat-bot api-key
* SUBSCRIPTION_KEY_DEV_TEST - Chat-bot subscription key for Dev & Test environments 
* SUBSCRIPTION_KEY_STAGE - Chat-bot subscription key for Stage environment
* CLIENT_ID - body parameter 'client_id' get userIdToken request (ROPC flow)
* SCOPE - body parameter 'scope' for userIdToken request (ROPC flow)
* USER_NAME - body parameter 'username' for userIdToken request (ROPC flow)
* PASSWORD - body parameter 'password' for userIdToken request (ROPC flow)
* DIRECT_LINE_SECRET_DEV - chat bot direct line secret key for Dev environment
* DIRECT_LINE_SECRET_TEST - chat bot direct line secret key for Test environment
* DIRECT_LINE_SECRET_STAGE - chat bot direct line secret key for Stage environment

## Run tests

```npm run checkDEV``` to run tests on DEV environment

```npm run checkTEST``` to run tests on TEST environment

```npm run checkSTAGE``` to run tests on STAGE environment

## Run intents recognition tests only
Note: This type of test will run **intents recognition tests** only.

To run intent recognition tests only you need to configure the **package.json** file. Please add to the **testSuite** property of the  **scripts** object this parameter ```--grep 'intents'```

## Run functional bot tests only
To run intent recognition tests only you need to configure the **package.json** file. Please add to the **testSuite** property of the  **scripts** object this parameter ```--grep 'intents' --invert=true```

**Note:**
* Functional tests only are configured to run by default. 
* Live Chat tests will be automatically skipped if tests run on the STAGE environment to avoid connect to a real live chat agent.