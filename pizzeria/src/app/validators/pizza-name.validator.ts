import { AbstractControl, ValidatorFn } from '@angular/forms';

const VALID_NAME = ['Margarita', 'BBQ', 'BBM', 'Cheese'];

export function pizzaNameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = !VALID_NAME.includes(control.value);
    return forbidden ? { pizzaNameValid: { value: control.value } } : null;
  };
}
