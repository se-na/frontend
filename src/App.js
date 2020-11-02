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
import Overview from "./pages/Overview";

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
                Data Source:
                <a
                className="App-link"
                href="https://osmcha.org/"
                target="_blank"
                >
                    OSMCha
                </a>
            </div>
        </Router>
    );
}

export default App;
