import { Grid } from "@mui/material";
import Help from "./Help";

class Collectible {
    constructor(item, quantity, type, description, requirements, notes) {
        this.item = item;
        this.quantity = quantity;
        this.type = type;
        this.description = description;
        this.requirements = requirements;
        this.notes = notes;
    }

    static makeSingle(collectibleObj, items) {
        const item = Help.findInArray(collectibleObj.itemId, items);
        return new Collectible(
            item,
            collectibleObj.quantity,
            collectibleObj.type,
            collectibleObj.description,
            collectibleObj.requirements,
            collectibleObj.notes
        );
    }

    static makeArray(collectibleObjArray, items) {
        return collectibleObjArray.map((collectibleObj) => {
            return Collectible.makeSingle(collectibleObj, items);
        });
    }

    locationDisplay(index, final) {
        let className = "list-divider"
        if (index === 0) {
            className += " round-top";
            if (final) {
                className += "-bottom";
            }
        } else if (final) {
            className += " round-bottom";
        }

        let color = "white";
        if (index % 2) {
            color = "lightcyan";
        }

        let quantity = "";
        if (this.quantity > 1) {
            quantity = ` x${this.quantity}`;
        }

        let requirements = ""
        if (this.requirements) {
            requirements = ` (Requires ${this.requirements})`
        }

        return (
            <div className={className} style={{ backgroundColor: color }}>
                <Grid container columnSpacing={3} className="collectible-padding">
                    <Grid item xs={3} className="align-center">
                        <b className="">
                            {this.item.name}
                            {quantity}
                        </b>
                    </Grid>
                    <Grid item xs className="align-center">
                        <p>{this.description}{requirements}</p>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Collectible;
