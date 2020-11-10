import React from "react";
import {ListEntry} from "./ListEntry";
import {connect} from "react-redux";
import {fetchActualChangeset} from "../data/actions";


function List (
    changesets,
    actual,
    initial,
) {
    const onClick = (changeset) =>{
        changesets.dispatch(fetchActualChangeset(changeset));
    };
    const select = changesets.actual | changesets.initial;
    return (
        <div>
            {changesets.changesets.map((changeset) => (
                <button onClick={() => onClick(changeset)}>
                <ListEntry
                    id={changeset.id}
                    changesetProperties={changeset.properties}
                    isSelected={select.id===changeset.id}
                />
                </button>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        changesets: state.changesets.entries,
        actual: state.changeset.actual,
        initial: state.initial,
    }
};

export default connect(mapStateToProps)(List);
