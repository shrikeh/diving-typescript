export default class PurchaseDateInFuture extends Error {
  constructor() {
    super('Purchase date cannot be in the future');
  }
}
