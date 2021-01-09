import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/books.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  apiBooks = 'https://www.etnassoft.com/api/v1/get';

  httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiBooks}/?all`);
  }

  getBookByID(id: String): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiBooks}/?id=${id}`);
  }
}
