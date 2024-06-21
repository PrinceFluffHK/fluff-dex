import React from "react";
import { Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const LevelLearnDisplay = ({ selectedMon, baseDexEntry, moveTypeId }) => {
    console.log(selectedMon);
    let { id } = useParams();
    id = parseInt(id);

    let levelClassName = "align-center";
    let moveArray =
        selectedMon.levelLearn.length === 0
            ? baseDexEntry.forms[0].levelLearn
            : selectedMon.levelLearn;
    if (moveTypeId > 0) {
        levelClassName = "invis";
        moveArray =
        selectedMon.tutorLearn.length === 0
        ? baseDexEntry.forms[0].tutorLearn
        : selectedMon.tutorLearn;
        if (moveTypeId === 1) {
            moveArray =
            selectedMon.tutorLearn.length === 0
            ? baseDexEntry.forms[0].tutorLearn
            : selectedMon.tutorLearn;
        }
    }
    
    const movesDisplay = moveArray.map((moveElement, index) => {
        let var2Prefix = "Lv ";
        console.log(moveElement);
        const getValues = (moveTypeId) => {
            switch (moveTypeId) {
                case 0:
                    return moveElement.level;
                    case 1:
                        var2Prefix = "";
                        return "";
                case 2:
                    return moveElement.item.name;
            }
        };
        let var2Value = getValues(moveTypeId);

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
                            {var2Prefix} {var2Value}
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
                <h1>Level-Up Moves</h1>
                <div>{movesDisplay}</div>
            </div>
        </Grid>
    );
};

export default LevelLearnDisplay;
