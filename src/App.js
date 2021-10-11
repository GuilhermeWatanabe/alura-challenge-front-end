import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import Header from "./components/Header";
import Menu from "./components/Menu";
import CodeEditor from "./pages/CodeEditor";
import Community from "./pages/Community";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Menu />
            <Switch>
                <Route exact path="/">
                    <Community />
                </Route>
                <Route path="/editor">
                    <CodeEditor />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
