import React from "react";
import { Grid } from "@mui/material";

const EncounterTable = ({ encTable }) => {
    const encounterList = encTable.pokemon.map((mon, index) => {
        let bgColor = "white";
        if (index % 2) {
            bgColor = "lightcyan";
        }
        return (
            <Grid container style={{ backgroundColor: {bgColor}}}>
                <Grid item xs={1}>
                    {index + 1}
                </Grid>
                <Grid item xs>
                    {mon.pokemon.name}
                </Grid>
                <Grid item xs={2}>
                    {mon.minLv}
                </Grid>
                <Grid item xs={2}>
                    {mon.maxLv}
                </Grid>
                <Grid item xs={2}>
                    {mon.percent}
                </Grid>
            </Grid>
        );
    });

    return (
        <div>
            <Grid item sm={12} md={6} lg={4}>
                <Grid container>
                    <Grid item xs={1}>
                        #
                    </Grid>
                    <Grid item xs>
                        Name
                    </Grid>
                    <Grid item xs={2}>
                        Min Lv
                    </Grid>
                    <Grid item xs={2}>
                        Max Lv
                    </Grid>
                    <Grid item xs={2}>
                        %
                    </Grid>
                </Grid>
                <div>{encounterList}</div>
            </Grid>
        </div>
    );
};

export default EncounterTable;
