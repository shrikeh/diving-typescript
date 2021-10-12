import { describe, test } from "@jest/globals";
import { mock } from 'jest-mock-extended';
import { parse } from "halfred";
import { resolve } from "path";
import HalItemFactory from './HalItemFactory';
import ManufacturerFactory from "~app/Hal/ManufacturerFactory";
import PurchaseInfoFactory from "~app/Hal/PurchaseInfoFactory";
import { KitResource, ManufacturerResource } from "~app/Hal/types";
import { Manufacturer, PurchaseInfo } from "~diving/globals";
import { readFileSync } from 'fs';

describe('HalItemFactory', () => {

  const kit = parse(JSON.parse(readFileSync(
    resolve((global as any).__fixturesDir, 'KitItem.json')
  ).toString())) as KitResource;
  test('It returns a KitItem', () => {
    const manufacturer = mock<Manufacturer>();
    const purchaseInfo = mock<PurchaseInfo>();
    const manufacturerFactory = mock<ManufacturerFactory>();

    const manufacturerResource = kit.embeddedResource('kit:manufacturer') as ManufacturerResource;
    manufacturerFactory.fromHal.calledWith(manufacturerResource).mockReturnValue(manufacturer);

    const purchaseInfoFactory = mock<PurchaseInfoFactory>();
    purchaseInfoFactory.fromHal.calledWith(kit).mockReturnValue(purchaseInfo);

    const halItemFactory = new HalItemFactory(manufacturerFactory, purchaseInfoFactory);

    expect(halItemFactory.fromHal(kit).getManufacturer()).toBe(manufacturer);
  });
});
