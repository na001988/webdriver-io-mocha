import { expect } from '@wdio/globals'
import ContactPage from '../pageobjects/contact.page.js'
import { faker } from '@faker-js/faker';

describe('test-case-002', () => {
    async function runTest(a,b,c) {
      await ContactPage.open()
      await ContactPage.fillForm(a,b,c)
      await ContactPage.submitForm()
      await expect(ContactPage.labelMessageFeedback).toExist()
      await ContactPage.returnback()
    }
  
    it('should run 5 times to ensure 100% coverage', async () => {
      await runTest(`${faker.person.firstName()}`, `${faker.internet.email()}`, `${faker.commerce.productDescription()}`);
      await runTest(`${faker.person.firstName()}`, `${faker.internet.email()}`, `${faker.commerce.productDescription()}`);
      await runTest(`${faker.person.firstName()}`, `${faker.internet.email()}`, `${faker.commerce.productDescription()}`);
      await runTest(`${faker.person.firstName()}`, `${faker.internet.email()}`, `${faker.commerce.productDescription()}`);
      await runTest(`${faker.person.firstName()}`, `${faker.internet.email()}`, `${faker.commerce.productDescription()}`);
    });
  });