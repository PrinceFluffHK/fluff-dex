import { Button, Grid, Tooltip } from "@mui/material";
import React from "react";

const AbilityDisplay = ({ selectedMon }) => {
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

    const abilities = abilityList.map((item) => {
        const { ability } = item;

        const Description = React.forwardRef(function Description(props, ref) {
            return (
                <div {...props} ref={ref}>
                    {ability.name}
                </div>
            );
        });

        if (item.ability.id === 0) {
            return;
        }
        return (
            <Grid className="center" item xs key={ability.id}>
                <div className="ability-box">
                    <h3>
                        <Tooltip title={ability.description} followCursor>
                            <Description />
                        </Tooltip>
                    </h3>
                </div>
            </Grid>
        );
    });

    const HiddenAbility = (props) => {
        const ability = selectedMon.abilityH;
        const Description = React.forwardRef(function Description(props, ref) {
            return (
                <div {...props} ref={ref}>
                    {ability.name}
                </div>
            );
        });
        if (ability.id > 0) {
            return (
                <div className="center">
                    <div className="ability-box">
                        <h3>
                            <Tooltip title={ability.description} followCursor>
                                <Description />
                            </Tooltip>
                        </h3>
                    </div>
                </div>
            );
        }
    };

    const HiddenText = (props) => {

        if (selectedMon.abilityH.id > 0) {
            return (
                <div className="center">
                    <h3>Hidden Ability</h3>
                </div>
            );
        }
    };

    return (
        <Grid className="center" item xs={12} sm={6}>
            <div className="ability-container">
                <div className="center">
                    <h1>Abilities</h1>
                </div>
                <Grid container spacing={0.5}>
                    {abilities}
                </Grid>
                <HiddenText />
                <HiddenAbility />
            </div>
        </Grid>
    );
};

export default AbilityDisplay;
