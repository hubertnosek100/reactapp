export default class OfferDto {
    name: string = "";
    color: string = "";
    image: string = "";
    company: string = "";
    address: string = "";
    amount: number = 10;

    constructor(name: string, color: string, image: string, company: string, address:string, amount: number) {
        this.name = name;
        this.color = color;
        this.image = image;
        this.company = company;
        this.address = address;
        this.amount = amount;
    }

    getSalary(): string {
        return `${this.amount} 000 - ${this.amount + 4} 000`;
    }
}