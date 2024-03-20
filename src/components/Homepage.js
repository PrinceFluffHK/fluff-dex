import React from "react";
import b2de from "../data/b2deData";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const romhackList = [b2de];

const Homepage = () => {
    const listDisplay = romhackList.map((romhack, index) => {
        console.log(romhack)
        return romhack.homeDisplay(index);
    });
    return (
        <div className="width-100 center">
            <div className="width-80">
                <Grid container spacing={0}>
                    {listDisplay}
                </Grid>
            </div>
        </div>
    );
};

export default Homepage;
