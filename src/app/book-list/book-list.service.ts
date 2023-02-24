import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BooksModel } from './books.model';

@Injectable({
  providedIn: 'root'
})
export class BookListService {

  //fetch data
  constructor(
    private http: HttpClient
  ) { }

  getBooks(): Observable<Array<BooksModel>> {
    return this.http.get
      <{ items: BooksModel[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []))
  }


}
