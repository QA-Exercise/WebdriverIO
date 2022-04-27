const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SubmitFormPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async exampleMethod () {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new SubmitFormPage();
