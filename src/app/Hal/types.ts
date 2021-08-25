import { Resource } from "halfred";

export type CurrencyIsoCode = string;
export type PurchaseDate = string;
export type PurchasedUri = string | URL;

export type MoneyResource = {
  amount: number,
  currency: CurrencyIsoCode,
};

export type PurchaseInfoResource = Resource & {
  price: MoneyResource,
  purchasedOn: PurchaseDate,
  purchasedFrom?: PurchasedUri
}

export type KitResource = Resource & {
  id: string;
  name: string;
  purchaseInfo: PurchaseInfoResource;
};

export type ManufacturerResource = Resource & {
  name: string;
  homePage: string;
  phone: string;
};
