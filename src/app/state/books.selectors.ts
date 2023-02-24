import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BooksModel } from "../book-list/books.model";


//select updated state - store as 'books'
export const selectBooks = createFeatureSelector<ReadonlyArray<BooksModel>>('books');

//select updated state of collection string - store as 'collection'
export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection')

//main selector - return map
export const selectBookCollection = createSelector(
    selectBooks,
    selectCollectionState,
    (books, collection) => {
        return collection.map((id) => books.find((book) => book.id === id)!);
    }
);