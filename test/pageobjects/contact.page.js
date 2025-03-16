import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputForename () {
        return $('#forename');
    }

    get labelForenameError () {
        return $('#forename-err');
    }

    get inputEmail () {
        return $('#email');
    }

    get labelEmailError () {
        return $('#email-err');
    }

    get inputMessage () {
        return $('#message');
    }
    
    get labelMessageError () {
        return $('#message-err');
    }

    get labelMessageFeedback () {
        return $('.alert .ng-binding');
    }

    get btnSubmit () {
        return $('.btn-contact');
    }

    get btnReturnBack () {
        return $('a.btn[ng-click="goBack()"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     */
    async fillForm (forename, email, message) {
        await this.inputForename.setValue(forename);
        await this.inputEmail.setValue(email);
		await this.inputMessage.setValue(message);
    }
	
	async submitForm () {
        await this.btnSubmit.click();
    }

    async returnback () {
        await this.btnReturnBack.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('contact');
    }
}

export default new ContactPage();
