import React from "react";
import {Header, Segment} from "semantic-ui-react";

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
                rel="noopener noreferrer"
            >
                OSM Link
            </a>
        </Segment>
    );
}
