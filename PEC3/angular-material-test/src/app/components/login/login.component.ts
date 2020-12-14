import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials = new Credential();

  public email: FormControl;
  public password: FormControl;

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', Validators.required);

    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  public checkLogin(): void {
    console.log('Email: ' + this.email.value + ' Password: ' + this.password.value);
  }

}
