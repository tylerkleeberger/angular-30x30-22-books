import { createReducer, on } from "@ngrx/store";
import { BooksActions } from "./books.actions";

//set initial state
export const initialState: ReadonlyArray<string> = [];

//update state - remove book by filtering the collection array with an id 
// add book by adding the ID to the collection (unless it is a duplicate)
export const collectionReducer = createReducer(
    initialState,
    on(BooksActions.removeBook, (state, {bookId}) => 
    state.filter((id) => id !== bookId)
    ),
    on(BooksActions.addBook, (state, {bookId}) => {
    if(state.indexOf(bookId) > -1) return state;
    return [...state, bookId];
    })
);