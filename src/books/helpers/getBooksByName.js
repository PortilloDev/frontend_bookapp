import {books} from '../data/books';

export const getBooksByName = (name = '') => {
    name = name.toLocaleLowerCase().trim();

    if (name.length === 0) return [];


    return books.filter(book => book.title.toLocaleLowerCase().includes(name));
}