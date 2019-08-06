export default class OfferDto {
    id: number = -1;
    name: string = "";
    color: string = "";
    image: string = "";
    company: string = "";
    address: string = "";
    desc: string = "";
    amount: number = 10;

    constructor(id: number, name: string, color: string, image: string, company: string, address: string, amount: number, desc: string) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.image = image;
        this.company = company;
        this.address = address;
        this.amount = amount;
        this.desc = desc;
    }

    getSalary(): string {
        return `${this.amount} 000 - ${this.amount + 4} 000`;
    }
}