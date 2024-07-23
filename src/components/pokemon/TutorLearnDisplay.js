import React from "react";
import { Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const TutorLearnDisplay = ({ selectedMon, baseDexEntry }) => {
    // console.log(selectedMon)
    let { id } = useParams();
    id = parseInt(id);

    let moveArray =
        selectedMon.tutorLearn.length === 0
            ? baseDexEntry.forms[0].tutorLearn
            : selectedMon.tutorLearn;

    const movesDisplay = moveArray.map((moveElement, index) => {
        const { move } = moveElement;
        return (
            <Grid container className="move-list-divider" key={index}>
                <Grid className="align-center" item xs={7.5}>
                    <Link to={`/${id}/moves/${move.id}`}>
                        <b>{move.name}</b>
                    </Link>
                </Grid>
                <Grid className="align-center" item xs={2}>
                    {move.category.display({
                        height: "70%",
                        width: "auto",
                    })}
                </Grid>
                <Grid className="align-center justify-right" item xs={2.5}>
                    {move.type.displayBanner({}, {})}
                </Grid>
            </Grid>
        );
    });

    return (
        <Grid item className="justify-center" xs={12} md={6} lg={4}>
            <div className="width-80">
                <h1>Tutor Moves</h1>
                <div>{movesDisplay}</div>
            </div>
        </Grid>
    );
};

export default TutorLearnDisplay;
