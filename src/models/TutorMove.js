import React from "react";
import Help from "./Help";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

class TutorMove {
    constructor(id, tutor, move, cost) {
        this.id = id;
        this.tutor = tutor;
        this.move = move;
        this.cost = cost;
    }

    static makeSingle(tutorMoveObj, movesArray, tutorsArray) {
        const move = Help.findInArray(tutorMoveObj.moveId, movesArray);
        const tutor = Help.findInArray(tutorMoveObj.tutorId, tutorsArray);

        return new TutorMove(tutorMoveObj.id, tutor, move, tutorMoveObj.cost);
    }

    static makeArray(tutorMoveObjArray, movesArray, tutorsArray) {
        return tutorMoveObjArray.map((tutorMoveObj) => {
            return TutorMove.makeSingle(tutorMoveObj, movesArray, tutorsArray);
        });
    }

    static getTutorMoves(moveIdArray, tutorMoves) {
        return moveIdArray.map((moveId) => {
            return Help.findInArray(moveId, tutorMoves);
        });
    }

    tutorListDisplay(index, currency, hackId) {
        let costString =
            this.cost != 0 ? `${this.cost} ${currency}s` : "No Cost";
        return (
            <Link to={`/${hackId}/moves/${this.move.id}`} key={index}>
                <Grid container className="tutor-move-container">
                    <Grid className="align-center" item xs={4}>
                        <b>
                            <p>{this.move.name}</p>
                        </b>
                    </Grid>
                    <Grid className="align-center" item xs={5}>
                        <b>
                            <p>{costString}</p>
                        </b>
                    </Grid>
                    <Grid className="align-center" item xs={3}>
                        {this.move.type.displayBanner({}, {})}
                    </Grid>
                </Grid>
            </Link>
        );
    }
}

export default TutorMove;
