import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import b2de from "../../data/b2deData";
import { Grid, Tooltip } from "@mui/material";
import TopBar from "../TopBar";

const Pokedex = (props) => {
    const { id } = useParams();

    const [dexType, setDexType] = useState(0);

    const romhackList = [b2de];
    const selectedRomhack = romhackList[id - 1];

    const dexList =
        dexType === 0
            ? selectedRomhack.regionalDex.dexArray
            : selectedRomhack.nationalDex.dexArray;

    const pokedex = dexList.map((entry, index) => {
        if (entry.id > 0) {
            const mon = entry.forms[0];

            let bgColor = "lightcyan";
            let abilityBgColor = "#d3ebea"
            if (index % 2) {
                abilityBgColor = "#ededed"
                bgColor = "white";
            }

            const type1Display = mon.type1.displayBanner(
                { marginRight: "1rem" },
                {}
            );
            const type2Display =
                mon.type2.id === 0
                    ? mon.type1.displayBanner({}, {})
                    : mon.type2.displayBanner({}, {});

            const abilityDisplay = [
                mon.ability1,
                mon.ability2,
                mon.abilityH,
            ].map((ability, index) => {
                let prefix = "1" 
                if (index === 1) {
                    prefix = "2"
                }
                if (index === 2) {
                    prefix = "H"
                }
                // const color = ability.id === 0 ? "lightgray" : abilityBgColor;
                const color = abilityBgColor;
                // const color = bgColor;
                const Name = React.forwardRef(function Name(props, ref) {
                    return (
                        <div
                            {...props}
                            ref={ref}
                            className="dex-ability-box"
                            style={{ backgroundColor: color }}
                        >
                            <h5>{prefix}: {ability.name}</h5>
                        </div>
                    );
                });
                return (
                    <div
                        className="align-center dex-ability-container"
                        key={index}
                    >
                        <Tooltip title={ability.description} followCursor>
                            <Name />
                        </Tooltip>
                    </div>
                );
            });

            return (
                <div
                    style={{ backgroundColor: bgColor }}
                    className="dex-padding"
                    key={index}
                >
                    <Link to={`${entry.id}/0`}>
                        <Grid container spacing={0}>
                            <Grid
                                item
                                xs={3}
                                sm={2}
                                md={1}
                                className="align-center"
                            >
                                <h3>#{entry.id}:</h3>
                            </Grid>
                            <Grid id="name" item xs sm={2}>
                                <h3>{mon.name}</h3>
                            </Grid>
                            <Grid
                                id="content"
                                item
                                xs
                                className="align-center justify-around"
                            >
                                <div
                                    id="type-display"
                                    className="align-center invis-xs"
                                >
                                    {type1Display}
                                    {type2Display}
                                </div>
                                <div
                                    className="align-center justify-between invis-md"
                                    style={{ width: "60%" }}
                                >
                                    {abilityDisplay}
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={1}
                                className="align-center justify-right"
                            >
                                <img
                                    className="dex-sprite"
                                    src={mon.spriteUrl}
                                    alt={`Sprite of ${mon.name}`}
                                />
                            </Grid>
                        </Grid>
                    </Link>
                </div>
            );
        }
    });
    return (
        <div className="">
            <TopBar />
            <div className="top-bar-padding dex-container">{pokedex}</div>
        </div>
    );
};

export default Pokedex;
