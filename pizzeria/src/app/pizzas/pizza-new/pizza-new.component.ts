import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';
import { pizzaNameValidator } from 'src/app/validators/pizza-name.validator';

@Component({
  selector: 'app-pizza-new',
  templateUrl: './pizza-new.component.html',
  styleUrls: ['./pizza-new.component.css'],
})
export class PizzaNewComponent {
  public message = '';

  public pizzaForm: FormGroup;

  constructor(private fb: FormBuilder, private pizzaService: PizzaService) {
    this.createForm();
  }

  createForm() {
    this.pizzaForm = this.fb.group({
      name: ['', [Validators.required, pizzaNameValidator()]],
      price: [0, [Validators.required, Validators.min(1)]],
      imageUrl: ['', [Validators.required]],
      isOnSale: false,
    });
  }

  createPizza() {
    if (this.pizzaForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      const pizza: Pizza = this.pizzaForm.value;
      this.pizzaService.create(pizza);
    }
  }
}
