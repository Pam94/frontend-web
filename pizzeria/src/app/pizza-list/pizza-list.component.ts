import { Component, OnInit } from '@angular/core';

import { Pizza } from '../model/pizza';
import { PizzaQuantityChange } from '../model/pizza-quantity-change';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  template: `
    <app-pizza-item
      [pizza]="pizza"
      (quantityChange)="onQuantityChange($event)"
      *ngFor="let pizza of (pizzas| async)"
    ></app-pizza-item>
  `,
  styles: []
})
export class PizzaListComponent {

  public pizzas: Pizza[];
  private service: PizzaService;

  constructor(private pizzaService: PizzaService) {
    this.pizzaService.getPizzas().subscribe(pizzas => { this.pizzas = pizzas; })
  }

  onQuantityChange(change: PizzaQuantityChange) {
    this.service.onQuantityChange(change.pizza.id, change.changeInQuantity);
  }

}
