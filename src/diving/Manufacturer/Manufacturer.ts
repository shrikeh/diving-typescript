type HomePage =  string | URL;

export class Manufacturer {
  static create(name: string, uri: HomePage): Manufacturer {
    return new Manufacturer(
      name,
      typeof uri === 'string' ? new URL(uri) : uri,
    );
  }

  constructor(readonly name: string, readonly homepage: URL) {}

  toString(): string {
    return this.getName();
  }

  getName(): string {
    return this.name;
  }

  getHomepage(): URL {
    return this.homepage;
  }
}

export default Manufacturer;
