import { AxiosInstance, AxiosResponse } from 'axios';

type PublicKey = {
  publicKey: string;
}

export class PublicPgpKeyRepository {

  constructor(private readonly client: AxiosInstance) {}

  async fetchPublicKey(): Promise<PublicKey> {
    return this.client.request({
      url: "/key",
      method: 'GET'
    }).then( (response: AxiosResponse): PublicKey => {
      return response.data;
    });
  }
}
