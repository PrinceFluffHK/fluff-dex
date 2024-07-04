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
        console.log(location)
        return battle.listDisplay(index, id, color, final);
    });

    let encountersClass = "invis";
    const encounterList = location.encounters.map((encTable, index) => {
        encountersClass = "";
        return <EncounterTable encTable={encTable} index={index} key={index}/>;
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
            <div key={index} className="width-100 center">
                <LocationPage
                    location={subLocation}
                    id={id}
                    color={"#bdbdbd"}
                />
            </div>
        );
    });

    return (
        <div
            className="encounter-sheet-container"
            style={{ backgroundColor: color }}
            id="location container"
        >
            <div className="width-100 center">
                <div className="width-90">
                    <h1>{location.name}</h1>
                </div>
            </div>
            <Grid container className="width-100">
                {/* <Grid container columnSpacing={3}> */}
                <Grid className={trainersClass} item xs={12} md={6}>
                    <div className="width-100 center">
                        <div className="width-90">
                            <h2>Trainers</h2>
                        </div>
                    </div>
                    <div className="center width-100">
                        <div className="location-content-container center width-90">
                            <div className="width-100">{trainerList}</div>
                        </div>
                    </div>
                </Grid>
                <Grid className={encountersClass} item xs={12} md={6}>
                    <div className="width-100 center">
                        <div className="width-90">
                            <h2>Encounters</h2>
                        </div>
                    </div>
                    <div className="center width-100">
                        <div className="width-90">
                            <Grid
                                container
                                rowSpacing={3}
                                style={{ paddingBottom: "1rem" }}
                            >
                                {encounterList}
                            </Grid>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className={collectiblesClass}>
                    <div className="width-100 center">
                        <div className="width-90">
                            <h2>Collectibles</h2>
                        </div>
                    </div>
                    <div className="center">
                        <div className="location-content-container center width-90">
                            <div className="width-100">{collectibleList}</div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className={martsClass}>
                    <div className="width-100 center">
                        <div className="width-90">
                            <h2>Special Marts</h2>
                        </div>
                    </div>
                    <div className="center width-100">
                        <div className="width-90">{martList}</div>
                    </div>
                </Grid>
                <Grid item xs={12} className={subLocationClass}>
                    <div className="center width-100">
                        <div className="width-100">
                            {subLocationList}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default LocationPage;
