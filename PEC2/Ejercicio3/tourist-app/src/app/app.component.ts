import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllActivities } from './activities/actions';
import { AppState } from './app.reducer';
import { logOut } from './login/actions';
import { User } from './shared/models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Tourist app'
  public user: User
  public isLoggedIn = false

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.store.select('login').subscribe(loginResponse => this.isLoggedIn = loginResponse.isLoggedIn);
  }

  getCurrentUser() {
    this.store.select('login').subscribe(loginResponse => this.user = loginResponse.user);
  }

  logout() {
    this.store.dispatch(logOut());
    this.store.dispatch(getAllActivities());
  }
}
