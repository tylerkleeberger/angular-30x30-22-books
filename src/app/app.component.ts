import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookListService } from './book-list/book-list.service';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection)

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }


ngOnInit() {
  this.bookService.getBooks().subscribe((books) => this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
  );
}


  constructor(
    private store: Store,
    private bookService: BookListService
  ) {}

}
