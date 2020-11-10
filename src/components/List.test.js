import React from "react";
import List from './List';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../data/reducers";
import {loadChangesetsSucceeded} from "../testHelper/testAction"
import {ListEntry} from "./ListEntry";
import thunkMiddleware from "redux-thunk";
import {render} from "@testing-library/react";


describe('<List>', () => {
    it('renders the list', () => {
        const store1 = createStore(
            rootReducer,
            applyMiddleware(thunkMiddleware)
        );

        store1.dispatch(loadChangesetsSucceeded());
        const { getByText } = render(<List store={store1}></List>);

        expect(getByText(/93002920/i)).toBeInTheDocument();
        expect(getByText(/93002356/i)).toBeInTheDocument();
        expect(getByText(/92999019/i)).toBeInTheDocument();
    });
});
