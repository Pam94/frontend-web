import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { throwError as ObservableThrow } from 'rxjs';

import { Pizza } from '../model/pizza';
import { Ingrediente } from '../model/ingrediente';

@Injectable()
export class PizzaService {

  public pizzas: Pizza[];
  pizzaMargarita: Pizza;
  pizzaBarbacoa: Pizza;
  pizzaBBM: Pizza;

  constructor() {
    this.pizzaMargarita = new Pizza(
      1,
      "Margarita",
      "assets/images/PF4F.png",
      7.25,
      false,
      [
        new Ingrediente("lechuga", 6, true, false),
        new Ingrediente("bacon", 200, false, false)
      ]);

    this.pizzaBarbacoa = new Pizza(
      2,
      'BBQ',
      'assets/images/PFBB.png',
      8.5,
      false,
      []
    );

    this.pizzaBBM = new Pizza(
      3,
      'BBM',
      'assets/images/PFBBM.png',
      8.25,
      true,
      []
    );

    this.pizzas = [this.pizzaMargarita, this.pizzaBarbacoa, this.pizzaBBM];

  }

  getPizzas(): Observable<Pizza[]> {
    return ObservableOf(this.pizzas);
  }

  create(pizza: Pizza): Observable<any> {
    let foundPizza = this.pizzas.find(each => each.getId() === pizza.getId());
    if (!foundPizza) {
      this.pizzas.push(pizza);
      return ObservableOf({ msg: 'Pizza sucessfully created' });
    }

    return ObservableThrow({ msg: 'Pizza already exists' });
  }

  onQuantityChange(pizzaID: number, changeInQuantity: number): Observable<Pizza> {
    let pizza = this.pizzas.find(({ id }) => pizzaID === id);
    pizza.setQuantityInCart(
      pizza.getQuantityInCart() + changeInQuantity);

    return ObservableOf(pizza);
  }
}
