import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { romhackList } from "../Homepage";
import Help from "../../models/Help";
import Pokedex from "../../models/Pokedex";

const TeamDisplay = ({ selectedTrainer, styleObj, gridSizes }) => {
    let { id } = useParams();
    id = parseInt(id);

    const selectedRomhack = Help.findInArray(id, romhackList);

    const monList = selectedTrainer.team.map((trainerMon, index) => {
        const mon = trainerMon.pokemon;
        const baseMon = Pokedex.getBaseForm(mon, selectedRomhack.species);
        return (
            <Grid
                key={index}
                item
                xs={gridSizes.xs}
                sm={gridSizes.sm}
                md={gridSizes.md}
                lg={gridSizes.lg}
                xl={gridSizes.xl}
            >
                <div className="sprite-view">
                    <img
                        src={mon.spriteUrl}
                        alt={`Sprite of ${mon.name}`}
                        className="location-mon-sprite"
                    />
                </div>
            </Grid>
        );
    });
    return (
        <Grid container style={{ ...styleObj }}>
            {monList}
        </Grid>
    );
};

export default TeamDisplay;
