import { Grid } from "@mui/material";
import React from "react";
import Help from "../../models/Help";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Pokedex from "../../models/Pokedex";
import { Link } from "react-router-dom";
import DexEntry from "../../models/DexEntry";

const EvoDisplay = ({ selectedMon, selectedRomhack }) => {
    const makeLinks = (mon, speciesData, id) => {


        const nextLinks = mon.evoTo.map((link, index) => {
            const nextMon = Help.findInArray(link.nextMonId, speciesData);
            const nextLinks = makeLinks(nextMon, speciesData, id);
            return (
                <div className="center" key={index}>
                    <div className="" style={{ textAlign: "center" }}>
                        <div>{link.method}</div>
                        <FontAwesomeIcon
                            icon={faArrowRightLong}
                            color="black"
                        />
                        <div>{link.condition}</div>
                    </div>
                    <div>{nextLinks}</div>
                </div>
            );
        });

        const baseMon = DexEntry.findFromForm(mon.id, selectedRomhack.nationalDex.dexArray)

        return (
            <div className="center" key={mon.id}>
                <Link to={`/${selectedRomhack.id}/pokemon/${baseMon.id}/0`}>
                    <img src={mon.spriteUrl} alt={`Sprite of ${mon.name}`} />
                </Link>
                <div
                    className="justify-around"
                    style={{ flexDirection: "column" }}
                >
                    {nextLinks}
                </div>
            </div>
        );
    };

    const makeLine = (mon, speciesData, hackId) => {
        const baseMon = Pokedex.getBaseForm(mon, speciesData);
        return makeLinks(baseMon, speciesData, hackId);
    };

    const evoChain = makeLine(
        selectedMon,
        selectedRomhack.species,
        selectedRomhack.id
    );
    return (
        <Grid item xs={12} md={6} className="center">
            <div className="width-80">
                <h1>Evolutions</h1>
                {evoChain}
            </div>
        </Grid>
    );
};

export default EvoDisplay;
