import { AbstractControl } from '@angular/forms';

const pizzaNames = ['Margarita', 'BBQ', 'BBM', 'Vegetariana'];

export function validateName(control: AbstractControl) {
    if (!pizzaNames.includes(control.value)) {
        return { namePizzaValidator: true };
    }
    return null;
}