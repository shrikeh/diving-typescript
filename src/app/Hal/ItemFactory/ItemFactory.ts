import { KitItem } from "~diving/KitItem";
import { KitResource } from "~app/Hal/types";

export interface ItemFactory {
  fromHal(halJson: KitResource): KitItem;
}

export default ItemFactory;
