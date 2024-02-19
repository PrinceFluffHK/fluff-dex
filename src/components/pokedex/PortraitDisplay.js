import React from "react";
import TypeDisplay from "./TypeDisplay";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PortraitDisplay = ({ baseDexEntry, selectedMon }) => {
    const type1Banner = selectedMon.type1.displayBanner("display-type");
    const type2Banner =
        selectedMon.type2.id === 0
            ? ""
            : selectedMon.type2.displayBanner("display-type");

    const formName =
        selectedMon.modifier === "" ? "" : ` (${selectedMon.modifier})`;

    return (
        <Grid
            className="center"
            item
            xs={12}
            sm={6}
            style={{ flexDirection: "column" }}
        >
            <div className="portrait-container">
                <img
                    className="display-portrait"
                    src={selectedMon.profileUrl}
                    alt={selectedMon.name}
                />
                <h1>#{baseDexEntry.id}</h1>
            </div>
            <TypeDisplay type1Banner={type1Banner} type2Banner={type2Banner} />
        </Grid>
    );
};

export default PortraitDisplay;
