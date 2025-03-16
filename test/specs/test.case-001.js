import { expect } from '@wdio/globals'
import ContactPage from '../pageobjects/contact.page.js'

describe('test-case-001', () => {
    it('should validate mandatory fields', async () => {
        await ContactPage.open()
        await ContactPage.submitForm()
        await expect(ContactPage.labelForenameError).toExist()
        await expect(ContactPage.labelEmailError).toExist()
        await expect(ContactPage.labelMessageError).toExist()

        await ContactPage.fillForm('ab','ab@org.com','ab')

        let name = await ContactPage.labelForenameError.isDisplayed()
        expect(name).toBe(false);

        let email = await ContactPage.labelEmailError.isDisplayed()
        expect(email).toBe(false);

        let message = await ContactPage.labelMessageError.isDisplayed()
        expect(message).toBe(false);
    })
})