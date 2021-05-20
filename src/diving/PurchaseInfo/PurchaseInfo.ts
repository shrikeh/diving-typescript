import { Price } from '~diving/Price';
import PurchaseDateInFuture from './PurchaseDateInFuture';

export default class PurchaseInfo {
  readonly price: Price;

  readonly purchaseDate: Date;

  readonly uri: URL;

  constructor(price: Price, purchaseDate: Date, uri: URL) {
    PurchaseInfo.assertPurchaseDate(purchaseDate);
    this.purchaseDate = purchaseDate;
    this.price = price;
    this.uri = uri;
  }

  getPrice(): Price {
    return this.price;
  }

  getPurchaseDate(): Date {
    return this.purchaseDate;
  }

  getUri(): URL {
    return this.uri;
  }

  private static assertPurchaseDate(purchaseDate: Date): void {
    const today = new Date();
    if (purchaseDate > today) {
      throw new PurchaseDateInFuture();
    }
  }
}
