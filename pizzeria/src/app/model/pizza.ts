import { Ingrediente } from './ingrediente';

export class Pizza {
    id: number;
    name: string;
    private imageUrl: string;
    private price: number;
    private isOnSale: boolean;
    private quantityInCart: number;
    private ingredients: Ingrediente[];

    constructor(
        id: number,
        name: string,
        imageUrl: string,
        price: number,
        isOnSale: boolean,
        ingredients: Ingrediente[]
    ) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.isOnSale = isOnSale;
        this.quantityInCart = 0;
        this.ingredients = ingredients;
    }

    getId() {
        return this.id;
    }

    setId(newId: number) {
        this.id = newId;
    }

    getName() {
        return this.name;
    }

    setName(newName: string) {
        this.name = newName;
    }

    getImageUrl() {
        return this.imageUrl;
    }

    setImageUrl(newImage: string) {
        this.imageUrl = newImage;
    }

    getPrice() {
        return this.price;
    }

    setPrice(newPrice: number) {
        this.price = newPrice;
    }

    getIsOnSale() {
        return this.isOnSale;
    }

    setIsOnSale(newIsOnSale: boolean) {
        this.isOnSale = newIsOnSale;
    }

    getQuantityInCart() {
        return this.quantityInCart;
    }

    setQuantityInCart(newQuantity: number) {
        this.quantityInCart = newQuantity;
    }

    getIngredients() {
        return this.ingredients;
    }

    addIngredient(newIngredient: Ingrediente) {
        this.ingredients.push(newIngredient);
    }

    removeIngredient(ingredientName: string) {
        this.ingredients = this.ingredients.filter(
            (ingrediente) => ingrediente.getName() !== ingredientName);
    }
}
