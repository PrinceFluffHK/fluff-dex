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

        function compareNumbers(a, b) {
            return a - b;
        }
        const justVals = statData.map((stat) => {
            return stat.statVal;
        });
        const sortedData = justVals.sort(compareNumbers);
        const highestStat = sortedData[5];

        const labels = statData.map((stat) => {
            return (
                <div className="chart-bar" key={stat.statName}>
                    <b>{stat.statName}: </b>
                </div>
            );
        });

        const statVals = statData.map((stat) => {
            return (
                <div className="chart-bar" key={stat.statName}>
                    <b>{stat.statVal}</b>
                </div>
            );
        });

        const bars = statData.map((stat) => {
            const color = StatBarGraph.getBarColor(stat);
            const outOf = highestStat > 180 ? highestStat : 180;
            const width = `${(stat.statVal / outOf) * 100}%`;

            return (
                <div
                    className="chart-bar"
                    key={stat.statName}
                    style={{
                        backgroundColor: color,
                        width: width,
                        outline: "2px solid black",
                        borderRadius: "5px",
                    }}
                ></div>
            );
        });

        return (
            <div className="chart-margins">
                <h1>Base Stats</h1>
                <div className="flex">
                    <div className="column align-start label-container-margins">
                        {labels}
                    </div>
                    <div className="column align-start label-container-margins">
                        {statVals}
                    </div>
                    <div
                        className="column align-start width-100"
                    >
                        {bars}
                    </div>
                </div>
            </div>
        );
    }

    static getBarColor(statObj) {
        const { statVal } = statObj;
        if (statVal < 20) {
            return "#ef0000";
        }
        if (statVal < 30) {
            return "#fe0000";
        }
        if (statVal < 40) {
            return "#ff2300";
        }
        if (statVal < 50) {
            return "#ff3b00";
        }
        if (statVal < 60) {
            return "#ff5f00";
        }
        if (statVal < 70) {
            return "#ff8200";
        }
        if (statVal < 80) {
            return "#fea400";
        }
        if (statVal < 90) {
            return "#f3bc00";
        }
        if (statVal < 100) {
            return "#d7ca00";
        }
        if (statVal < 110) {
            return "#a3ce00";
        }
        if (statVal < 120) {
            return "#6bd000";
        }
        if (statVal < 130) {
            return "#1dd42f";
        }
        if (statVal < 140) {
            return "#00d348";
        }
        if (statVal < 150) {
            return "#03d35f";
        }
        if (statVal < 170) {
            return "#03d173";
        }
        if (statVal < 190) {
            return "#00cc8e";
        }
        return "#02c5ac";
    }
}

export default StatBarGraph;
