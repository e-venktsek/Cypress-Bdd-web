# Cypress (cucumber) tests for customer (API Marketplace)

# Developer setup

## Development environment
IDE Installation: Visual Studio code / VS code

Suggested extensions: https://docs.cypress.io/guides/tooling/IDE-integration#Visual-Studio-Code

### Dependencies
cypress requires [NPM](https://www.npmjs.com) (version at least 6.14.14) to be installed

### Setup Cypress
You will need to install cypress and link with npm
```bash 
npm install --save-dev
npm install cypress --save-dev
npm link
npm link @badeball/cypress-cucumber-preprocessor
```

## Running tests
Note that in all cases the properties need to be injected, this is done as a comma separated list on the command line passed after the option --env. The currently required properties are:
<dl>
<dt>url</dt><dd>The base url for the system under test. Example: https://myawaazqa.asianpaints.com/dpstorefront/dp/en/INR/</dd>
<dt>basic_auth_username</dt><dd>The username for basic auth (note that the tests do not currently support a system without basic auth enabled)</dd>
<dt>basic_auth_password</dt><dd>The password for basic auth</dd>
</dl>

### Interactive tests
```bash 
npx cypress open --env url=https://myawaazqa.asianpaints.com/dpstorefront/dp/en/INR/emplogin/,username=123456,password=password
```

### Headless tests
```bash 
npx cypress run --env url=https://myawaazqa.asianpaints.com/dpstorefront/dp/en/INR/emplogin/,username=123456,password=password
```