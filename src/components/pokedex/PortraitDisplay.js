import React from 'react';
import TypeDisplay from './TypeDisplay';
import { Grid } from '@mui/material';

const PortraitDisplay = ({ baseDexEntry, selectedMon }) => {
    const type1Banner = selectedMon.type1.displayBanner("display-type");
    const type2Banner =
        selectedMon.type2.id === 0
            ? ""
            : selectedMon.type2.displayBanner("display-type");

    const formName = selectedMon.modifier === "" ? "" : ` (${selectedMon.modifier})`

    return (
        <Grid
            className="center"
            item
            xs={12}
            sm={6}
            style={{ flexDirection: "column" }}
        >
            <h1>#{baseDexEntry.id}: {selectedMon.name}{formName}</h1>
            <img
                className="display-portrait"
                src={selectedMon.profileUrl}
                alt={selectedMon.name}
            />
            <TypeDisplay
                type1Banner={type1Banner}
                type2Banner={type2Banner}
            />
        </Grid>
    )
}

export default PortraitDisplay