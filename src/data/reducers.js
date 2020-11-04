import { combineReducers } from "redux";

const initialChangesetsState = {
    entries: null,
    initial: null,
    isLoading: false,
    error: null,
    total: null,
};

function changesets(state = initialChangesetsState, action) {
    switch (action.type) {
        case "FETCH_CHANGESETS_STARTED":
            return { ...state, isLoading: true, error: null, total: null };
        case "FETCH_CHANGESETS_SUCCEEDED":
            return { ...state, isLoading: false, entries: action.changesets, total: action.resultcount, initial: action.changesets[0] };
        case "FETCH_CHANGESETS_FAILED":
            return { ...state, isLoading: false, error: action.error, total:null };
        default:
            return state;
    }
}

const actualState = {
    actual: null,
    isLoading: false,
};

function changeset(state = actualState, action) {
    switch (action.type) {
        case "FETCH_CHANGESET_STARTED":
            return { ...state, isLoading: true};
        case "FETCH_CHANGESET_SUCCEEDED":
            return { ...state, isLoading: false, actual: action.changeset };
        default:
            return state;
    }
}

const rootReducers = combineReducers({
    changesets,
    changeset
});

export default rootReducers;

// Selectors:


