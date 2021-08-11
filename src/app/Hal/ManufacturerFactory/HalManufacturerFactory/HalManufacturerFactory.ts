import ManufacturerFactory from "~app/Hal/ManufacturerFactory/ManufacturerFactory";
import { ManufacturerResource } from "~app/Hal/types";
import { Manufacturer } from "~diving/Manufacturer";

export class HalManufacturerFactory implements ManufacturerFactory {
  fromHal(resource: ManufacturerResource): Manufacturer {
    return new Manufacturer(
      resource.name,
      new URL(resource.homePage)
    );
  }
}

export default HalManufacturerFactory;
