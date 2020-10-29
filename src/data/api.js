const backend = "https://osmcha.org";

export function getChangesetsFromAPI(
    token="Token ef77f928d91f3816ca60e7b73a8711119e825e44",
) {
    console.log("get2");
    let a = getAuthenticatedJson(
        `/api/v1/changesets/?page=1&page_size=75&date__gte=2020-10-19&date__lte=2020-10-25&metadata=hashtags%3D%23CastleProject`,
        token
    ).then(parseJSON);
    console.log(a);
    return a;
}

function getAuthenticatedJson(endpoint, token) {
    return fetch(`${backend}${endpoint}`, {
        method: "GET",
        headers: {
            Authorization: `${token}`,
            Accept: "application/json"
        }
    }).then(checkStatus);
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error: Object = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

function parseJSON(response) {
    return response.json();
}
