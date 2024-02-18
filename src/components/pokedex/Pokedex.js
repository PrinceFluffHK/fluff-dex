import React, { useState } from "react";
import { useParams } from "react-router-dom";
import b2de from "../../data/b2deData";
import DexDisplay from "./DexDisplay";
import PokemonDisplay from "./PokemonDisplay";

const Pokedex = (props) => {
    const [dexType, setDexType] = useState(0);
    const [selectedMonId, setSelectedMonId] = useState(-1);
    const { id } = useParams();
    const romhackList = [b2de];
    const selectedRomhack = romhackList[id - 1];

    if (selectedMonId > -1) {
        return (
            <PokemonDisplay
                selectedMonId={selectedMonId}
                selectedRomhack={selectedRomhack}
                setSelectedMonId={setSelectedMonId}
                dexType={dexType}
            />
        );
    }
    return (
        <DexDisplay
            selectedRomhack={selectedRomhack}
            setSelectedMonId={setSelectedMonId}
            dexType={dexType}
            setDexType={setDexType}
        />
    );
};

export default Pokedex;
