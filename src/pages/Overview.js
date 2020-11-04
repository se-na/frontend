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
import { fetchChangesets, fetchActualChangeset } from "../data/actions";

import List from "../components/List"
import Map from "../components/Map";
import Dropdown from "../components/SortDropdown";
import logo from '../logo.svg';

function Overview ({
    changesets,
    actual,
    initial,
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
    if(!actual){
        dispatch(fetchActualChangeset(changesets[0]));
        return (
            <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>
        );
    }
    return (
        <Segment class="main">
            <Header>
                <div className="flex">
                    <button onClick={() => dispatch(fetchActualChangeset(changesets[2]))}>2</button>
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
                        <List/>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={10}>
                    <div className="right">
                        <Button as={Link} to={"/filter"}>aktuellen Filter Ansehen</Button>
                    </div>
                    <Segment style={{minHeight: '80px', height: '90%'}}>
                        <Map/>
                    </Segment>
                </Grid.Column>
            </Grid>
        </Segment>
    );
}

const mapStateToProps = (state) => {
    return {
        changesets: state.changesets.entries,
        actual: state.changeset.actual,
        isLoading: state.changesets.isLoading,
        initial: state.changesets.initial,
    };
};

export default connect(mapStateToProps)(Overview);
