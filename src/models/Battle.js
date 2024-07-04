import React from "react";

class Battle {
    constructor(battleType, opponent, partner, notes) {
        this.battleType = battleType;
        this.opponent = opponent;
        this.partner = partner || {};
        this.notes = notes || "";
    }

    listDisplay(topIndex, hackId, color, final) {
        console.log(this, Array.isArray(this.opponent), topIndex)
        if (Array.isArray(this.opponent)) {
            console.warn("WAHOOO")
            const opponents = this.opponent.map((opponent, index) => {
                // console.error("this", this);
                return opponent.locationStandard(color, index, hackId, final, true);
            });

            if (this.partner) {
                // console.warn("2v2", this);
                const partner = this.partner.locationStandard(
                    color,
                    topIndex,
                    hackId,
                    final
                );
                // console.warn("2v2 partner", partner);
                return (
                    <div key={topIndex}>
                        {partner}
                        <div
                            className="center"
                            style={{ backgroundColor: color }}
                        >
                            <h3>VS</h3>{" "}
                        </div>
                        {opponents}
                    </div>
                );
            } else {
                // console.error("1v2", this);
                return <div key={topIndex}>{opponents}</div>;
            }
        }
        console.log("1v1", this.opponent)
        return this.opponent.locationStandard(color, topIndex, hackId, final);
    }
}

export default Battle;
