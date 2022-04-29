#  SDET WebdriverIO automation skills check

WebDriverIO Docs: https://webdriver.io/docs/gettingstarted

### Goal

* Create automation scripts to test a practice form
* Execute automation scripts in Github Actions
* Please use Cucumber POM approach.

### Getting started

* Run `npm install` first, to install dependencies
* Run `npm run wdio` to run the test collection

### Instructions

* Page to Automate - https://demoqa.com/automation-practice-form
* Github Actions are configured in .github/workflows
* `wdio.conf.js` - Automation Framework configuration file is using Chrome in headless mode and spec for the reporter. You're welcome to use any other reporter, such as JUnit, Allure, or Cucumber-json

1. Fork this repo to your own **PRIVATE** repository. This should not be public.
1. Complete the page automation to your satisfaction
1. Push to your forked repo & ensure that the Github Action passes with your tests
1. Under your repo settings -> collaborators, grant Read access to @QA-Exercise.

### What we look for
1. Test Data - Don't use same data over and over again. Use FakerJS to generate random test data for names, emails, phone numbers.
1. Step-Definitions - Try to create reusable step definitions. Use [parameterization](https://github.com/cucumber/cucumber-expressions#readme) when possible.
1. Features - Use Scenario as well as Scenario Outline with data table.
1. Page-Objects - DO NOT make your selectors too generic.
