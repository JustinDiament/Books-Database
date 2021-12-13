import writerService from "./writer-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const {Link} = window.ReactRouterDOM;

const WriterFormEditor = () => {
  const {id} = useParams()
  const [writer, setWriter] = useState({})

  const [writer2, setWriter2] = useState([])
  useEffect(() => {
    findWriterById2()
  }, [])
  const findWriterById2 = () =>
      writerService.findWriterById(id)
      .then(writer2 => setWriter2(writer2))

  useEffect(() => {
    if (id !== "new") {
      findWriterById(id)
    }
  }, []);
  const createWriter = (writer) =>
      writerService.createWriter(writer)
      .then(() => history.back())
  const findWriterById = (id) =>
      writerService.findWriterById(id)
      .then(writer => setWriter(writer))
  const deleteWriter = (id) =>
      writerService.deleteWriter(id)
      .then(() => history.back())
  const updateWriter = (id, newWriter) =>
      writerService.updateWriter(id, newWriter)
      .then(() => history.back())

  return (
      <div>
        <h2>Writer Editor</h2>
        <label>Id</label>
        <input value={writer.id}/><br/>
        <label>Author Id</label>
        <input defaultValue={writer.authorTransientId}
            onChange={(e) => {
                setWriter(writer =>
                    ({...writer, authorValue: e.target.value}));
              setWriter(writer =>
                  ({...writer, bookValue: writer.bookValue || writer.bookTransientId}))}
            }
        /><br/>
        <label>Book Id</label>
        <input defaultValue={writer.bookTransientId}
            onChange={(e) => {
                setWriter(writer =>
                    ({...writer, bookValue: e.target.value}));
              setWriter(writer =>
                  ({...writer, authorValue: writer.authorValue || writer.authorTransientId}))}
            }
        /><br/>
        <button className="btn btn-warning"
                onClick={() => {
                  history.back()
                }}>
          Cancel
        </button>
        <button className="btn btn-danger"
                onClick={() => deleteWriter(writer.id)}>
          Delete
        </button>
        <button className="btn btn-primary"
            onClick={() => updateWriter(writer.id, writer)}>
          Save
        </button>
        <button className="btn btn-success"
                onClick={() => createWriter(writer)}>
          Create
        </button>

        <h2>Writer's Book</h2>
                  <Link to={`/book/${writer2.bookTransientId}`}>
                    {writer2.bookTransientId}
                  </Link>

        <h2>Writer's Author</h2>
        <Link to={`/author/${writer2.authorTransientId}`}>
          {writer2.authorTransientId}
        </Link>
      </div>
  )
}

export default WriterFormEditor