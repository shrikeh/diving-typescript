export class Manufacturer {
  static create(name: string, uri: string | URL): Manufacturer {
    return new Manufacturer(
      name,
      typeof uri === 'string' ? new URL(uri) : uri,
    );
  }

  constructor(readonly name: string, readonly url: URL) {}

  toString(): string {
    return this.getName();
  }

  getName(): string {
    return this.name;
  }

  getUrl(): URL {
    return this.url;
  }
}

export default Manufacturer;
