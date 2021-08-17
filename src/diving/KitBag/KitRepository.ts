import { KitItem } from "~diving/KitItem";

export interface KitRepository {
  fetchByUrl(uri: URL): Promise<KitItem>;
}
