import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Pizza } from 'src/app/models/pizza';
import { PizzaQuantityChange } from 'src/app/models/pizza-quantity-change';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  template: `
    <app-pizza-item
      [pizza]="pizza"
      (quantityChange)="onQuantityChange($event)"
      *ngFor="let pizza of pizzas$ | async"
    ></app-pizza-item>
  `,
  styles: [],
})
export class PizzaListComponent implements OnInit {
  public pizzas$: Observable<Pizza[]>;
  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.pizzas$ = this.pizzaService.getPizzas();
  }
  onQuantityChange(change: PizzaQuantityChange) {
    this.pizzaService.changeQuantity(change.pizza.id, change.changeInQuantity);
  }
}
