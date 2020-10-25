import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "./pages/Home"
import Filter from "./pages/Filter"

import './App.css';
import Overview from "./pages/Ovewiew";

function App () {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/overview">
                        <Overview />
                    </Route>
                    <Route path="/filter">
                        <Filter />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
