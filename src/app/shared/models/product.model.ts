export class Product {
  public productId: number;
  public supply: number;
  public archived: boolean;
  public taxId: number;
  public productTypeId: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public price: number;

  constructor(productId: number,
              supply: number,
              archived: boolean,
              taxId: number,
              productTypeId: number,
              name: string,
              description: string,
              imagePath: string,
              price: number) {
    this.productId = productId;
    this.supply = supply;
    this.archived = archived;
    this.taxId = taxId;
    this.productTypeId = productTypeId;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.price = price;
  }
}
