import ItemFactory from "../ItemFactory";
import { KitItem } from "~diving/KitItem";
import { KitResource, ManufacturerResource } from "~app/Hal/types";
import { ManufacturerFactory } from "~app/Hal/ManufacturerFactory";
import { PurchaseInfoFactory } from "~app/Hal/PurchaseInfoFactory";

export class HalItemFactory implements ItemFactory {

  constructor(
    private readonly manufacturerFactory: ManufacturerFactory,
    private readonly purchaseInfoFactory: PurchaseInfoFactory
  ) {}

  fromHal(kit: KitResource): KitItem {
    return new KitItem(
      kit.name,
      this.manufacturerFactory.fromHal(kit.embeddedResource('kit:manufacturer') as ManufacturerResource),
      this.purchaseInfoFactory.fromHal(kit.purchaseInfo)
    );
  }
}

export default HalItemFactory;
