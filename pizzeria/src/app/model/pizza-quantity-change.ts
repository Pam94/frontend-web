import { Pizza } from './pizza';

export interface PizzaQuantityChange {
    pizza: Pizza;
    changeInQuantity: number;
}
