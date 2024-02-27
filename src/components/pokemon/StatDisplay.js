import { Grid } from "@mui/material";
import React from "react";
import StatBarGraph from "../../models/StatBarGraph";

const StatDisplay = ({ selectedMon }) => {
    const statClass = new StatBarGraph(selectedMon)
    const barGraph = statClass.makeGraph()
    return (
        <Grid item xs={12} md={6} style={{ width: "100%", marginBottom: "1rem"}}>
            {barGraph}
        </Grid>
    );
};

export default StatDisplay;
