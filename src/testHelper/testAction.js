const changesets = [{
        "id":93002920,
        "type":"Feature",
        "geometry":{
            "coordinates":[[
                [9.4365455,47.5155412],
                [9.4372953,47.5155412],
                [9.4372953,47.5160211],
                [9.4365455,47.5160211],
                [9.4365455,47.5155412]]],
            "type":"Polygon"},
        "properties":{
            "check_user":null,
            "reasons":[],
            "tags":[],
            "features":[],
            "user":"Geonick",
            "uid":"6087",
            "editor":"iD 2.18.5",
            "comment":"Schlösser und Burgen der Schweiz",
            "comments_count":0,
            "source":"Not reported",
            "imagery_used":"kt_tg_ortho_2017",
            "date":"2020-10-24T23:59:44Z",
            "create":0,"modify":1,
            "delete":0,
            "area":3.59829020002079e-07,
            "is_suspect":false,
            "harmful":null,
            "checked":false,
            "check_date":null,
            "metadata":{
                "changesets_count":4525,
                "hashtags":"#CastleProject",
                "locale":"en",
                "host":"https://www.openstreetmap.org/edit"
            }
        }
        },
        {
            "id":93002356,
            "type":"Feature",
            "geometry":{"coordinates":[[
                [9.4095042,47.3298464],
                    [9.4097671,47.3298464],
                    [9.4097671,47.3300014],
                    [9.4095042,47.3300014],
                    [9.4095042,47.3298464]]],
                "type":"Polygon"},
            "properties":{
                "check_user":null,
                "reasons":[],
                "tags":[],
                "features":[],
                "user":"Geonick",
                "uid":"6087",
                "editor":"iD 2.18.5",
                "comment":"Schlösser und Burgen der Schweiz",
                "comments_count":0,
                "source":"Not reported",
                "imagery_used":"EsriWorldImageryClarity",
                "date":"2020-10-24T23:10:14Z",
                "create":0,
                "modify":1,
                "delete":0,
                "area":4.07494999997309e-08,
                "is_suspect":false,
                "harmful":null,
                "checked":false,
                "check_date":null,
                "metadata":{
                    "changesets_count":4524,
                    "hashtags":"#CastleProject",
                    "locale":"en",
                    "host":"https://www.openstreetmap.org/edit"}
            }
            },
        {"id":92999019,
            "type":"Feature",
            "geometry":{
            "coordinates":[[
                [8.8654687,47.2850392],
                [8.8655022,47.2850392],
                [8.8655022,47.2850902],
                [8.8654687,47.2850902],
                [8.8654687,47.2850392]]],
                "type":"Polygon"},
            "properties":{
            "check_user":null,
                "reasons":[],
                "tags":[],
                "features":[],
                "user":"Geonick",
                "uid":"6087",
                "editor":"iD 2.18.5",
                "comment":"Schlösser und Burgen der Schweiz",
                "comments_count":0,
                "source":"Not reported",
                "imagery_used":"OGDOrthoZH2018",
                "date":"2020-10-24T20:15:38Z",
                "create":1,
                "modify":1,
                "delete":0,
                "area":1.708500000006e-09,
                "is_suspect":false,
                "harmful":null,
                "checked":false,
                "check_date":null,
                "metadata":{
                "changesets_count":4523,
                    "hashtags":"#CastleProject",
                    "locale":"en",
                    "host":"https://www.openstreetmap.org/edit"}
        }}];

export function loadChangesetsSucceeded() {
    return (dispatch) => {
        dispatch({ type: "FETCH_CHANGESETS_STARTED" });
        dispatch({ type: "FETCH_CHANGESETS_SUCCEEDED", changesets })
    };
}

export function loadChangesetsFailed() {
    return (dispatch) => {

        dispatch({ type: "FETCH_CHANGESETS_STARTED" });

        dispatch({ type: "FETCH_CHANGESET_FAILED"});
    };
}

const changeset1 = changesets[1];
const changeset2 = changesets[2];

export function fetchActualChangeset1(){
    return (dispatch) => {
        dispatch({ type: "FETCH_CHANGESET_STARTED" });
        dispatch({ type: "FETCH_CHANGESET_SUCCEEDED", changeset1 });
    }
}

export function fetchActualChangeset2(){
    return (dispatch) => {
        dispatch({ type: "FETCH_CHANGESET_STARTED" });
        dispatch({ type: "FETCH_CHANGESET_SUCCEEDED", changeset2 });
    }
}
