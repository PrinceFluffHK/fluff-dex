import React from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import b2de from "../data/b2deData";
import TopBar from "./TopBar";

const NavPage = () => {
    const { id } = useParams();
    const romhackList = [b2de];
    const selectedRomhack = romhackList[id - 1];
    return (
        <div>
            <TopBar />
            <Grid className="top-bar-padding" container spacing={2}>
                {selectedRomhack.navGrid()}
            </Grid>
        </div>
    );
};

export default NavPage;
