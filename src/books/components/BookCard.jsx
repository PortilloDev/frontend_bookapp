import { Link } from "react-router-dom";

function BookCard({
    id,
    title,
    author,
    description,
    slug,
    read
}){
    const bookImageUrl = `/assets/books/${id}.jpg`;
    return (
        <div className="col  animate__animated animate__fadIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                         <img src={bookImageUrl} className="card-img" alt={title} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text">
                               <small className="text-muted">{author}</small> 
                            </p>
                            <Link to={`/book/${slug}`}>
                                Más...
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BookCard;

