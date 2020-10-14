import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private usersURL = 'http://localhost:4200/api/users';

  private _user: User = {} as User;

  constructor(private http: HttpClient) { }

  set user(_user) {
    this._user = _user;
  }
  get user() {
    return this._user;
  }

  isTourist() {
    return this.user.userType.name === 'tourist';
  }

  getUserById(id: number) {
    this.http.get<User>(this.usersURL + `$/{id}`);
  }
}
