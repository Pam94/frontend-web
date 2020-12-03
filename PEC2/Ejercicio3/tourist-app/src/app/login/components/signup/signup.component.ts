import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { generateMockUser, User } from 'src/app/shared/models/User';
import { UserType } from 'src/app/shared/models/UserType';
import { addUser } from '../../actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public user: User = generateMockUser();
  public name: FormControl
  public surname: FormControl
  public type: FormControl
  public email: FormControl
  public password: FormControl
  public confirmpassword: FormControl
  public signupForm: FormGroup

  public error: string

  public types = UserType
  public keys: string[]

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    this.keys = Object.keys(this.types).filter(k => !isNaN(Number(k)));
  }

  ngOnInit(): void {

    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(35),
      Validators.pattern("^[a-zA-Z ]*$"),
      this.noWhitespaceValidator()
    ])

    this.surname = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(35),
      Validators.pattern("^[a-zA-Z ]*$"),
      this.noWhitespaceValidator()
    ])

    this.type = new FormControl('', [
      Validators.required
    ])

    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ])

    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])

    this.confirmpassword = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])

    this.signupForm = this.formBuilder.group({
      name: this.name,
      surname: this.surname,
      type: this.type,
      email: this.email,
      password: this.password,
      confirmpassword: this.confirmpassword
    }, {
      validator: this.mustMatch('password', 'confirmpassword')
    })
  }

  noWhitespaceValidator(): ValidatorFn {
    const nameRe = new RegExp('(^\s+|\s+$)')
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { noWhiteSpace: { value: control.value } } : null;
    }
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  /*public async joinNow(): Promise<void> {
    this.user.name = this.name.value
    this.user.surname = this.surname.value
    this.user.type = this.type.value
    this.user.email = this.email.value
    this.user.password = this.password.value
    const signup = await this.usersService.addUser(this.user)

    if (signup) {
      this.usersService.getCurrentUser()
      this.error = null
      this.router.navigate(['/']);
    } else {
      this.error = 'Email already in use. Maybe you are already registered'
    }

  }*/

  joinNow(): void {
    this.user.name = this.name.value
    this.user.surname = this.surname.value
    this.user.type = this.type.value
    this.user.email = this.email.value
    this.user.password = this.password.value

    this.store.dispatch(addUser({ newUser: this.user }));
  }

}
