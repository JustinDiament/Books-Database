import authorService from "./author-service"

const {useState, useEffect} = React;

const {Link, useHistory} = window.ReactRouterDOM;

const AuthorList = () => {
  const [author, setAuthor] = useState([])
  useEffect(() => {
    findAllAuthors()
  }, [])
  const findAllAuthors = () =>
      authorService.findAllAuthors()
      .then(author => setAuthor(author))
  const history = useHistory()
  return (
      <div>
        <h2>Author List</h2>

        <button className="btn btn-primary"
                onClick={() => history.push("/author/new")}>
          Add Author
        </button>
        <ul className="list-group">
          {
            author.map(author =>
                <li className="list-group-item"
                    key={author.id}>
                  <Link to={`/author/${author.id}`}>
                    {author.firstName},
                    {author.lastName},
                    {author.username}
                  </Link>
                </li>)
          }
        </ul>
      </div>
  )
}

export default AuthorList;