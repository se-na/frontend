import React from "react";
import {ListEntry} from "./ListEntry";

function List (
    changesets,
) {
    console.log(changesets);

    return (
        <div>
            {changesets.changesets.map((changeset) => (
                <ListEntry
                    id={changeset.id}
                    changesetProperties={changeset.properties}/>
            ))}
        </div>
    );
}

export default (List);
