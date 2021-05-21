import { describe, expect, test } from '@jest/globals';
import Decimal from 'decimal.js';
import { sprintf } from 'sprintf-js';
import { AmountNotPositive, CurrencyIsoCode, Price } from '~diving/Price';

describe('Price tests', () => {
  test('It throws an error if the amount is not positive', async () => {
    const amount = new Decimal(-1.01);

    expect(() => {
      new Price(amount, CurrencyIsoCode.EUR); // eslint-disable-line no-new
    }).toThrow(AmountNotPositive.create(amount));
  });

  test('It returns a currency string', async () => {
    const amount = 123.45;
    const price = Price.create(amount, 'EUR');

    expect(price.toString()).toBe(sprintf('€%f', amount));
  });
});
