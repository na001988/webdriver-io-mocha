import { expect } from '@wdio/globals'
import ShopPage from '../pageobjects/shop.page.js'
import CartPage from '../pageobjects/cart.page.js';
import { setSharedData, getSharedData } from '../utils/helper.js';

describe('test-case-003', () => {
    let sku_1 = 2 //purchase: Stuffed Frog by ID
    let sku_2 = 4 //purchase: Fluffy Bunny by ID
    let sku_3 = 7 //purchase: Valentine Bear by ID

    it('should add new products to the car', async () => {
      await ShopPage.open()
      setSharedData('title', await ShopPage.getProductTitleText(sku_1));
      setSharedData('price', await ShopPage.getProductPriceText(sku_1));
      await ShopPage.clickBuyButton(sku_1, 2)

      setSharedData('title', await ShopPage.getProductTitleText(sku_2));
      setSharedData('price', await ShopPage.getProductPriceText(sku_2));
      await ShopPage.clickBuyButton(sku_2, 5)

      setSharedData('title', await ShopPage.getProductTitleText(sku_3));
      setSharedData('price', await ShopPage.getProductPriceText(sku_3));
      await ShopPage.clickBuyButton(sku_3, 3)

    });

    it('Should match product price', async () => {
        await CartPage.open()
        await CartPage.compareItemPrices(getSharedData('price'))
    });

    it('Should match product name', async () => {
        await CartPage.open()
        await CartPage.compareItemNames(getSharedData('title'))
    });


    it('Should perform price total calculations', async () => {
        await CartPage.open()
        await expect(CartPage.cartTotal).toExist()
        await CartPage.getSubtotalPrices()
        await CartPage.compareTotalAndSubtotal()
    });
    
});