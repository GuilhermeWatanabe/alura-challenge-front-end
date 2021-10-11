import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Community from "./pages/Community";
import Editor from "./pages/Editor";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Menu />
            <Switch>
                <Route exact path="/">
                    <Editor />
                </Route>
                <Route path="/editor">
                    <Community />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
