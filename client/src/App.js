import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Nav from "./components/Nav";

const App = () =>
    <Router>
        <div>
        <Nav />
            <Switch>
                <Route exact path="/" component={Main} />

            </Switch>
        </div>
    </Router>;

export default App;