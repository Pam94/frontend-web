import { Component } from '@angular/core';
import { Pizza } from '../model/pizza';

@Component({
  selector: 'app-pizza-new',
  templateUrl: './pizza-new.component.html',
  styleUrls: ['./pizza-new.component.css']
})
export class PizzaNewComponent {

  public pizza: Pizza;
  constructor() {
    this.pizza = new Pizza(
      1,
      'BBQ',
      'assets/images/PFBB.png',
      8.5,
      false,
      []
    );
  }

  createPizza(pizzaForm) {
    console.log('Pizza form values received!', pizzaForm.value);
    this.pizza = pizzaForm.value.pizza;
    console.log(this.pizza);

  }

}
