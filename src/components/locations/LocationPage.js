import { Grid } from "@mui/material";
import React from "react";
import EncounterSheet from "./EncounterSheet";
import EncounterTable from "./EncounterTable";

const LocationPage = ({ location, id }) => {
    let trainersClass = "invis"
    const trainerList = location.trainers.map((battle, index) => {
        trainersClass = ""
        let color = "white";
        if (index % 2) {
            color = "lightcyan";
        }
        let final = false;
        if (index === location.trainers.length - 1) {
            final = true;
        }
        return battle.listDisplay(index, id, color, final);
    });

    let encountersClass = ""
    const encounterList = location.encounters.map((encTable, index) => {
        return (
            <EncounterTable encTable={encTable}/>
        )
    })

    return (
        <div className="encounter-sheet-container">
            <h1>{location.name}</h1>
            <Grid container columnSpacing={3}>
                <Grid className={trainersClass} item xs={12} md={6}>
                    <h2>Trainers</h2>
                    <div className="location-content-container">
                        {trainerList}
                    </div>
                </Grid>
                <Grid className={encountersClass} item xs={12} md={6}>
                    <h2>Encounters</h2>
                    <Grid container rowSpacing={3} style={{paddingBottom: "1rem"}}>
                        {encounterList}
                    </Grid>
                    <Grid container></Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <h2>Collectibles</h2>
                    <Grid container></Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <h2>Special Marts</h2>
                    <Grid container></Grid>
                </Grid>
                <Grid item xl={12}>
                    <h2>SubLocations</h2>
                    <Grid container></Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default LocationPage;
