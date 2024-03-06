import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft,  } from "@fortawesome/free-solid-svg-icons";

import Help from "../../models/Help";
import DexEntry from "../../models/DexEntry";

const PokemonDisplayTopBar = ({
    selectedMonId,
    setSelectedMonId,
    selectedRomhack,
    dexType,
}) => {
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

    const incrementUp = () => {
        setSelectedMonId(nextMon.id);
    };

    const incrementDown = () => {
        setSelectedMonId(lastMon.id);
    };

    const returnToDex = () => {
        setSelectedMonId(-1);
    };

    const IncrementUpButton = () => {
        return (
            <div className="increment-container" onClick={incrementUp}>
                <img
                    className="dex-nav-sprite"
                    src={nextMon.spriteUrl}
                    alt="next pokemon"
                />
                <div>
                    <FontAwesomeIcon icon={faChevronRight} size="2xl"/>
                </div>
            </div>
        );
    };
    const IncrementDownButton = () => {
        return (
            <div className="increment-container" onClick={incrementDown}>
                <FontAwesomeIcon icon={faChevronLeft} size="2xl"/>
                <img
                    className="dex-nav-sprite"
                    src={lastMon.spriteUrl}
                    alt="previous pokemon"
                />
            </div>
        );
    };

    const BackToDex = (props) => {
        return (
            <div onClick={returnToDex}>
                <img
                    className="dex-nav-sprite"
                    src={thisMon.forms[0].spriteUrl}
                    alt="this pokemon"
                />
            </div>
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
