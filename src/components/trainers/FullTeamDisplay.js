import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FullTeamDisplay = ({ thisTrainer, id }) => {
    console.log(thisTrainer, id);
    const teamDisplay = thisTrainer.team.map((mon, index) => {
        const color1 = mon.pokemon.type1.lightColor();
        const color2 = mon.pokemon.type2 ? mon.pokemon.type2.lightColor() : "";

        let colorStyleObj = { backgroundColor: color1 };
        if (color2) {
            colorStyleObj = {
                backgroundImage: `linear-gradient(to bottom right, ${color1}, ${color2})`,
            };
        }
        console.log(color1, color2);

        const moveList = mon.moves.map((move, index) => {
            return (
                <Link
                    className="team-move"
                    to={`/${id}/moves/${move.id}`}
                    key={index}
                    style={{ backgroundColor: move.type.lightColor() }}
                >
                    <b>{move.name}</b>
                </Link>
            );
        });

        const ItemText = () => {
            if (mon.item) {
                return (
                    <div className="team-stat-text">
                        <b>@ {mon.item.name}</b>
                    </div>
                );
            }
            return (
                <div className="team-stat-text">
                    <b style={{ color: "gray" }}>@ None</b>
                </div>
            );
        };

        const NatureText = () => {
            if (mon.nature) {
                if (mon.nature.plusStat === "None") {
                    return (
                        <div className="team-stat-text">
                            <b style={{ color: "gray" }}>{mon.nature.name}</b>
                        </div>
                    );
                }
                return (
                    <div className="team-stat-text">
                        <b>
                            {mon.nature.name} (
                            <span style={{ color: "darkgreen" }}>
                                +{mon.nature.plusStat}
                            </span>
                            {` `}
                            <span style={{ color: "darkred" }}>
                                -{mon.nature.minusStat}
                            </span>
                            )
                        </b>
                    </div>
                );
            }
            return (
                <p className="team-stat-text" style={{ color: "gray" }}>
                    Nature Unknown
                </p>
            );
        };
        console.log(mon);

        return (
            <Grid className="" item xs={6} sm={4} key={index}>
                <div className="team-member-container" style={colorStyleObj}>
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
                    <div className="team-stat-text">
                        <b>Lv. {mon.level}</b>
                    </div>
                    <ItemText />
                    <div className="team-stat-text">
                        <b>{mon.ability.name}</b>
                    </div>
                    <NatureText />
                    <div className="center">
                        <div className="team-moves-container">{moveList}</div>
                    </div>
                </div>
            </Grid>
        );
    });
    return (
        <Grid container>
            <Grid item xs />
            {/* <Grid container className="center width-100"> */}
            <Grid item xs={11} md={8} lg={7} xl={6}>
                <Grid container columnSpacing={1} rowSpacing={1}>
                    {teamDisplay}
                </Grid>
            </Grid>
            <Grid item xs />
        </Grid>
    );
};

export default FullTeamDisplay;