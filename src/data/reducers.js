import { combineReducers } from "redux";

const initialChangesetsState = {
    entries: null,
    actual: null,
    isLoading: false,
    error: null,
    total: null,
};

function changesets(state = initialChangesetsState, action) {
    switch (action.type) {
        case "FETCH_CHANGESETS_STARTED":
            return { ...state, isLoading: true, error: null, total: null };
        case "FETCH_CHANGESETS_SUCCEEDED":
            return { ...state, isLoading: false, entries: action.changesets, total: action.resultcount, actual: action.changesets[0] };
        case "FETCH_CHANGESETS_FAILED":
            return { ...state, isLoading: false, error: action.error, total:null };
        default:
            return state;
    }
}

const rootReducers = combineReducers({
    changesets,
});

export default rootReducers;

// Selectors:


