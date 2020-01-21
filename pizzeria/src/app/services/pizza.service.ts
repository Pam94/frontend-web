import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';

@Injectable()
export class PizzaService {
  private API_ENDPOINT = 'http://localhost:3000/api/pizza';
  constructor(private httpClient: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return this.httpClient.get<Pizza[]>(this.API_ENDPOINT);
  }

  changeQuantity(pizzaID: number, changeInQuantity: number): Observable<Pizza> {
    return this.httpClient.patch<Pizza>(`${this.API_ENDPOINT}/${pizzaID}`, {
      changeInQuantity,
    });
  }

  create(pizza: Pizza): Observable<any> {
    return this.httpClient.post<Pizza>(this.API_ENDPOINT, pizza);
  }
}
