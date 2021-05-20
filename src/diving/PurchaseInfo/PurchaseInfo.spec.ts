import { describe, test, expect } from '@jest/globals';
import { PurchaseInfo, PurchaseDateInFuture } from '~diving/PurchaseInfo';
import { Price } from '~diving/Price/Price';

describe('PurchaseInfo tests', () => {
  const today = new Date();
  const price = Price.create(777.65, 'GBP');

  const purchaseUri = new URL('https://simplyscuba.com');
  test('It throws an error if the purchase date is in the future', () => {
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    expect(() => {
      new PurchaseInfo(price, tomorrow, purchaseUri); // eslint-disable-line no-new
    }).toThrow(PurchaseDateInFuture);
  });

  const yesterday = new Date(today.getDate() - 1);
  const purchaseInfo = new PurchaseInfo(price, yesterday, purchaseUri);

  test('It returns the purchase date', () => {
    expect(purchaseInfo.getPurchaseDate()).toBe(yesterday);
  });

  test('It returns the purchase cost', () => {
    expect(purchaseInfo.getPrice()).toBe(price);
  });

  test('It returns the purchase URI', () => {
    expect(purchaseInfo.getUri()).toBe(purchaseUri);
  });
});
