import { Grid, Tooltip } from "@mui/material";
import React from "react";
import TypeDisplay from "./TypeDisplay";

const AbilityDisplay = ({ selectedMon }) => {
    const newStyle = {
        height: "60px",
        width: "150px",
        borderRadius: "10px",
        fontSize: "30px",
    };

    const type1Banner = selectedMon.type1.displayBanner(newStyle, {});
    const type2Banner =
        selectedMon.type2.id === 0
            ? ""
            : selectedMon.type2.displayBanner(newStyle, {});

    const abilityList = [
        {
            slot: 1,
            ability: selectedMon.ability1,
        },
        {
            slot: 2,
            ability: selectedMon.ability2,
        },
    ];

    const abilities = abilityList.map((item, index) => {
        const { ability } = item;

        const Description = React.forwardRef(function Description(props, ref) {
            return (
                <div {...props} ref={ref} className="ability-box">
                    <h2 style={{ textAlign: "center"}}>{ability.name}</h2>
                </div>
            );
        });

        if (item.ability.id === 0) {
            return <div key={index}/>
        }
        return (
            <Grid className="center" item xs key={index}>
                <Tooltip title={ability.description} followCursor>
                    <Description />
                </Tooltip>
            </Grid>
        );
    });

    const HiddenAbility = (props) => {
        const ability = selectedMon.abilityH;
        const Description = React.forwardRef(function Description(props, ref) {
            return (
                <div {...props} ref={ref} className="ability-box">
                    <h2>{ability.name}</h2>
                </div>
            );
        });
        if (ability.id > 0) {
            return (
                <div className="center">
                    <Tooltip title={ability.description} followCursor>
                        <Description />
                    </Tooltip>
                </div>
            );
        }
    };

    const HiddenText = () => {
        if (selectedMon.abilityH.id > 0) {
            return (
                <div className="align-center">
                    <h3>Hidden Ability</h3>
                </div>
            );
        }
    };

    return (
        <Grid className="center top-1" item xs={12} md={6}>
            <div
                style={{
                    width: "100%",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                className="flex"
            >
                <TypeDisplay
                    type1Banner={type1Banner}
                    type2Banner={type2Banner}
                />
                <div className="ability-container">
                    <div className="align-center">
                        <h1>Abilities</h1>
                    </div>
                    <Grid container spacing={0.5}>
                        {abilities}
                    </Grid>
                    <HiddenText />
                    <HiddenAbility />
                </div>
            </div>
        </Grid>
    );
};

export default AbilityDisplay;
