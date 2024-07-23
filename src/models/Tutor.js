import { Grid } from "@mui/material";

class Tutor {
    constructor(id, name, location, currency, moves) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.currency = currency;
    }

    static makeSingle(tutorObj) {
        return new Tutor(
            tutorObj.id,
            tutorObj.name,
            tutorObj.location,
            tutorObj.currency
        );
    }

    static makeArray(tutorObjArray) {
        const newTutors = tutorObjArray.map((tutorObj) => {
            return Tutor.makeSingle(tutorObj);
        });
        return newTutors;
    }

    makeDisplay(hack, index, color) {
        const locationClass = color === "white" ? "invis" : ""
        const moveList = hack.tutorMoves.filter((move) => {
            return move.tutor.id === this.id;
        });
        const moveDisplay = moveList.map((move, index) => {
            return move.tutorListDisplay(index, this.currency, hack.id);
        });
        return (
            <div className="location-content-container justify-center width-90" key={index} style={{ backgroundColor: color}}>
                <div className="width-100">
                    <h2>{this.name}</h2>
                    <h2 className={locationClass}>{this.location}</h2>
                    <div>{moveDisplay}</div>
                </div>
            </div>
        );
    }
}

export default Tutor;
