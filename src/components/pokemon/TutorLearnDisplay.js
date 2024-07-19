import React from "react";
import { Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const TutorLearnDisplay = ({ selectedMon, baseDexEntry }) => {
    console.log(selectedMon)
    let { id } = useParams();
    id = parseInt(id);

    let moveArray = selectedMon.tutorLearn.length === 0
        ? baseDexEntry.forms[0].tutorLearn
        : selectedMon.tutorLearn;

    const movesDisplay = moveArray.map((moveElement, index) => {

        const { move } = moveElement;
        return (
            <Link
                to={`/${id}/moves/${move.id}`}
                className="suppress-link"
                key={index}
            >
                <Grid container>
                    <Grid className="align-center" item xs={5.5} sm={6}>
                        <b>{move.name}</b>
                    </Grid>
                    <Grid className="align-center" item xs={2}>
                        <b>
                            
                        </b>
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
        <Grid item className="justify-center" xs={12} md={6} lg={4}>
            <div className="width-80">
                <h1>Tutor Moves</h1>
                <div>{movesDisplay}</div>
            </div>
        </Grid>
    );
};

export default TutorLearnDisplay;

