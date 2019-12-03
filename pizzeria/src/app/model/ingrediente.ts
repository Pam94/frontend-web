export class Ingrediente {
    private name: string;
    private kcal: number;
    private vegan: boolean;
    private glutten: boolean;

    constructor(
        name: string,
        kcal: number,
        vegan: boolean,
        glutten: boolean
    ) {
        this.name = name;
        this.kcal = kcal;
        this.vegan = vegan;
        this.glutten = glutten;
    }

    getName() {
        return this.name;
    }

    setName(newName: string) {
        this.name = newName;
    }

    getKcal() {
        return this.kcal;
    }

    setKcal(newKcal: number) {
        this.kcal = newKcal;
    }

    getVegan() {
        return this.vegan;
    }

    setVegan(newVegan: boolean) {
        this.vegan = newVegan;
    }

    getGlutten() {
        return this.glutten;
    }

    setGlutten(newGlutten: boolean) {
        this.glutten = newGlutten;
    }
}
