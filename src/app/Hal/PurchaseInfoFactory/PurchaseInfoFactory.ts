import { KitResource } from "~app/Hal/types";
import { PurchaseInfo } from "~diving/PurchaseInfo";

export interface PurchaseInfoFactory {
  fromHal(halJson: KitResource): PurchaseInfo
}
