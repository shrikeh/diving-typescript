import PurchaseInfoFactory from '~app/Hal/PurchaseInfoFactory';
import { MoneyResource, PurchaseInfoResource } from '~app/Hal/types';
import { PurchaseInfo } from '~/src/diving';
import { Price } from '~diving/Price';

export class HalPurchaseInfoFactory implements PurchaseInfoFactory {
  fromHal(resource: PurchaseInfoResource): PurchaseInfo {

    return PurchaseInfo.create(
      this.createPrice(resource.price),
      new Date(resource.purchasedOn),
      resource.purchasedFrom
    );
  }

  private createPrice(resource: MoneyResource): Price {
    return Price.create(resource.amount, resource.currency);
  }
}

export default HalPurchaseInfoFactory;
