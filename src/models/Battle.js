import React from "react";

class Battle {
    constructor(battleType, opponent, partner, notes) {
        this.battleType = battleType;
        this.opponent = opponent;
        this.partner = partner || 0;
        this.notes = notes || "";
    }

    listDisplay(topIndex, hackId, first) {
        if (this.opponent.length === 1) {
            const opponents = this.opponent.map((opponent, index) => {
                return opponent.locationStandard(index, hackId, first);
            });
            return (
                <div className="width-100" key={topIndex}>
                    {opponents}
                </div>
            );
        } else if (this.opponent.length === 2) {
            if (this.partner === 0) {
                const opponents = this.opponent.map((opponent, index) => {
                    if (index === 0) {
                        return opponent.locationStandard(index, hackId, first);
                    }
                    return opponent.locationStandard(index, hackId, true);
                });
                return <div key={topIndex}>{opponents}</div>;
            } else {
                const opponents = this.opponent.map((opponent, index) => {
                    return opponent.locationStandard(index, hackId, true);
                });
                const partner = this.partner.locationStandard(
                    topIndex,
                    hackId,
                    false
                );
                return (
                    <div key={topIndex}>
                        {partner}
                        <div className="center">
                            <h3>VS</h3>
                        </div>
                        {opponents}
                    </div>
                );
            }
        }
    }
}

export default Battle;
