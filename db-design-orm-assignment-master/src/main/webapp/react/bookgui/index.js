import BookList from "./book/book-list";
import BookFormEditor from "./book/book-form-editor";
import WriterFormEditor from "../writergui/writer/writer-form-editor";
import SeriesFormEditor from "../seriesgui/series/series-form-editor";
import AuthorFormEditor from "../authorgui/author/author-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/book", "/"]} exact={true}>
                    <BookList/>
                </Route>
                <Route path="/book/:id" exact={true}>
                    <BookFormEditor/>
                </Route>
                <Route path="/writer/:id" exact={true}>
                    <WriterFormEditor/>
                </Route>
                <Route path="/series/:id" exact={true}>
                    <SeriesFormEditor/>
                </Route>
                <Route path="/author/:id" exact={true}>
                    <AuthorFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
