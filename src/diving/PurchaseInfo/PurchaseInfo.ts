import { Price } from '~diving/Price';
import { PurchaseDateInFuture } from './PurchaseDateInFuture';

type PurchaseDate = string | Date;
type PurchaseUri = string | URL;

export class PurchaseInfo {
  readonly price: Price;

  readonly purchaseDate: Date;

  readonly uri?: URL;

  static create(price: Price, date: PurchaseDate, purchaseUri?: PurchaseUri): PurchaseInfo {
    if (purchaseUri !== undefined) {
      purchaseUri = new URL((purchaseUri as PurchaseUri).toString());
    }

    return new PurchaseInfo(
      price,
      new Date(date.toString()),
      purchaseUri as URL | undefined
    )
  }

  constructor(price: Price, purchaseDate: Date, uri?: URL) {
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

  getUri(): URL | undefined {
    return this.uri;
  }

  private static assertPurchaseDate(purchaseDate: Date): void {
    const today = new Date();
    if (purchaseDate > today) {
      throw new PurchaseDateInFuture();
    }
  }
}

export default PurchaseInfo;
