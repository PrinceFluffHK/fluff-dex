import React from "react";
import Help from "../../models/Help";
import { Grid } from "@mui/material";

const LevelLearnDisplay = ({ selectedMon }) => {
    const movesDisplay = selectedMon.levelLearn.map((moveElement, index) => {
        const { move } = moveElement;
        return (
            <div>
                <Grid container key={index}>
                    <Grid className="align-center" item xs={2}>
                        <b>{moveElement.level}</b>
                    </Grid>
                    <Grid className="align-center" item xs={6}>
                        <b>{move.name}</b>
                    </Grid>
                    <Grid className="align-center" item xs={2}>
                        {move.category.display({
                            height: "70%",
                            width: "auto",
                        })}
                    </Grid>
                    <Grid className="align-center" item xs={2}>
                        {move.type.displayBanner({}, {})}
                    </Grid>
                </Grid>
                <div className="width-100 center">
                    <div
                        style={{
                            width: "100%",
                            backgroundColor: "lightgray",
                            height: "2px",
                        }}
                    />
                </div>
            </div>
        );
    });

    return (
        <Grid item className="center" xs={12} md={6}>
            <div style={{ width: "80%" }}>
                <h1>Level-Up Moves</h1>
                <div>{movesDisplay}</div>
            </div>
        </Grid>
    );
};

export default LevelLearnDisplay;
