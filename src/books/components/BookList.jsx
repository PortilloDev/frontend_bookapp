import React, { useMemo } from 'react'
import { getBooksByPublisher } from '../helpers/getBooksByPublisher';
import BookCard from './BookCard';


function BookList({read}){
    const books = useMemo(()=> getBooksByPublisher(read), [read]);
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
       {
        books.map(book => (
            <BookCard 
            key={book.id}
            {...book}
            />
        ))
       }
    </div>
  )
}

export default BookList;
