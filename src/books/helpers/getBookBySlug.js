import {books} from '../data/books';

export const getBookBySlug = (slug) => {

    return books.find(book => book.slug === slug);
}