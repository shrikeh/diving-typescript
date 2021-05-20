import { Manufacturer } from '~diving/Manufacturer';
import { PurchaseInfo } from '~diving/PurchaseInfo';

export default class KitItem {
  constructor(
    readonly name: string,
    readonly manufacturer: Manufacturer,
    readonly purchaseInfo: PurchaseInfo,
  ) {}

  toString(): string {
    return this.getName();
  }

  getName(): string {
    return this.name;
  }

  getManufacturer(): Manufacturer {
    return this.manufacturer;
  }

  getPurchaseInfo(): PurchaseInfo {
    return this.purchaseInfo;
  }
}
