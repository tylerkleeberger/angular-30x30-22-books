import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooksModel } from 'src/app/book-list/books.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<BooksModel> = [];
  @Output() remove = new EventEmitter<string>();

}
