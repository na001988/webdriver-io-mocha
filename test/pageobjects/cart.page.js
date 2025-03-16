import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
 
    get cartItems () {
        return $$('.table tbody tr');
    }

    get cartSubTotal () {
        return $('td:nth-child(2)');
    }

    get cartTotal () {
        return $('.total');
    }

    get cartItemName () {
        return $('tbody tr td:nth-child(1)');
    }

    async getSubtotalPrices () {
        const prices = [];
        const items = await this.cartItems;
        for (const item of items) {
          const subtotalElement = await item.$('td:nth-child(4)'); 
          const subtotalText = await subtotalElement.getText();
          const price = parseFloat(subtotalText.replace('$', ''));
          prices.push(price);
        }
        return prices;
    }

    async compareItemPrices (data) {
        const items = await this.cartItems;
        for (const item of items) {
          const subtotalElement = await item.$('td:nth-child(4)'); 
          const subtotalText = await subtotalElement.getText();
          if (data === subtotalText) {
            await expect(subtotalText).toBe(data)
          }
        }
        return;
    }

    async compareItemNames (data) {
        const items = await this.cartItems;
        for (const item of items) {
          const nameElement = await item.$('tbody tr td:nth-child(1)'); 
          const nameText = await nameElement.getText();
          if (data === nameText) {
            await expect(nameText).toBe(data)
          }
        }
        return;
    }

    async getPriceByItem () {
        return await this.cartSubTotal.getText();
    }

    async getNameByItem () {
        return await this.cartItemName.getText(); 
    }

    async getTotalPrice () {
        const totalText = await this.cartTotal.getText();
        return parseFloat(totalText.replace('Total: ', ''));
    }
    
    async sumSubtotalPrices () {
        const prices = await this.getSubtotalPrices();
        return prices.reduce((sum, price) => sum + price, 0);
    }
    
    async compareTotalAndSubtotal () {
        const subtotalSum = await this.sumSubtotalPrices();
        const totalPrice = await this.getTotalPrice();
        expect(subtotalSum).toBe(totalPrice);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
            return super.open('cart');
    }
}

export default new CartPage();
