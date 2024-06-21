import { Grid } from "@mui/material";
import React from "react";
import EncounterTable from "./EncounterTable";

const LocationPage = ({ location, id, color }) => {
    let trainersClass = "invis";
    const trainerList = location.trainers.map((battle, index) => {
        trainersClass = "";
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

    let encountersClass = "invis";
    const encounterList = location.encounters.map((encTable) => {
        encountersClass = "";
        return <EncounterTable encTable={encTable} />;
    });

    let collectiblesClass = "invis";
    const collectibleList = location.collectibles.map((collectible, index) => {
        let final = false;
        if (index === location.collectibles.length - 1) {
            final = true;
        }
        collectiblesClass = "";
        return collectible.locationDisplay(index, final);
    });

    let martsClass = "invis";
    const martList = location.shops.map((mart, index) => {
        martsClass = "";
        return mart.locationDisplay(index);
    });

    let subLocationClass = "invis";
    const subLocationList = location.subLocations.map((subLocation, index) => {
        subLocationClass = "";
        return (
            <div key={index}>
                <LocationPage location={subLocation} id={id} color={"#bdbdbd"} />
            </div>
        );
    });

    return (
        <div
            className="encounter-sheet-container"
            style={{ backgroundColor: color }}
        >
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

                    <Grid
                        container
                        rowSpacing={3}
                        style={{ paddingBottom: "1rem" }}
                    >
                        {encounterList}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} className={collectiblesClass}>
                    <h2>Collectibles</h2>
                    <div className="location-content-container">
                        {collectibleList}
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className={martsClass}>
                    <h2>Special Marts</h2>
                    {martList}
                </Grid>
                <Grid item xs={12} className={subLocationClass}>
                    <h2>SubLocations</h2>
                    <div className="center width-100">
                        <div className="width-100">{subLocationList}</div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default LocationPage;
