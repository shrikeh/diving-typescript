import { KitItem } from "~diving/KitItem";

export interface KitRepository {
  fetchBySlug(slug: string): Promise<KitItem>;
}
