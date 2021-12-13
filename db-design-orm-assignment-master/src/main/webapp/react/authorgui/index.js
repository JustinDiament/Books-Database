import AuthorList from "./author/author-list";
import AuthorFormEditor from "./author/author-form-editor";
import WriterFormEditor from "../writergui/writer/writer-form-editor";
import BookFormEditor from "../bookgui/book/book-form-editor";
import SeriesFormEditor from "../seriesgui/series/series-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/author", "/"]} exact={true}>
                    <AuthorList/>
                </Route>
                <Route path="/author/:id" exact={true}>
                    <AuthorFormEditor/>
                </Route>
                <Route path="/writer/:id" exact={true}>
                    <WriterFormEditor/>
                </Route>
                <Route path="/book/:id" exact={true}>
                    <BookFormEditor/>
                </Route>
                <Route path="/series/:id" exact={true}>
                    <SeriesFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
