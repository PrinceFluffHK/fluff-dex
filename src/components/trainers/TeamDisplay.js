import { Grid } from "@mui/material";
import React from "react";

const TeamDisplay = ({ selectedTrainer, styleObj, gridSizes }) => {
    // console.log("TeamDisplay", selectedTrainer);
    const monList = selectedTrainer.team.map((trainerMon, index) => {
        const mon = trainerMon.pokemon;
        // console.log(mon);
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
                    <img src={mon.spriteUrl} />
                </Grid>
            );
        } catch (error) {
            console.error(selectedTrainer.name, selectedTrainer.id, mon)
            console.error(error);
        }
    });
    return <Grid container style={{ ...styleObj }}>{monList}</Grid>;
};

export default TeamDisplay;
