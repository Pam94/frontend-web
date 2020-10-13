import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, createNewUser } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  public user: User = createNewUser();

  public email: FormControl;
  public password: FormControl;
  public signinForm: FormGroup;

  private users: Observable<User[]>;

  constructor(
    private signinService: SigninService,
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.email = new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);

    this.signinForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  public checkLogin() {
    this.user.email = this.email.value;
    this.user.password = this.password.value;

    this.signinService.login({ ...this.signinForm.value }).then(user => {
      if (!user) {
        return;
      }
      this.profileService.user = user;
      console.log(user);
      this.router.navigate(['user/home']);
    });
  }

}
