import { Grid } from "@mui/material";
import React from "react";

class Battle {
    constructor(battleType, opponent, partner, notes) {
        this.battleType = battleType;
        this.opponent = opponent;
        this.partner = partner || [];
        this.notes = notes || "";
    }

    listDisplay(index, hackId, color, final) {
        if (typeof this.opponent === "object") {
            return this.opponent.locationView(color, index, hackId, final);
        }
        if (this.partner) {

        }
    }
}

export default Battle;
