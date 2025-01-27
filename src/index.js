import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./data/reducers";
import App from "./App";
import "./index.css";

// Hook the redux developer tools browser extension into our store:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// The thunkMiddleware lets us dispatch actions from within other
// (asynchronuous) actions. This makes it possible to have a single
// action that is invoked by the component to perform multiple steps.
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
