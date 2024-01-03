import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getBookBySlug } from "../helpers/getBookBySlug";
import { useMemo } from "react";


function bookPage() {
  const {slug} = useParams();
  const book = useMemo( () =>  getBookBySlug(slug), [slug]);
  const navigate = useNavigate();


  const onNavigateBack = () => {
    navigate(-1);
  }

  var isSummary = false;
  if (!book) {
    return <Navigate to="/" />
  }

  if (book.summary) {
    isSummary = true;
  }




  return (
    <div className="row mt-5  animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img 
        src={`/assets/books/${book.id}.jpg`}
        alt={book.title}
        className="img-thumbnail"
        />    
      </div>
      <div className="col-8">
          <h3>{book.title}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Author: </b> {book.author}</li>
            <li className="list-group-item"> <b>description: </b> 
              <p>
                {book.description}
              </p>
            </li>
          </ul>

          <div>
             {isSummary  &&
              <div className="content">
                <p>{book.summary}</p> 
              </div>
              }
        </div>

        <button 
            className="btn btn-outline-primary"
            onClick={ onNavigateBack}
        >
          Volver
        </button>

        </div>
    </div>
  )
}

export default bookPage;
