import React from "react";

import {
    Grid,
    Header,
    Segment,
    Dimmer,
    Loader
} from "semantic-ui-react";

import List from "../components/List"
import Map from "../components/Map";
import Detailview from "../components/Detailview";
import Dropdown from "../components/Dropdown";
import {getChangesetsFromAPI} from "../data/api";

class Overview extends React.Component{

    state = {
        changesets: undefined,
    };

    componentDidMount() {
        const { changesets } = this.state;
        if (!changesets) {
            this.fetchChangesets();
        }
    }

    fetchChangesets = () =>{
        getChangesetsFromAPI("Token ef77f928d91f3816ca60e7b73a8711119e825e44").then(({ features: changesets }) =>
            this.setState({ changesets })
        );

    };

    render() {
        const {changesets} = this.state;
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
                <Grid stretched spacing={0} style={{minhight: 700, height: '95vh'}}>
                    <Grid.Column width={6}>
                        <Segment>
                            <Header as="h3" content="Auffällige Datensätze"/>
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
}

export default Overview;
