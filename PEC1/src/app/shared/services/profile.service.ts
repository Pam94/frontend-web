import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _user: User = {} as User;

  constructor(private http: HttpClient) { }

  set user(_user) {
    this._user = _user;
  }
  get user() {
    return this._user;
  }
}
