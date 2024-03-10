import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FullTeamDisplay = ({ thisTrainer, id }) => {
    const teamDisplay = thisTrainer.team.map((mon, index) => {
        const moveList = mon.moves.map((move, index) => {
            return (
                <Link
                    className="team-move"
                    to={`/${id}/moves/${move.id}`}
                    key={index}
                >
                    {move.name}
                </Link>
            );
        });

        const ItemText = () => {
            if (mon.item) {
                return <p className="text-center">@ {mon.item.name}</p>;
            }
            return (
                <p className="text-center" style={{ color: "gray" }}>
                    @ None
                </p>
            );
        };

        const NatureText = () => {
            if (mon.nature) {
                if (mon.nature.plusStat === "None") {
                    return <p className="text-center" style={{ color: "gray" }}>{mon.nature.name}</p>;
                }
                return (
                    <p className="text-center">
                        {mon.nature.name} (
                        <span style={{ color: "darkgreen" }}>
                            +{mon.nature.plusStat}
                        </span>
                        {` `}
                        <span style={{ color: "darkred" }}>
                            -{mon.nature.minusStat}
                        </span>
                        )
                    </p>
                );
            }
            return (
                <p className="text-center" style={{ color: "gray" }}>
                    Nature Unknown
                </p>
            );
        };

        return (
            <Grid className="" item xs={6} sm={4} key={index}>
                <div className="team-member-container">
                    <div className="width-100 center">
                        <Link
                            className="team-member-sprite-container"
                            to={`/${id}/pokedex/${mon.pokemon.id}/0`}
                        >
                            <img
                                src={mon.pokemon.spriteUrl}
                                alt={`Sprite of ${mon.pokemon.name}`}
                            />
                        </Link>
                    </div>
                    <p className="text-center">Lv. {mon.level}</p>
                    <ItemText />
                    <p className="text-center">{mon.ability.name}</p>
                    <NatureText />
                    <div className="team-moves-container">{moveList}</div>
                </div>
            </Grid>
        );
    });
    return (
        <Grid container>
            <Grid item xs />
            {/* <Grid container className="center width-100"> */}
            <Grid xs={11} md={8} lg={7} xl={6}>
                <Grid container columnSpacing={1} rowSpacing={1}>
                    {teamDisplay}
                </Grid>
            </Grid>
            <Grid item xs />
        </Grid>
    );
};

export default FullTeamDisplay;
