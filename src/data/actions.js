import * as api from "./api";

export function fetchChangesets(token) {
    return (dispatch) => {

        dispatch({ type: "FETCH_CHANGESETS_STARTED" });

        return api
            .getChangesetsFromAPI(token)
            .then(({ features: changesets}) => {
                dispatch({ type: "FETCH_CHANGESETS_SUCCEEDED", changesets });
            })
            .catch((error) => dispatch({ type: "FETCH_CHANGESETS_FAILED", error }));
    };
}

export function fetchActualChangeset(changeset){
    return (dispatch) => {
        dispatch({ type: "FETCH_CHANGESET_STARTED" });
        dispatch({ type: "FETCH_CHANGESET_SUCCEEDED", changeset });
    }
}
