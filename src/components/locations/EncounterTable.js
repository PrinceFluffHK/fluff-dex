import React from "react";
import { Grid } from "@mui/material";
import Encounter from "../../models/Encounter";
import { Link, useParams } from "react-router-dom";
import Help from "../../models/Help";
import { romhackList } from "../Homepage";
import DexEntry from "../../models/DexEntry";

const EncounterTable = ({ encTable, index }) => {
    let { id } = useParams();
    id = parseInt(id);
    const selectedRomhack = Help.findInArray(id, romhackList);

    const encounterList = encTable.pokemon.map((mon, index) => {
        const percent = mon.percent === 0 ? "N/A" : `${mon.percent}%`;
        const name =
            mon.pokemon.modifier === ""
                ? mon.pokemon.name
                : `${mon.pokemon.name} (${mon.pokemon.modifier})`;
        const levelValue =
            mon.minLv === mon.maxLv ? mon.minLv : `${mon.minLv} - ${mon.maxLv}`;

        const baseForm = DexEntry.findFromForm(
            mon.pokemon.id,
            selectedRomhack.nationalDex.dexArray
        );

        return (
            <Grid container key={index} className="list-divider">
                <Grid item xs={3.5} className="">
                    <Link to={`/${id}/pokemon/${baseForm.id}/0`} className="">
                        <div className="sprite-view-container">
                            <div className="sprite-view" />

                            <img
                                src={mon.pokemon.spriteUrl}
                                className="location-mon-sprite"
                                alt={`Sprite of ${mon.pokemon.name}`}
                            />
                        </div>
                    </Link>
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
        );
    });

    const bgColor = Encounter.getColor(encTable.type);

    return (
        <div
            className="location-content-container width-90"
            style={{ backgroundColor: bgColor }}
        >
            <h2>{encTable.type}</h2>
            <Grid container>
                <Grid item xs={3.5}></Grid>
                <Grid item xs>
                    <b>Name</b>
                </Grid>
                <Grid item xs={2.5}>
                    <b>%</b>
                </Grid>
                <Grid item xs={2.5}>
                    <b>Level</b>
                </Grid>
            </Grid>
            <div>{encounterList}</div>
        </div>
    );
};

export default EncounterTable;
