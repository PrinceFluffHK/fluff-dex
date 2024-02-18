import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Help from "../../models/Help";

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
    // console.log(pokedex);
    const thisMon = Help.findInArray(selectedMonId, pokedex);
    // console.log(thisMon);
    const thisMonIndex = pokedex.indexOf(thisMon);
    // console.log(thisMonIndex);
    const nextMon =
        thisMonIndex === pokedex.length - 1
            ? pokedex[1].forms[0]
            : pokedex[thisMonIndex + 1].forms[0];
    const lastMon =
        thisMonIndex === 1
            ? pokedex[pokedex.length - 1].forms[0]
            : pokedex[thisMonIndex - 1].forms[0];
    // console.log(nextMon, lastMon)
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
                <img src={nextMon.spriteUrl} alt="next pokemon" />
                <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "white" }}
                    size="2xl"
                />
            </div>
        );
    };
    const IncrementDownButton = () => {
        // if (thisMonIndex === 1) {
        //     return <div></div>;
        // }
        return (
            <div className="increment-container" onClick={incrementDown}>
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ color: "white" }}
                    size="2xl"
                />
                <img src={lastMon.spriteUrl} alt="previous pokemon" />
            </div>
        );
    };

    const BackToDex = (props) => {
        return (
            <div onClick={returnToDex}>
                <img src={thisMon.forms[0].spriteUrl} alt="this pokemon" />
            </div>
        );
    };

    return (
        <div className="dex-top-bar">
            <IncrementDownButton />
            <BackToDex />
            <IncrementUpButton />
        </div>
    );
};

export default PokemonDisplayTopBar;
