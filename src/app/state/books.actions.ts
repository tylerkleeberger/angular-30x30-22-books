import { createActionGroup, props } from "@ngrx/store";
import { BooksModel } from "../book-list/books.model";

//book actions: 1) retrieve list, 2)add book, 3)remove book

//Add & Remove
export const BooksActions = createActionGroup({
    source: 'Books',
    events: {
        'Add Book': props<{ bookId: string }>(),
        'Remove Book': props<{ bookId: string }>(),
    }
});

//Retrieve
export const BooksApiActions = createActionGroup({
    source: 'Books API',
    events: {
        'Retrieved Book List': props<{ books: ReadonlyArray<BooksModel> }>(),
    }
})
