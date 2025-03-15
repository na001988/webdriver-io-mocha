import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('test-case-001', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
    })
})


describe('test-case-002', () => {
    it('should return main page', async () => {
        await LoginPage.open()
        await LoginPage.login('tomsmith', 'SuperSecretPassword!------')
        await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('logged'))

    })
})


