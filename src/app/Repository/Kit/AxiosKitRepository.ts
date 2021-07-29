import { KitRepository } from "~diving/KitBag/KitRepository";
import { KitItem } from "~diving/KitItem";
import { AxiosInstance, AxiosResponse } from "axios";
import { ItemFactory } from "~app/Hal/ItemFactory";
import { parse } from "halfred";
import { KitResource } from "~app/Hal/types";

export class AxiosKitRepository implements KitRepository {

  constructor(private readonly client: AxiosInstance, private readonly itemFactory: ItemFactory) {}

  async fetchByUrl(uri: URL): Promise<KitItem> {
    return this.client.request({
      url: uri.toString(),
      method: 'GET'
    }).then( (response: AxiosResponse): KitItem => {
      return this.itemFactory.fromHal(parseToHal(response));
    });
  }
}

function parseToHal(response: AxiosResponse): KitResource {
  return parse(JSON.parse(response.data)) as KitResource;
}

export default AxiosKitRepository;
