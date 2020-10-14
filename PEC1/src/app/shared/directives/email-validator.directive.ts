import { ValidatorFn, FormControl } from '@angular/forms';

export class EmailValidator {
    static emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    public static checkEmailValid(): ValidatorFn {
        return (control: FormControl): { [key: string]: any } | null => {
            const invalid = !this.emailPattern.test(control.value);
            return invalid ? { 'invalidEmail': { value: control.value } } : null;
        }
    }
}