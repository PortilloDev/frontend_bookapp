import BookList from "../components/BookList";

function booksReadPage() {
  return (
    <div>
        <h1>Estantería de leídos</h1>
        <hr/>
        <BookList read='false' />
    </div>
  )
}

export default booksReadPage;
