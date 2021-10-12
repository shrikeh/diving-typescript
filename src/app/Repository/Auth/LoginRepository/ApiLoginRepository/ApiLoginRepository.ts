import { AxiosInstance, AxiosResponse } from 'axios';
import { BearerToken, EncryptedCredentials } from '~app/Auth/types';
import { LoginRepository } from '~app/Repository/Auth/LoginRepository';
import { EncryptedCredentials as EncryptedCredentialsEncoder } from '~app/Protobuf/Encoder/EncryptedCredentials';

export class ApiLoginRepository implements LoginRepository {
  constructor(
    private readonly client: AxiosInstance,
    private readonly encryptedCredentialsEncoder: EncryptedCredentialsEncoder
) {}

  async loginWithEncryptedCredentials(encryptedCredentials: EncryptedCredentials): Promise<BearerToken> {
    return this.client.request({
      method: "POST",
      url: "/auth",
      headers: {
        "Content-Type": "application/vnd.google.protobuf"
      },
      data: await this.encodeCrdentials(encryptedCredentials),
    }).then( (response: AxiosResponse): BearerToken => {
      return response.data;
    });
  }

  private async encodeCrdentials(encryptedCredentials: EncryptedCredentials): Promise<string> {
    return Buffer.from(
      await this.encryptedCredentialsEncoder.encode(encryptedCredentials)
    ).toString("hex");
  }
}
