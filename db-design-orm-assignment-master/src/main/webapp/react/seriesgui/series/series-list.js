import seriesService from "./series-service"

const {useState, useEffect} = React;

const {Link, useHistory} = window.ReactRouterDOM;

const SeriesList = () => {
  const [series, setSeries] = useState([])
  useEffect(() => {
    findAllSeries()
  }, [])
  const findAllSeries = () =>
      seriesService.findAllSeries()
      .then(series => setSeries(series))
  const history = useHistory()
  return (
      <div>
        <h2>Series List</h2>

        <button className="btn btn-primary"
                onClick={() => history.push("/series/new")}>
          Add Series
        </button>
        <ul className="list-group">
          {
            series.map(series =>
                <li className="list-group-item"
                    key={series.id}>
                  <Link to={`/series/${series.id}`}>
                    {series.title}
                  </Link>
                </li>)
          }
        </ul>
      </div>
  )
}

export default SeriesList;