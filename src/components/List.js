import React from "react";

function List (
    changesets
) {
    changesets= [{name:"fehler1"}, {name:"fehler1"}];
    const listItems = changesets.map((changeset) => <li>{changeset.name}</li>);
    return (
        <ul>
            <li>
                {listItems}
            </li>
        </ul>
    );
}

export default (List);
