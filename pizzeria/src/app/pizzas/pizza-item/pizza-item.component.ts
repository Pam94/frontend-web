import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Pizza } from '../../models/pizza';
import { PizzaQuantityChange } from '../../models/pizza-quantity-change';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaItemComponent {
  @Input() public pizza: Pizza;
  @Output() public quantityChange: EventEmitter<
    PizzaQuantityChange
  > = new EventEmitter();

  constructor() {}

  incrementInCart() {
    this.quantityChange.emit({ pizza: this.pizza, changeInQuantity: 1 });
  }

  decrementInCart() {
    if (this.pizza.quantityInCart > 0) {
      this.quantityChange.emit({ pizza: this.pizza, changeInQuantity: -1 });
    }
  }
}
