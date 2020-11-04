import React from "react";
import {Grid, Header, Segment, Button} from "semantic-ui-react";

export function ListEntry (
    {
        id,
        changesetProperties,
        isSelected,
    }
) {
    const link1="https://www.openstreetmap.org/edit?changeset=" + id;
    return (
        <Segment>
            <Header>
                {id}
            </Header>
            <a
                className="App-link"
                href={link1}
                target="_blank"
            >
                OSM Link
            </a>
        </Segment>
    );
}
