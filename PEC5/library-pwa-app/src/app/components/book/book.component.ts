import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/books.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Book;

  constructor(
    private booksService: BooksService,
    // to read parameter from url
    private activatedRoute: ActivatedRoute,
    // to redirect the user of this view if we don't
    // have a valid identifier
    private router: Router
  ) { }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    this.booksService.getBookByID(identifier)
      .subscribe((book) => {

        if (!book[0]) {
          return this.router.navigateByUrl('/');
        }

        this.book = book[0];
      })
  }

}
