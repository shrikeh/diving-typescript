import { ManufacturerResource } from "~app/Hal/types";
import { Manufacturer } from "~diving/Manufacturer";

export interface ManufacturerFactory {
  fromHal(resource: ManufacturerResource): Manufacturer;
}

export default ManufacturerFactory;
