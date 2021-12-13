import WriterList from "./writer/writer-list";
import WriterFormEditor from "./writer/writer-form-editor";
import BookFormEditor from "../bookgui/book/book-form-editor"
import AuthorFormEditor from "../authorgui/author/author-form-editor"
import SeriesFormEditor from "../seriesgui/series/series-form-editor"

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/writer", "/"]} exact={true}>
                    <WriterList/>
                </Route>
                <Route path="/writer/:id" exact={true}>
                    <WriterFormEditor/>
                </Route>
                <Route path="/book/:id" exact={true}>
                    <BookFormEditor/>
                </Route>
                <Route path="/author/:id" exact={true}>
                    <AuthorFormEditor/>
                </Route>
                <Route path="/series/:id" exact={true}>
                    <SeriesFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
