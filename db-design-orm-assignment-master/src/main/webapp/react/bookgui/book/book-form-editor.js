import bookService from "./book-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const {Link} = window.ReactRouterDOM;

const BookFormEditor = () => {
  const {id} = useParams()
  const [book, setBook] = useState({})

  const [book2, setBook2] = useState([])
  useEffect(() => {
    findBookById2()
  }, [])
  const findBookById2 = () =>
      bookService.findBookById(id)
      .then(book2 => setBook2(book2))

  useEffect(() => {
    if (id !== "new") {
      findBookById(id)
    }
  }, []);
  const createBook = (book) =>
      bookService.createBook(book)
      .then(() => history.back())
  const findBookById = (id) =>
      bookService.findBookById(id)
      .then(book => setBook(book))
  const deleteBook = (id) =>
      bookService.deleteBook(id)
      .then(() => history.back())
  const updateBook = (id, newBook) =>
      bookService.updateBook(id, newBook)
      .then(() => history.back())

  return (
      <div>
        <h2>Book Editor</h2>
        <label>Id</label>
        <input value={book.id}/><br/>
        <label>Title</label>
        <input
            onChange={(e) => {
                setBook(book =>
                    ({...book, title: e.target.value}));
              setBook(book =>
                  ({...book, value: book.value ||book.seriesTransientId}))}
            }
            value={book.title}/><br/>
        <label>Description</label>
        <input
            onChange={(e) => {
                setBook(book =>
                    ({...book, description: e.target.value}));
              setBook(book =>
                  ({...book, value: book.value || book.seriesTransientId}))}
            }
            value={book.description}/><br/>
        <label>Publisher</label>
        <input
            onChange={(e) => {
                setBook(book =>
                    ({...book, publisher: e.target.value}));
              setBook(book =>
              ({...book, value: book.value || book.seriesTransientId}))}
            }
            value={book.publisher}/><br/>
        <label>Release Day</label>
        <input
            onChange={(e) => {
                setBook(book =>
                    ({...book, releaseDay: e.target.value}));
              setBook(book =>
                  ({...book, value: book.value || book.seriesTransientId}))}
            }
            value={book.releaseDay}/><br/>
        <label>Series Id</label>
        <input  defaultValue={book.seriesTransientId}
            onChange={(e) =>
                setBook(book =>
                    ({...book, value: e.target.value}))}
            /><br/>
        <button className="btn btn-warning"
                onClick={() => {
                  history.back()
                }}>
          Cancel
        </button>
        <button className="btn btn-danger"
                onClick={() => deleteBook(book.id)}>
          Delete
        </button>
        <button className="btn btn-primary"
            onClick={() =>
              updateBook(book.id, book)}>
          Save
        </button>
        <button className="btn btn-success"
                onClick={() => createBook(book)}>
          Create
        </button><br/>

        <h2>Book's Writers</h2>

        {Array.isArray(book2.writerIds) &&
        book2.writerIds.map((writerId) => <li key={writerId}>
          <Link to={`/writer/${writerId}`}>
            {writerId}
          </Link>

        </li>)}

        <h2>Book's Series</h2>
        <Link to={`/series/${book2.seriesTransientId}`}>
          {book2.seriesTransientId}
        </Link>

      </div>
  )
}

export default BookFormEditor