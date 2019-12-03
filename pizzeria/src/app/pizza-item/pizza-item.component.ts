import { Component, OnInit } from '@angular/core';
import { Pizza } from '../model/pizza';
import { Ingrediente } from '../model/ingrediente';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})

export class PizzaItemComponent implements OnInit {

  private pizza: Pizza;
  private queso: Ingrediente;
  private barbacoa: Ingrediente;

  private name: string;
  private price: number;
  private imageUrl: string;
  private isOnSale: boolean;
  private quantityInCart: number;
  private canReduce: boolean;

  public stockClasses;

  public pizzas: Pizza[];

  constructor() { }

  ngOnInit() {

    this.queso = new Ingrediente("Queso", 20, false, true);
    this.barbacoa = new Ingrediente("Barbacoa", 30, false, true);

    this.pizza = new Pizza("Pizza Barbacoa", "pizzaImage.jpg", 10, [this.queso, this.barbacoa]);

    this.name = this.pizza.getName();
    this.price = this.pizza.getPrice();
    this.imageUrl = this.pizza.getImageUrl();
    this.isOnSale = this.pizza.getIsOnSale();
    this.quantityInCart = this.pizza.getQuantityInCart();

    this.stockClasses = {
      "onSale": this.isOnSale,
      "offSale": !this.isOnSale,
    }

    this.canReduce = this.quantityInCart > 0;

    this.pizzas = [
      new Pizza("Pizza Barbacoa", "pizzaImage.jpg", 10, [this.queso, this.barbacoa]),
      new Pizza("Pizza Barbacoa", "pizzaImage.jpg", 10, [this.queso, this.barbacoa]),
      new Pizza("Pizza Barbacoa", "pizzaImage.jpg", 10, [this.queso, this.barbacoa])
    ]
  }

  addItem(event) {
    this.quantityInCart = this.quantityInCart + 1;
    this.pizza.setQuantityInCart(this.quantityInCart);

    this.canReduce = this.quantityInCart > 0;
  }

  removeItem(event) {
    this.quantityInCart = this.quantityInCart - 1;
    this.pizza.setQuantityInCart(this.quantityInCart);

    this.canReduce = this.quantityInCart > 0;
  }

}
