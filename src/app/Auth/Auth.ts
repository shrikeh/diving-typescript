import { Encryptor } from "./Encryptor";
import { Credentials } from '~app/Auth/Credentials';
import { ApiLoginRepository } from '~app/Repository/Auth/LoginRepository/ApiLoginRepository/ApiLoginRepository';

type BearerToken = string;

export class Auth {
  constructor(
    private readonly encryptor: Encryptor,
    private readonly loginRepository: ApiLoginRepository
  ) {}

  public async login(credentials: Credentials): Promise<BearerToken> {
    const encrypted = this.encryptor.encrypt(credentials);

    return this.loginRepository.loginWithEncryptedCredentials(await encrypted);
  }
}
