export class CartItemResponse {
  public productId: number;
  public itemCount: number;

  constructor(productId: number, itemCount: number) {
    this.productId = productId;
    this.itemCount = itemCount;
  }
}
