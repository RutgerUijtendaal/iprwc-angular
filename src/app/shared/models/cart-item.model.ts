import {Product} from '@shared/models/product.model';

export class CartItem {
  public product: Product;
  public itemCount: number;

  constructor(product: Product,
              itemCount: number) {
    this.product = product;
    this.itemCount = itemCount;
  }
}
