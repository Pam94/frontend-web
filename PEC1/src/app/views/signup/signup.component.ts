import { Component, OnInit } from '@angular/core';
import { User, createNewUser, UserType } from 'src/app/shared/models/user.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockData } from 'src/app/shared/mock-data';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  namePattern = "^[a-zA-Z]+$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  userTypes: UserType[];

  public user: User = createNewUser();

  public name: FormControl;
  public surname: FormControl;
  public type: FormControl;
  public email: FormControl;
  public password: FormControl;
  public repeatPassword: FormControl;

  public signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userTypes = MockData.USERTYPES;

    this.name = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(55), Validators.pattern(this.namePattern)]);

    this.surname = new FormControl('', [Validators.minLength(3), Validators.maxLength(55), Validators.pattern(this.namePattern)]);

    this.type = new FormControl('', Validators.required);

    this.email = new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]);

    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);

    this.repeatPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);

    this.signupForm = this.formBuilder.group({
      name: this.name,
      surname: this.surname,
      type: this.type,
      email: this.email,
      password: this.password,
      repeatPassword: this.repeatPassword
    });
  }

  public checkRegister() {
    this.user.name = this.name.value;
    this.user.surname = this.surname.value;
    this.user.userType = this.type.value;
    this.user.email = this.email.value;
    this.user.password = this.password.value;

    this.router.navigate(['user/home']);
  }

  compareByUID(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }

}
