import React from "react";
import { Dropdown } from 'semantic-ui-react'

function SortDropdown () {
    const options = [
        { key: 1, text: 'Gewichtung', value: 1 },
        { key: 2, text: 'Neueste', value: 2 },
        { key: 3, text: 'Status', value: 3 },
    ];
    return (
        <Dropdown clearable options={options} selection />
    );
}

export default (SortDropdown);
