import React from "react";
import b2de from "../data/b2deData";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Homepage = ({ setSelectedHack }) => {
    const romhackList = [b2de];

    const displayTall = (setSelectedHack, romhack) => {};

    const listDisplay = romhackList.map((romhack) => {
        // console.log(romhack);
        const handleSelect = () => {
            setSelectedHack(romhack);
        };

        return (
            <Grid item xs={12} md={6} key={romhack.name}>
                <Link to={`/${romhack.id}`}>
                    <div className="nav-container-tall">
                        <div>{romhack.name}</div>
                    </div>
                </Link>
            </Grid>
        );
    });
    return (
        <div>
            Hello from Home
            <Grid container spacing={0}>
                {listDisplay}
            </Grid>
        </div>
    );
};

export default Homepage;
