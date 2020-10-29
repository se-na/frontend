import { combineReducers } from "redux";

const initialChangesetsState = {
    entries: null,
    isLoading: false,
    error: null,
    total: null,
};

function changesets(state = initialChangesetsState, action) {
    switch (action.type) {
        case "FETCH_CHANGESETS_STARTED":
            return { ...state, isLoading: true, error: null, total: null };
        case "FETCH_CHANGESETS_SUCCEEDED":
            return { ...state, isLoading: false, entries: action.changesets, total: action.resultcount };
        case "FETCH_CHANGESETS_FAILED":
            return { ...state, isLoading: false, error: action.error, total:null };
        default:
            return state;
    }
}

function changesets2(state = initialChangesetsState, action) {
    switch (action.type) {
        case "FETCH_CHANGESETS_STARTED":
            return { ...state, isLoading: true, error: null, total: null };
        default:
            return state;
    }
}

const rootReducers = combineReducers({
    changesets,
    changesets2,
});

export default rootReducers;

// Selectors:

export function getChangesets(state) {
    return state.changesets.entries;
}


