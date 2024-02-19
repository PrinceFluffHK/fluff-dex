import { Grid } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import React from "react";

const StatDisplay = ({ selectedMon }) => {
    const statData = [
        {
            statVal: selectedMon.hp,
            statName: "HP"
        },
        {
            statVal: selectedMon.atk,
            statName: "Atk"
        },
        {
            statVal: selectedMon.def,
            statName: "Def"
        },
        {
            statVal: selectedMon.spa,
            statName: "SpA"
        },
        {
            statVal: selectedMon.spd,
            statName: "SpD"
        },
        {
            statVal: selectedMon.spe,
            statName: "Spe"
        },
    ];

    const statLabels = [
        `HP: ${selectedMon.hp}`,
        `Atk: ${selectedMon.atk}`,
        `Def: ${selectedMon.def}`,
        `SpA: ${selectedMon.spa}`,
        `SpD: ${selectedMon.spd}`,
        `Spe: ${selectedMon.spe}`,
    ];
    return (
        <Grid item xs={12} sm={6} style={{ width: "100%", height: "30rem"}}>
            <BarChart
                width={400}
                height={400}
                series={[
                    { data: statData, id: "stats" },
                    // { data: uData, label: "uv", id: "uvId", stack: "total" },
                ]}
                xAxis={[{ data: statLabels, scaleType: "band" }]}
            />
        </Grid>
    );
};

export default StatDisplay;
