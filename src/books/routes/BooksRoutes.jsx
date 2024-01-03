import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "../../shared/layout/Navbar";

import Home from '../pages/homePage'
import BooksReadPage from '../pages/booksReadePage';
import BooksUnreadPage from '../pages/booksUnreadPage';
import BookPage from '../pages/bookPage';
import Search from '../pages/searchPage';

function BooksRouter() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="books-read" element={ <BooksReadPage/> } />
                    <Route path="books-unread" element={ <BooksUnreadPage/> } />
                    <Route path="book/:slug" element={ <BookPage/> } />
                    <Route path="search" element={ <Search/> } />

                    <Route path="/*" element={ <Navigate to="/" /> } />
        
                </Routes>
            </div>
        </div>
    )
}

export default BooksRouter;