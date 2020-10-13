import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private usersURL = 'http://localhost:4200/api/users';

  constructor(
    private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.usersURL).toPromise();
  }

  async login({ email, password }) {
    const users = await this.getUsers();
    return users.find(user =>
      user.email === email && user.password === password);
  }

}
