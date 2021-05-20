import { Decimal } from 'decimal.js';
import NumberFormat = Intl.NumberFormat;
import AmountNotPositive from '~diving/Price/AmountNotPositive';

export enum CurrencyIsoCode {
  GBP = 'GBP',
  USD = 'USD',
  EUR = 'EUR',
}

export class Price {
  private readonly amount: Decimal;

  private readonly currency: CurrencyIsoCode;

  private readonly formattedNumber: NumberFormat;

  static create(amount: number, currency: string): Price {
    return new Price(new Decimal(amount), currency as CurrencyIsoCode);
  }

  constructor(amount: Decimal, currency: CurrencyIsoCode) {
    if (!amount.isPositive()) {
      throw AmountNotPositive.create(amount);
    }

    this.amount = amount;
    this.currency = currency;
    this.formattedNumber = new NumberFormat(
      'en-GB',
      { style: 'currency', currency: currency.toString() },
    );
  }

  toString(): string {
    return this.formattedNumber.format(this.amount.toNumber());
  }
}
