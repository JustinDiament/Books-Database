import seriesService from "./series-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const {Link} = window.ReactRouterDOM;

const SeriesFormEditor = () => {
  const {id} = useParams()
  const [series, setSeries] = useState({})

  const [series2, setSeries2] = useState([])
  useEffect(() => {
    findSeriesById2()
  }, [])
  const findSeriesById2 = () =>
      seriesService.findSeriesById(id)
      .then(series2 => setSeries2(series2))

  useEffect(() => {
    if (id !== "new") {
      findSeriesById(id)
    }
  }, []);
  const createSeries = (series) =>
      seriesService.createSeries(series)
      .then(() => history.back())
  const findSeriesById = (id) =>
      seriesService.findSeriesById(id)
      .then(series => setSeries(series))
  const deleteSeries = (id) =>
      seriesService.deleteSeries(id)
      .then(() => history.back())
  const updateSeries = (id, newSeries) =>
      seriesService.updateSeries(id, newSeries)
      .then(() => history.back())

  return (
      <div>
        <h2>Series Editor</h2>
        <label>Id</label>
        <input value={series.id}/><br/>
        <label>Title</label>
        <input
            onChange={(e) =>
                setSeries(series =>
                    ({...series, title: e.target.value}))}
            value={series.title}/><br/>
        <label>Has Movie Adaptation?</label>
        <input
            onChange={(e) =>
                setSeries(series =>
                    ({...series, hasMovieAdaptation: e.target.value}))}
            value={series.hasMovieAdaptation}/><br/>
        <label>Genre</label>
        <input
            onChange={(e) =>
                setSeries(series =>
                    ({...series, genre: e.target.value}))}
            value={series.genre}/><br/>
        <button className="btn btn-warning"
                onClick={() => {
                  history.back()
                }}>
          Cancel
        </button>
        <button className="btn btn-danger"
                onClick={() => deleteSeries(series.id)}>
          Delete
        </button>
        <button className="btn btn-primary"
            onClick={() => updateSeries(series.id, series)}>
          Save
        </button>
        <button className="btn btn-success"
                onClick={() => createSeries(series)}>
          Create
        </button>

        <h2>Series's Books</h2>
        {Array.isArray(series2.bookIds) &&
        series2.bookIds.map((bookId) => <li key={bookId}>
          <Link to={`/book/${bookId}`}>
            {bookId}
          </Link>

        </li>)}

      </div>

  )
}

export default SeriesFormEditor