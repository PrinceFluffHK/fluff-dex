import React from "react";
import Help from "../../models/Help";
import { Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const LevelLearnDisplay = ({ selectedMon }) => {
    const { id } = useParams();
    const movesDisplay = selectedMon.levelLearn.map((moveElement, index) => {
        const { move } = moveElement;
        return (
            <Link to={`/${id}/moves/${move.id}`} className="suppress-link" key={index}>
                <Grid container >
                    <Grid className="align-center" item xs={2}>
                        <b>{moveElement.level}</b>
                    </Grid>
                    <Grid className="align-center" item xs={5.5} sm={6}>
                        <b>{move.name}</b>
                    </Grid>
                    <Grid className="align-center" item xs={2}>
                        {move.category.display({
                            height: "70%",
                            width: "auto",
                        })}
                    </Grid>
                    <Grid className="align-center" item xs={2.5} sm={2}>
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
            </Link>
        );
    });

    return (
        <Grid item className="center" xs={12} md={6} lg={4}>
            <div className="width-80">
                <h1>Level-Up Moves</h1>
                <div>{movesDisplay}</div>
            </div>
        </Grid>
    );
};

export default LevelLearnDisplay;