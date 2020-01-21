import { Component } from '@angular/core';
import { Pizza } from '../../model/pizza';
import { PizzaService } from '../../services/pizza.service';

@Component({
  selector: 'app-pizza-new',
  templateUrl: './pizza-new.component.html',
  styleUrls: ['./pizza-new.component.css']
})
export class PizzaNewComponent {

  public pizza: Pizza;
  private service: PizzaService;

  constructor(private pizzaService: PizzaService) {
    this.pizza = new Pizza(0, '', '', 0, false, []);
  }

  createPizza(pizzaForm) {
    console.log('Pizza form values received!', pizzaForm.value);

    this.pizza = pizzaForm.value.pizza;
    console.log(this.pizza);

    this.service.create(this.pizza).subscribe((result: any) => {
      this.pizza = new Pizza(0, '', '', 0, false, []);
    }, (err) => {
      console.log('Pizza creating error');
    });
  }

}
