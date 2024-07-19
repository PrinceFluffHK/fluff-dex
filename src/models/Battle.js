import React from "react";

class Battle {
    constructor(battleType, opponent, partner, notes) {
        this.battleType = battleType;
        this.opponent = opponent;
        this.partner = partner || {};
        this.notes = notes || "";
    }

listDisplay(topIndex, hackId, color, final) {
    try {
        if (Array.isArray(this.opponent)) {
            // console.error("HELLO FROM Array.isArray", this.opponent, this.partner)
            const opponents = this.opponent.map((opponent, index) => {
                return opponent.locationStandard(color, index, hackId, final, true);
            });

            if (this.partner) {
                const partner = this.partner.locationStandard(
                    color,
                    topIndex,
                    hackId,
                    final
                );
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
                // console.warn(this.opponent)
                return <div key={topIndex}>{opponents}</div>;
            }
        }
        return this.opponent.locationStandard(color, topIndex, hackId, final)
        
    } catch (error) {
        // console.error(this, error)
    }
    }
}

export default Battle;
