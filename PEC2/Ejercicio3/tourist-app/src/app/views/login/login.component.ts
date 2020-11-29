import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/User';
import { UsersService } from 'src/app/shared/services/users.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = new User()
  public email: FormControl
  public password: FormControl
  public loginForm: FormGroup
  public error: string


  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ])

    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])

    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    })
  }


  public async checkLogin(): Promise<void> {
    this.user.email = this.email.value
    this.user.password = this.password.value
    const login = await this.usersService.login(this.user.email, this.user.password)
    
    if (login) {
      this.usersService.getCurrentUser()
      this.error = null
      this.router.navigate(['/']);
    } else {
      this.error = 'Wrong email or password'
    }
    
  }

}
