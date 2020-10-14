import { ValidatorFn, FormControl } from '@angular/forms';

export class DateValidator {
    static datePattern = /^\d{1,2}\.\d{1,2}\.\d{4}$/;

    public static checkDateValid(): ValidatorFn {
        return (control: FormControl): { [key: string]: any } | null => {
            const invalid = !this.datePattern.test(control.value);
            return invalid ? { 'invalidDate': { value: control.value } } : null;
        }
    }
}