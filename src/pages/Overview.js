import React, { useEffect } from "react";

import {
    Grid,
    Header,
    Segment,
    Dimmer,
    Loader
} from "semantic-ui-react";
import { connect } from "react-redux";

import { fetchChangesets } from "../data/actions"
import { getChangesets } from "../data/reducers"
import List from "../components/List"
import Map from "../components/Map";
import Detailview from "../components/Detailview";
import Dropdown from "../components/Dropdown";

function Overview(
    changesets,
    fetchChangesets,
) {
    useEffect(() => {
        if (changesets) {
            fetchChangesets("Token ef77f928d91f3816ca60e7b73a8711119e825e44");
        }
    }, [fetchChangesets, changesets]);

    if (!changesets) {
        return (
            <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>
        );
    }

    return (
        <Segment class="main">
            <Header>
                Default Filter
            </Header>
            <Grid stretched spacing={0} style={{ minhight: 700, height:'95vh'}}>
                <Grid.Column width={6} >
                    <Segment>
                        <Header as="h3" content="Auffällige Datensätze" />
                        <div>
                            <Dropdown/>
                        </div>
                        <List
                            changesets={changesets}
                        />
                    </Segment>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Segment style={{minHeight: '80px', height: '70%'}}>
                        <Map/>
                    </Segment>
                    <Segment>
                        <Detailview/>
                    </Segment>
                </Grid.Column>
            </Grid>
        </Segment>
    );
}

const mapStateToProps = (state) => {
    return {
        changesets: getChangesets(state),
    };
};

const mapDispatchToProps = {
    fetchChangesets,
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
