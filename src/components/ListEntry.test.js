import {render} from "@testing-library/react";
import { ListEntry } from "./ListEntry";
import React from "react";

const properties ={
    "check_user": null,
    "reasons": [],
    "tags": [],
    "features": [],
    "user": "PeetTheEngineer",
    "uid": "68661",
    "editor": "iD 2.19.2",
    "comment": "erg Wikipedia #CastleProject",
    "comments_count": 0,
    "source": "Not reported",
    "imagery_used": "Kanton Zurich, Orthofoto ZH Sommer 2018 RGB 10cm",
    "date": "2020-10-31T21:52:59Z",
    "create": 0,
    "modify": 1,
    "delete": 0,
    "area": 5.2162440000587e-08,
    "is_suspect": false,
    "harmful": null,
    "checked": false,
    "check_date": null,
    "metadata": {
        "host": "https://www.openstreetmap.org/edit",
        "changesets_count": 1220,
        "locale": "en",
        "hashtags": "#CastleProject"
    }
};

test('render App', () => {
    const { getByText } = render(<ListEntry id={1} changesetProperties={properties} isSelected={true}/>);
    expect(getByText(/1/i)).toBeInTheDocument();
});
