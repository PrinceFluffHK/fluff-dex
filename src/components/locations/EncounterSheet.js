import React from "react";
import { Grid } from "@mui/material";
import EncounterTable from "./EncounterTable";

const EncounterSheet = ({ location, index }) => {
    const encTables = location.encounters.map((encTable, index) => {
        return (
            <Grid item xs={12} md={6} key={index}>
                <EncounterTable encTable={encTable} />
            </Grid>
        );
    });
    return (
        <div className="center" key={index}>
            <div className="location-container">
                <h2>{location.name}</h2>
                <Grid container rowSpacing={3}>
                    {encTables}
                </Grid>
            </div>
        </div>
    );
};

export default EncounterSheet;
