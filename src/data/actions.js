import * as api from "./api";

export function fetchChangesets() {
    return (dispatch, getState) => {

        dispatch({ type: "FETCH_CHANGESETS_STARTED" });

        return api
            .getChangesets()
            .then(({ result: transactions, query: { resultcount } }) => {
                dispatch({ type: "FETCH_CHANGESETS_SUCCEEDED", transactions, resultcount });
            })
            .catch((error) => dispatch({ type: "FETCH_CHANGESETS_FAILED", error }));
    };
}
