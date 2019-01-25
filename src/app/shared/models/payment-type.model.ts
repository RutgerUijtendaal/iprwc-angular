export class PaymentType {
  public paymentTypeId: number;
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(paymentTypeId: number, name: string, description: string, imagePath: string) {
    this.paymentTypeId = paymentTypeId;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
