import SeriesList from "./series/series-list";
import SeriesFormEditor from "./series/series-form-editor";
import BookFormEditor from "../bookgui/book/book-form-editor";
import AuthorFormEditor from "../authorgui/author/author-form-editor";
import WriterFormEditor from "../writergui/writer/writer-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/series", "/"]} exact={true}>
                    <SeriesList/>
                </Route>
                <Route path="/series/:id" exact={true}>
                    <SeriesFormEditor/>
                </Route>
                <Route path="/book/:id" exact={true}>
                    <BookFormEditor/>
                </Route>
                <Route path="/writer/:id" exact={true}>
                    <WriterFormEditor/>
                </Route>
                <Route path="/author/:id" exact={true}>
                    <AuthorFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
