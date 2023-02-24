import { createReducer, on } from "@ngrx/store";
import { BooksModel } from "../book-list/books.model";
import { BooksApiActions } from "./books.actions";


//initialize state
export const initialState: ReadonlyArray<BooksModel> = [];

//update state changes -- retrieval of book from state
export const booksReducer = createReducer(
    initialState,
    on(BooksApiActions.retrievedBookList, (state, { books }) => books)
);