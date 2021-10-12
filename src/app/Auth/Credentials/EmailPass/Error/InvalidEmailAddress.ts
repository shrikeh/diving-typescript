import { sprintf } from 'sprintf-js';

export class InvalidEmailAddress extends Error {
  static create(invalidEmailAddress: string): InvalidEmailAddress {
    return new InvalidEmailAddress(sprintf(
      "%s is not a valid email address", invalidEmailAddress
    ));
  }

  private constructor(msg: string) {
    super(msg);
  }
}

export default InvalidEmailAddress;
