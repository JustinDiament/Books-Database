import authorService from "./author-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const {Link} = window.ReactRouterDOM;

const AuthorFormEditor = () => {
  const {id} = useParams()
  const [author, setAuthor] = useState({})


  const [loading, setLoading] = useState(false);

  const [author2, setAuthor2] = useState([])
  useEffect(() => {
    findAuthorById2()
  }, [])
  const findAuthorById2 = () =>
      authorService.findAuthorById(id)
      .then(author2 => setAuthor2(author2))


  useEffect(() => {
    setLoading(true);
    if (id !== "new") {
      findAuthorById(id)

    }
  }, []);
  const createAuthor = (author) =>
      authorService.createAuthor(author)
      .then(() => history.back())
  const findAuthorById = (id) =>
      authorService.findAuthorById(id)
      .then(author => setAuthor(author))
  const deleteAuthor = (id) =>
      authorService.deleteAuthor(id)
      .then(() => history.back())
  const updateAuthor = (id, newAuthor) =>
      authorService.updateAuthor(id, newAuthor)
      .then(() => history.back())
      .finally(() => {
        setLoading(false);
      });


  return (
      <div>
        <h2>Author Editor</h2>
        <label>Id</label>
        <input value={author.id}/><br/>
        <label>First Name</label>
        <input
            onChange={(e) =>
                setAuthor(author =>
                    ({...author, firstName: e.target.value}))}
            value={author.firstName}/><br/>
        <label>Last Name</label>
        <input
            onChange={(e) =>
                setAuthor(author =>
                    ({...author, lastName: e.target.value}))}
            value={author.lastName}/><br/>
        <label>Username</label>
        <input
            onChange={(e) =>
                setAuthor(author =>
                    ({...author, username: e.target.value}))}
            value={author.username}/><br/>
        <label>Password</label>
        <input
            onChange={(e) =>
                setAuthor(author =>
                    ({...author, password: e.target.value}))}
            value={author.password}/><br/>
        <label>Email</label>
        <input
            onChange={(e) =>
                setAuthor(author =>
                    ({...author, email: e.target.value}))}
            value={author.email}/><br/>
        <label>Date Of Birth</label>
        <input
            onChange={(e) =>
                setAuthor(author =>
                    ({...author, dateOfBirth: e.target.value}))}
            value={author.dateOfBirth}/><br/>
        <button className="btn btn-warning"
                onClick={() => {
                  history.back()
                }}>
          Cancel
        </button>
        <button className="btn btn-danger"
                onClick={() => deleteAuthor(author.id)}>
          Delete
        </button>
        <button className="btn btn-primary"
            onClick={() => updateAuthor(author.id, author)}>
          Save
        </button>
        <button className="btn btn-success"
                onClick={() => createAuthor(author)}>
          Create
        </button>

        <h2>Author's Writers</h2>

        {Array.isArray(author2.writerIds) &&
        author2.writerIds.map((writerId) => <li key={writerId}>
          <Link to={`/writer/${writerId}`}>
            {writerId}
          </Link>

        </li>)}

      </div>
  )
}

export default AuthorFormEditor