import { Routes, Route, Navigate } from "react-router-dom"

import BooksRoutes from "../books/routes/BooksRoutes";
import Login from '../auth/pages/loginPage';

function AppRouter() {
  return (
    <div>
        <Routes>
            <Route path="login" element={ <Login/> } />
            <Route path="/*" element={ <BooksRoutes/> } />
        </Routes>
    
    </div>
  )
}
export default AppRouter;