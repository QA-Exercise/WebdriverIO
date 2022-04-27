const { Given, When, Then } = require('@wdio/cucumber-framework');
const SubmitFormPage = require('../pageobjects/submit.form.page');

Given(/^I am on the demoqa page$/, async (page) => {
    await SubmitFormPage.open();
});
