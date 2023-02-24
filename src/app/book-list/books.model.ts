export interface BooksModel {
    id: string;
    volumeInfo: {
        title: string;
        authors: Array<string>;
    }
}
