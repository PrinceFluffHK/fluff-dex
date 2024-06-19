import React from "react";
import { Grid } from "@mui/material";
import EncounterTable from "./EncounterTable";

const EncounterSheet = ({ location, index }) => {
    const encTables = location.encounters.map((encTable, index) => {
        return (
            <Grid item xs={12} md={6} key={index}>
                <EncounterTable encTable={encTable}  />
            </Grid>
        );
    });
    const subLocations = location.subLocations.map((subLocation, index) => {
        if (subLocation.encounters.length > 0) {
            return (
                <EncounterSheet
                    location={subLocation}
                    index={index}
                    key={index}
                />
            );
        }
    });
    return (
        <div className="center" key={index}>
            <div className="encounter-sheet-container">
                <h2>{location.name}</h2>
                <Grid container rowSpacing={3}>{encTables}</Grid>
                {subLocations}
            </div>
        </div>
    );
};

export default EncounterSheet;
