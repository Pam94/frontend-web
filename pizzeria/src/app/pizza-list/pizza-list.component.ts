import { Component, OnInit } from '@angular/core';

import { Pizza } from '../model/pizza';
import { Ingrediente } from '../model/ingrediente';
import { PizzaQuantityChange } from '../model/pizza-quantity-change';

@Component({
  selector: 'app-pizza-list',
  template: `
    <app-pizza-item
      [pizza]="pizza"
      (quantityChange)="onQuantityChange($event)"
      *ngFor="let pizza of pizzas"
    ></app-pizza-item>
  `,
  styles: []
})
export class PizzaListComponent implements OnInit {

  public pizzas: Pizza[];
  pizzaMargarita: Pizza;
  pizzaBarbacoa: Pizza;
  pizzaBBM: Pizza;

  constructor() { }

  ngOnInit() {
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
  onQuantityChange(change: PizzaQuantityChange) {
    const pizza = this.pizzas.find(({ id }) => change.pizza.id === id);
    pizza.setQuantityInCart(
      pizza.getQuantityInCart() + change.changeInQuantity);
  }

}
