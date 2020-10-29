import * as api from "./api";

export function fetchChangesets(Token) {
    return (dispatch, getState) => {

        dispatch({ type: "FETCH_CHANGESETS_STARTED" });

        return api
            .getChangesetsFromAPI(Token)
            .then(({ result: changesets, query: { resultcount } }) => {
                dispatch({ type: "FETCH_CHANGESETS_SUCCEEDED", changesets, resultcount });
            })
            .catch((error) => dispatch({ type: "FETCH_CHANGESETS_FAILED", error }));
    };
}
