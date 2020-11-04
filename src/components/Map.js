import React from 'react'
import {getChangeset, query, propsDiff, render} from 'changeset-map';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import 'changeset-map/public/css/style.css';
import './MapStyle.css'
import {connect} from "react-redux";

class Map extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getMap(){
        var changesetMap = require('changeset-map');
        var render = changesetMap.render;

        var container = document.getElementById('container');
        var changesetMapControl = render(container, this.props.actual.id, { width: '100%', height: '100%' });

        changesetMapControl.on('load', function () {
            changesetMapControl.emit('clearFeature');
            changesetMapControl.on('hashchange', function(geometryType, featureId) {
                // update hash.
            });
        })
    }


    componentDidUpdate(prevProp: Object) {
        if (this.props.actual !== prevProp.actual) {
            this.getMap();
        }
    }


    componentDidMount() {
        this.getMap();
    }

    render() {
        return (
            <div id='container'></div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        changesets: state.changesets.entries,
        actual: state.changeset.actual,
        isLoading: state.changesets.isLoading,
        initial: state.changesets.initial,
    };
};

export default connect(mapStateToProps)(Map);
