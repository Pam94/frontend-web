import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { validateName } from './namePizzaValidator';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.css']
})
export class PizzaCreateComponent {

  public pizzaForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.pizzaForm = this.fb.group({
      pizzaName: [null, [Validators.required, validateName]],
      pizzaPrice: [1, [Validators.required, Validators.min(1)]],
      pizzaImageUrl: [null, [Validators.required, Validators.pattern("http[s] ?://www.[a-zA-z0-9]*.[a-zA-Z]{2,3}/[a-zA-Z-]*.[a-zA-Z]{3}")]],
      pizzaIsOnSale: null
    });
  }

  createPizza() {
    console.log('Name Control Value', this.pizzaForm.value);
  }

  get name() {
    return this.pizzaForm.get('pizzaName');
  }
  get price() {
    return this.pizzaForm.get('pizzaPrice');
  }

  get imageURL() {
    return this.pizzaForm.get('pizzaImageUrl');
  }

}
