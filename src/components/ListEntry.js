import React from "react";
import {Grid, Header, Segment} from "semantic-ui-react";

export function ListEntry (
    {id,
    changesetProperties, ...props}
) {
    console.log(changesetProperties.user);
    const link1="https://www.openstreetmap.org/edit?changeset=" + id;
    const link="https://www.openstreetmap.org/changeset/" + id;
    return (
        <Segment>
            <Header>
                {id}
            </Header>
            <Grid>
                <Grid.Column width={6}>
                    <a
                        className="App-link"
                        href={link1}
                        target="_blank"
                    >
                        OSM Link
                    </a>
                </Grid.Column>
            </Grid>
        </Segment>

    );
}
