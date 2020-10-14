import { ValidatorFn, FormControl } from '@angular/forms';

export class NameValidator {
    static namePattern = /^[a-zA-Z]+$/;

    public static checkNameValid(): ValidatorFn {
        return (control: FormControl): { [key: string]: any } | null => {
            const invalid = !this.namePattern.test(control.value);
            return invalid ? { 'invalidName': { value: control.value } } : null;
        }
    }

}

