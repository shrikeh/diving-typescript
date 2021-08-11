import { PurchaseInfo } from '~diving/PurchaseInfo';
import { Resource } from 'halfred';

export interface PurchaseInfoFactory {
  fromHal(resource: Resource): PurchaseInfo;
}
