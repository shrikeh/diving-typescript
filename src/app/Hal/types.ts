import { Resource } from "halfred";

export type Money = {

};

export type PurchaseInfo = {
  price: Money
}

export type KitResource = Resource & {
  id: string;
  name: string;
  purchaseInfo: PurchaseInfo;
};

export type ManufacturerResource = Resource & {
  name: string;
  homePage: string;
  "phone": string;
};
