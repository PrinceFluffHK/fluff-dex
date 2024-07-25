import React from "react";
import b2de from "../data/b2deData";
import swde from "../data/swdeData";
import { Grid } from "@mui/material";

export const romhackList = [b2de, swde];
console.log(romhackList)

const Homepage = () => {
    const listDisplay = romhackList.map((romhack, index) => {
        return romhack.homeDisplay(index);
    });
    return (
        <div className="width-100 justify-center homepage-background">
            <div className="width-80">
                <Grid container rowSpacing={3}>
                    {listDisplay}
                </Grid>
            </div>
        </div>
    );
};

export default Homepage;
