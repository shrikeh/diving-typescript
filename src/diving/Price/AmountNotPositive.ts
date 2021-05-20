import { Decimal } from 'decimal.js';
import { sprintf } from 'sprintf-js';

export default class AmountNotPositive extends Error {
  static create(amount: Decimal): AmountNotPositive {
    return new AmountNotPositive(
      sprintf('Amount must be positive but it was %s', amount.toFixed(2)),
    );
  }
}
