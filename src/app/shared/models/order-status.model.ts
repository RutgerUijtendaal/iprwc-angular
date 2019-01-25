export class OrderStatus {
  public orderStatusId: number;
  public name: string;
  public description: string;

  constructor(orderStatusId: number, name: string, description: string) {
    this.orderStatusId = orderStatusId;
    this.name = name;
    this.description = description;
  }
}
