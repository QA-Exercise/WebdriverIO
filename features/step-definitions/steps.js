const { Given, When, Then } = require('@wdio/cucumber-framework');
const SubmitFormPage = require('../pageobjects/submit.form.page');

Given(/^I am on the demoqa page$/, async () => {
    await SubmitFormPage.open();
    await browser.debug();
});
