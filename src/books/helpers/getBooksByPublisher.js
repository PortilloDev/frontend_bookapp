import {books} from '../data/books';

export const getBooksByPublisher = (read) => {

    const validRead = ['false', 'true'];
    if (!validRead.includes(read)) {
        throw new Error(`${read} is not a valid read`)
    }

    return books.filter(book => book.read === read);
}