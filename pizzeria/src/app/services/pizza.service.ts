import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Pizza } from '../model/pizza';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PizzaService {
  private API_ENDPOINT = 'http://localhost:3000/api/pizza'
  constructor(private http: HttpClient) { }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.API_ENDPOINT);
  }

  create(pizza: Pizza): Observable<any> {
    return this.http.post(this.API_ENDPOINT, pizza);
  }

  onQuantityChange(pizzaID: number, changeInQuantity: number): Observable<Pizza> {
    return this.http.patch<Pizza>('${this.API_ENDPOINT}/${pizzaID}',
      {
        changeInQuantity,
      });
  }
}
