import React from "react";
import { Grid } from "@mui/material";
import Encounter from "../../models/Encounter";

const EncounterTable = ({ encTable }) => {
    const encounterList = encTable.pokemon.map((mon, index) => {
        let bgColor = "white";
        if (index % 2) {
            bgColor = "lightcyan";
        }
        const percent = mon.percent === 0 ? "N/A" : `${mon.percent}%`;
        const name =
            mon.pokemon.modifier === ""
                ? mon.pokemon.name
                : `${mon.pokemon.name} (${mon.pokemon.modifier})`;
        const levelValue =
            mon.minLv === mon.maxLv ? mon.minLv : `${mon.minLv} - ${mon.maxLv}`;
        // const baseDexEntry = DexEntry.findFromForm(
        //     mon.id,
        //     selectedRomhack.nationalDex.dexArray
        // );

        return (
            // <Link className="suppress-link" to={}>
            <Grid container key={index} className="list-divider">
                <Grid item xs={2}>
                    <img
                        src={mon.pokemon.spriteUrl}
                        className="encounter-sprite"
                    />
                </Grid>
                <Grid item xs className="align-center">
                    {name}
                </Grid>
                <Grid item xs={2.5} className="align-center">
                    {percent}
                </Grid>
                <Grid item xs={2.5} className="align-center">
                    {levelValue}
                </Grid>
            </Grid>
            // </Link>
        );
    });

    const bgColor = Encounter.getColor(encTable.type);

    return (
        <Grid item className="justify-center width-100">
            <div
                className="encounter-list-container"
                style={{ backgroundColor: bgColor }}
            >
                <h2>{encTable.type}</h2>
                {/* <Grid item> */}
                <Grid container>
                    <Grid item xs={2}>
                        <b></b>
                    </Grid>
                    <Grid item xs>
                        <b>Name</b>
                    </Grid>
                    <Grid item xs={2.5}>
                        <b>Chance</b>
                    </Grid>
                    <Grid item xs={2.5}>
                        <b>Level</b>
                    </Grid>
                </Grid>
                <div>{encounterList}</div>
                {/* </Grid> */}
            </div>
        </Grid>
    );
};

export default EncounterTable;
