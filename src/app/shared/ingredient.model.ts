export class Ingredient {
    constructor(public name: string, public amount: number) {}

    public toString(): string {
        return `${this.name} -  (${this.amount})`;
    }
}
