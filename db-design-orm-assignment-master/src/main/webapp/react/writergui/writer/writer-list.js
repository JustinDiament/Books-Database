import writerService from "./writer-service"

const {useState, useEffect} = React;

const {Link, useHistory} = window.ReactRouterDOM;

const WriterList = () => {
  const [writer, setWriter] = useState([])
  useEffect(() => {
    findAllWriters()
  }, [])
  const findAllWriters = () =>
      writerService.findAllWriters()
      .then(writer => setWriter(writer))
  const history = useHistory()
  return (
      <div>
        <h2>Writer List</h2>

        <button className="btn btn-primary"
                onClick={() => history.push("/writer/new")}>
          Add Writer
        </button>
        <ul className="list-group">
          {
            writer.map(writer =>
                <li className="list-group-item"
                    key={writer.id}>
                  <Link to={`/writer/${writer.id}`}>
                    {writer.id}
                  </Link>
                </li>)
          }
        </ul>
      </div>
  )
}

export default WriterList;