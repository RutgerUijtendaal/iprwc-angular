export class Order {
  public orderId: number;
  public userId: number;
  public orderDateTime: Date;
  public deliveryStatusId: number;
  public orderStatusId: number;
  public paymentTypeId: number;

  constructor(orderId: number, userId: number, orderDateTime: string, deliveryStatusId: number, orderStatusId: number, paymentTypeId: number) {
    this.orderId = orderId;
    this.userId = userId;
    this.orderDateTime = new Date(orderDateTime);
    console.log(this.orderDateTime);
    this.deliveryStatusId = deliveryStatusId;
    this.orderStatusId = orderStatusId;
    this.paymentTypeId = paymentTypeId;
  }
}
