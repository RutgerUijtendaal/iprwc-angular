import {Product} from '@shared/models/product.model';

export class OrderedProduct {
  public productId: number;
  public product: Product;
  public orderId: number;
  public paidPrice: number;
  public itemCount: number;

  constructor(productId: number, orderId: number, paidPrice: number, itemCount: number) {
    this.productId = productId;
    this.orderId = orderId;
    this.paidPrice = paidPrice;
    this.itemCount = itemCount;
  }
}
