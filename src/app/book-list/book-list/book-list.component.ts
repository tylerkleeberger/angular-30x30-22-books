import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooksModel } from '../books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  @Input() books: ReadonlyArray<BooksModel> = [];
  @Output() add = new EventEmitter<string>();

}
