import React from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, Tooltip } from "@mui/material";
import TopBar from "../navigation/TopBar";
import PokedexTopBar from "./PokedexTopBar";
import { romhackList } from "../Homepage";
import Help from "../../models/Help";

const Pokedex = (props) => {
    let { id, dexType } = useParams();
    id = parseInt(id);
    const selectedRomhack = Help.findInArray(id, romhackList);
    // console.log(selectedRomhack);

    const dexList =
        dexType === "regional"
            ? selectedRomhack.regionalDex.dexArray
            : selectedRomhack.nationalDex.dexArray;

    const pokedex = dexList.map((entry, index) => {
        if (entry.id > 0) {
            const mon = entry.forms[0];

            let bgColor = "lightcyan";
            let abilityBgColor = "#d3ebea";
            if (index % 2) {
                abilityBgColor = "#ededed";
                bgColor = "white";
            }

            const type1Display = mon.type1.displayBanner(
                { marginRight: "1rem" },
                {}
            );
            const type2Display = mon.type2.displayBanner({}, {});

            const abilityDisplay = [
                mon.ability1,
                mon.ability2,
                mon.abilityH,
            ].map((ability, index) => {
                if (ability.id > 0) {
                    const color = abilityBgColor;
                    const Name = React.forwardRef(function Name(props, ref) {
                        return (
                            <div
                                {...props}
                                ref={ref}
                                className="dex-ability-box"
                                style={{ backgroundColor: color }}
                            >
                                <h5>{ability.name}</h5>
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
                }
                return <></>;
            });

            let dexNum = index;
            if (dexType === "national") {
                dexNum = entry.id;
            }
            return (
                <div
                    style={{ backgroundColor: bgColor }}
                    className="list-padding"
                    key={index}
                >
                    <Link to={`/${id}/pokemon/${entry.id}/0`}>
                        <Grid container spacing={0}>
                            <Grid
                                item
                                xs={3}
                                sm={2}
                                md={1}
                                className="align-center"
                            >
                                <h3>#{dexNum}:</h3>
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
        return <></>;
    });

    const topBarToggle = [
        {
            name: "Regional",
            link: `/${id}/pokedex/regional`,
        },
        {
            name: "National",
            link: `/${id}/pokedex/national`,
        },
    ];

    return (
        <div className="">
            <TopBar toggleArray={topBarToggle} />
            <div className="content-container">
                <div className="body-container">
                    <PokedexTopBar dexType={dexType} />
                    <div className="dex-container">{pokedex}</div>
                </div>
            </div>
        </div>
    );
};

export default Pokedex;
