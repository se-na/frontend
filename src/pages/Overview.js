import React, {useEffect} from "react";

import {
    Grid,
    Header,
    Segment,
    Dimmer,
    Loader,
    Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { fetchChangesets } from "../data/actions";

import List from "../components/List"
import Map from "../components/Map";
import Detailview from "../components/Detailview";
import Dropdown from "../components/SortDropdown";
import {getChangesetsFromAPI} from "../data/api";
import logo from '../logo.svg';

function Overview ({
    changesets,
    actual,
    dispatch,}){


    const token = "Token ef77f928d91f3816ca60e7b73a8711119e825e44";

    useEffect(() => {
        if (!changesets) {
            dispatch(fetchChangesets(token));
        }
    }, [dispatch, token, changesets]);

    if (!changesets) {
        return (
            <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>
        );
    }

    console.log(actual.id);
    return (
        <Segment class="main">
            <Header>
                <div className="flex">
                    <Button as={Link} to={"/"}>Zurück zur Übersicht</Button>
                    <h1>Default Filter</h1>
                    <img src={logo} alt="SRZ-Logo"/>
                </div>
            </Header>
            <Grid stretched spacing={0} style={{minhight: 700, height: '95vh'}}>
                <Grid.Column width={6}>
                    <Segment>
                        <Header as="h3" content="Auffällige Datensätze"/>
                        <div class="right">
                            <Dropdown/>
                        </div>
                        <List
                            changesets={changesets}
                            actual={actual}
                        />
                    </Segment>
                </Grid.Column>
                <Grid.Column width={10}>
                    <div className="right">
                        <Button as={Link} to={"/filter"}>aktuellen Filter Ansehen</Button>
                    </div>
                    <Segment style={{minHeight: '80px', height: '70%'}}>
                        <Map/>
                    </Segment>
                    <Segment>
                        <Detailview
                        actual={actual}/>
                    </Segment>
                </Grid.Column>
            </Grid>
        </Segment>
    );
}

const mapStateToProps = (state) => {
    return {
        changesets: state.changesets.entries,
        actual: state.changesets.actual,
        isLoading: state.changesets.isLoading,
    };
};

export default connect(mapStateToProps)(Overview);
