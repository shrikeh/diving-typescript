import { describe, test, expect } from '@jest/globals';
import { Manufacturer } from '~diving/Manufacturer';

describe('Manufacturer tests', () => {
  const name = "O'Three";
  const url = 'https://www.othree.co.uk/';
  test('It returns the name', () => {
    const manufacturer = new Manufacturer(name, new URL(url));

    expect(manufacturer.getName()).toBe(name);
  });

  test('It returns the URL', () => {
    const manufacturer = Manufacturer.create(name, url);
    expect(manufacturer.getUrl().toString()).toBe(url);
  });
});
