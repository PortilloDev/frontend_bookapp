import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import useForm from "../../shared/hooks/useForm";
import BookCard from "../components/BookCard";
import {getBooksByName} from '../helpers/getBooksByName';

function searchPage() {

  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} = queryString.parse(location.search);
  const books = getBooksByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && books.length === 0;

  const{searchText, onInputChange} = useForm({
      searchText: q
  });

  const onSearchSubmit =(event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  }


  return (
    <div>
      <h1>Busca un libro</h1>
      <hr />

      <div className="row">
        <div className="col-5">
            <h4>Buscar</h4>
        <hr />
        <form onSubmit={onSearchSubmit}>
          <input 
            type="text"
            placeholder="Search a hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
          />
          <button className="btn btn-outline-primary mt-3 rounded-2">
            Buscar
          </button>
        </form>

        </div>
        <div className="col-7">
          <h4>Resultado</h4>
          <hr />
         <div 
            className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none'}}
              
          >
            Buscar un libro
          </div>
         <div 
              className="alert alert-danger animate__animated animate__fadeIn" 
              style={{display: showError ? '' : 'none'}}
         >
          No existe un libro con el titulo <b>{q}</b>
        </div>
         
          {
            books.map(book => (
              <BookCard key={book.id} {...book}/>
            ))
          }
         
        </div>
        </div>
    </div>
  )
}

export default searchPage;
