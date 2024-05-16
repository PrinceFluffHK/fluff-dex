import { Grid } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Pokedex from "../../models/Pokedex";
import { romhackList } from "../Homepage";
import Help from "../../models/Help";

const TeamDisplay = ({ selectedTrainer, styleObj, gridSizes }) => {
    let { id } = useParams();
    id = parseInt(id);

    const selectedRomhack = Help.findInArray(id, romhackList);

    const monList = selectedTrainer.team.map((trainerMon, index) => {
        const mon = trainerMon.pokemon;
        const baseMon = Pokedex.getBaseForm(mon, selectedRomhack.species);
        try {
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
                    {/* <Link to={`/${id}/pokedex/${baseMon.id}`}> */}
                    <img src={mon.spriteUrl} />
                    {/* </Link> */}
                </Grid>
            );
        } catch (error) {
            console.error(selectedTrainer.name, selectedTrainer.id, mon);
            console.error(error);
        }
    });
    return (
        <Grid container style={{ ...styleObj }}>
            {monList}
        </Grid>
    );
};

export default TeamDisplay;
