export class ProductType {
  productTypeId: number;
  name: string;
  description: string

  constructor(productTypeId: number, name: string, description: string) {
    this.productTypeId = productTypeId;
    this.name = name;
    this.description = description;
  }
}
