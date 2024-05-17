import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import Help from "../../models/Help";
import DexEntry from "../../models/DexEntry";
import { Link } from "react-router-dom";

const PokemonDisplayTopBar = ({ selectedMonId, selectedRomhack, dexType }) => {
    const pokedex =
        dexType === 0
            ? selectedRomhack.regionalDex.dexArray
            : selectedRomhack.nationalDex.dexArray;
    const baseMon = DexEntry.findFromForm(selectedMonId, pokedex);
    const thisMon = Help.findInArray(baseMon.id, pokedex);
    const thisMonIndex = pokedex.indexOf(thisMon);

    const nextMon =
        thisMonIndex === pokedex.length - 1
            ? pokedex[1].forms[0]
            : pokedex[thisMonIndex + 1].forms[0];
    const lastMon =
        thisMonIndex === 1
            ? pokedex[pokedex.length - 1].forms[0]
            : pokedex[thisMonIndex - 1].forms[0];

    const IncrementUpButton = () => {
        return (
            <Link
                to={`/${selectedRomhack.id}/pokemon/${nextMon.id}/0`}
                className="increment-container"
            >
                <img
                    className="dex-nav-sprite"
                    src={nextMon.spriteUrl}
                    alt="next pokemon"
                />
                <div>
                    <FontAwesomeIcon icon={faChevronRight} size="2xl" color="black"/>
                </div>
            </Link>
        );
    };
    const IncrementDownButton = () => {
        return (
            <Link
                to={`/${selectedRomhack.id}/pokemon/${lastMon.id}/0`}
                className="increment-container"
            >
                <FontAwesomeIcon icon={faChevronLeft} size="2xl" color="black"/>
                <img
                    className="dex-nav-sprite"
                    src={lastMon.spriteUrl}
                    alt="previous pokemon"
                />
            </Link>
        );
    };

    return (
        <div className="mon-top-bar">
            <IncrementDownButton />
            <h2>{thisMon.forms[0].name}</h2>
            <IncrementUpButton />
        </div>
    );
};

export default PokemonDisplayTopBar;
