import React from "react";

class StatBarGraph {
    constructor(selectedMon) {
        this.selectedMon = selectedMon;
    }

    makeGraph() {
        const { selectedMon } = this;
        const statData = [
            {
                statVal: selectedMon.hp,
                statName: "HP",
                statColor: "red",
            },
            {
                statVal: selectedMon.atk,
                statName: "Atk",
                statColor: "orange",
            },
            {
                statVal: selectedMon.def,
                statName: "Def",
                statColor: "yellow",
            },
            {
                statVal: selectedMon.spa,
                statName: "SpA",
                statColor: "blue",
            },
            {
                statVal: selectedMon.spd,
                statName: "SpD",
                statColor: "purple",
            },
            {
                statVal: selectedMon.spe,
                statName: "Spe",
                statColor: "green",
            },
        ];

        const labels = statData.map((stat) => {
            return (
                <div className="chart-bar" key={stat.statName}>
                    <b>{stat.statName}: </b>
                </div>
            );
        });

        const statVals = statData.map(stat => {
            return (
                <div className="chart-bar" key={stat.statName}>
                    <b>{stat.statVal}</b>
                </div>
            )
        })

        const bars = statData.map((stat) => {
            const color = StatBarGraph.getBarColor(stat);
            return (
                <div key={stat.statName}>
                    <div
                        className="chart-bar"
                        style={{
                            backgroundColor: color,
                            width: stat.statVal * 1.5,
                            outline: "2px solid black",
                        }}
                    ></div>
                </div>
            );
        });

        return (
            <div className="chart-margins">
                <div className="flex">
                    <div className="column align-start label-container-margins">
                        {labels}
                    </div>
                    <div className="column align-start label-container-margins">
                        {statVals}
                    </div>
                    <div className="chart-base" />
                    <div className="column align-start">{bars}</div>
                </div>
            </div>
        );
    }

    static getBarColor(statObj) {
        const { statVal } = statObj;
        if (statVal < 30) {
            return "red";
        }
        if (statVal < 60) {
            return "orange";
        }
        if (statVal < 90) {
            return "yellow";
        }
        if (statVal < 120) {
            return "green";
        }
        return "blue";
    }
}

export default StatBarGraph;
