import React from "react";
import DexTopBar from "../DexTopBar";

const PokemonDisplay = ({ selectedIndex, dex }) => {
    // console.log(selectedMon)
    const selectedMon = dex[selectedIndex];

    const incrementUp = () => {

    }

    return (
        <div>
            <DexTopBar/>
            <div id="pokemon info"></div>
        </div>
    );
};

export default PokemonDisplay;
