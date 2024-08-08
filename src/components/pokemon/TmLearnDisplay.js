import { Grid } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";

const TmLearnDisplay = ({ selectedMon, baseDexEntry }) => {
    let { id } = useParams();
    id = parseInt(id);

    let moveArray =
        selectedMon.levelLearn.length === 0
            ? baseDexEntry.forms[0].tmLearn
            : selectedMon.tmLearn;

    const movesDisplay = moveArray.map((moveElement, index) => {
        // console.warn(moveElement, selectedMon)
        const tmNum = moveElement.item.tmId < 10 ? `0${moveElement.item.tmId}` : `${moveElement.item.tmId}`

        const { move } = moveElement;
        return (
            <Grid container key={index} className="move-list-divider">
                <Grid className="align-center" item xs={5.5} sm={6}>
                    <Link to={`/${id}/moves/${move.id}`}>
                        <b>{move.name}</b>
                    </Link>
                </Grid>
                <Grid className="align-center" item xs={2}>
                    <b>TM{tmNum}</b>
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
        );
    });

    return (
        <Grid item className="justify-center" xs={12} md={6} lg={4}>
            <div className="width-80">
                <h1>Level-Up Moves</h1>
                <div>{movesDisplay}</div>
            </div>
        </Grid>
    );
};

export default TmLearnDisplay;
