import * as EmailValidator from 'email-validator'
import { Credentials } from "~app/Auth/Credentials";
import { InvalidEmailAddress } from './Error/InvalidEmailAddress';

export class EmailPass implements Credentials {
  private readonly email: string;

  public constructor(
    email: string,
    private readonly password: string
  ) {
    EmailPass.assertEmail(email);
    this.email = email;
  }

  toJson(): object {
    return {
      email: this.email,
      password: this.password
    }
  }

  private static assertEmail(email: string): void {
    if (!EmailValidator.validate(email)) {
      throw InvalidEmailAddress.create(email);
    }
  }
}

export default EmailPass;
