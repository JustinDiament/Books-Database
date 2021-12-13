import bookService from "./book-service"

const {useState, useEffect} = React;

const {Link, useHistory} = window.ReactRouterDOM;

const BookList = () => {
  const [book, setBook] = useState([])
  useEffect(() => {
    findAllBooks()
  }, [])
  const findAllBooks = () =>
      bookService.findAllBooks()
      .then(book => setBook(book))
  const history = useHistory()
  return (
      <div>
        <h2>Book List</h2>

        <button className="btn btn-primary"
                onClick={() => history.push("/book/new")}>
          Add Book
        </button>
        <ul className="list-group">
          {Array.isArray(book) &&
            book.map(book =>
                <li className="list-group-item"
                    key={book.id}>
                  <Link to={`/book/${book.id}`}>
                    {book.title}
                  </Link>
                </li>)
          }
        </ul>
      </div>
  )
}

export default BookList;