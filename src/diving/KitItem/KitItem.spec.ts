import { describe, test, expect } from '@jest/globals';

import { Manufacturer } from '~diving/Manufacturer';
import { PurchaseInfo } from '~diving/PurchaseInfo';
import { KitItem } from '~diving/KitItem';
import { Price } from '~diving/Price/Price';

describe('KitItem tests', () => {
  const manufacturer = Manufacturer.create("O'Three", 'https://www.othree.co.uk/');
  const name = 'Ri 2-100';
  const purchaseInfo = new PurchaseInfo(
    Price.create(123.45, 'GBP'),
    new Date(-1),
    new URL('https://www.othree.co.uk/drysuit-range/ri-2-100-flex-drysuit/'),
  );
  test('it returns the name', () => {
    const kitItem = new KitItem(name, manufacturer, purchaseInfo);

    expect(kitItem.getName()).toBe(name);
  });

  test('it returns the purchase info', () => {
    const kitItem = new KitItem(name, manufacturer, purchaseInfo);

    expect(kitItem.getPurchaseInfo()).toBe(purchaseInfo);
  });

  test('it returns the manufacturer', () => {
    const kitItem = new KitItem(name, manufacturer, purchaseInfo);

    expect(kitItem.getManufacturer()).toBe(manufacturer);
  });
});
