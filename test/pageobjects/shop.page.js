import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShopPage extends Page {
    /**
     * define selectors using getter methods
     */
    constructor(productPrefix = 'product-') {
        super()
        this.productPrefix = productPrefix;
      }

      getProductLabel(productNumber) {
        return $(`#${this.productPrefix}${productNumber} .product-title`);
      }
    
      getPriceLabel(productNumber) {
        return $(`#${this.productPrefix}${productNumber} .product-price`);
      }
    
      getBuyButton(productNumber) {
        return $(`#${this.productPrefix}${productNumber} .btn`);
      }
    
      async getProductTitleText(productNumber) {
        return await this.getProductLabel(productNumber).getText();
      }
    
      async getProductPriceText(productNumber) {
        return await this.getPriceLabel(productNumber).getText();
      }
    
      async clickBuyButton(productNumber, qty) {
        for (let i = 0; i < qty; i++){
          await this.getBuyButton(productNumber).click();
        }
      }
    
      async isProductVisible(productNumber){
        return await this.getProductLabel(productNumber).isDisplayed();
      }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
            return super.open('shop');
    }
}

export default new ShopPage();
