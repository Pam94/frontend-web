import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/books.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService
      .getAllBooks()
      .subscribe((books) => this.books = books);
  }

}
