import BookList from "../components/BookList";

function booksUnreadPage() {
  return (
    <div>
        <h1>Estantería de pendientes</h1>
        <hr/>
        <BookList read='true' />
    </div>
  )
}

export default booksUnreadPage;
