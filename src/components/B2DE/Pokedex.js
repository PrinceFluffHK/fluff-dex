import React, { useState } from "react";
import { b2deDex } from "../../data/B2DE/dex";
import GetImage from "../../models/GetImage";
import PokemonDisplay from "./PokemonDisplay";

const B2DEPokedex = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [selectedMon, setSelectedMon] = useState(0);
    let nonCanon = 0;

    const Pokedex = b2deDex.map((mon, index) => {
        // const handleSelect = () => {
        //     console.log(selectedIndex);
        //     if (selectedIndex != index) {
        //         console.log(`selected: ${index}`);
        //         setSelectedIndex(index);
        //     } else {
        //         console.log(`selected: -1`);
        //         setSelectedIndex(-1);
        //     }
        // };
        const handleSelect = () => {
            setSelectedMon(mon);
            setSelectedIndex(index);
        };

        if (mon.modifier) {
            nonCanon++;
        }
        let dexNum = index - nonCanon;
        const type1Banner = GetImage.typeBanner(mon.type1Id);
        const type2Banner = GetImage.typeBanner(mon.type2Id);

        if (selectedIndex != index) {
            return (
                <div key={index} onClick={handleSelect}>
                    #{dexNum}: {mon.name}
                </div>
            );
        } else {
            return (
                <div key={index} className="mon-container-expanded">
                    <div key={index} onClick={handleSelect}>
                        #{dexNum}: {mon.name}
                    </div>
                    {type1Banner}
                    {type2Banner}
                    <div>Atk: {mon.atk}</div>
                </div>
            );
        }
    });

    if (selectedMon === 0) {
        return <div>{Pokedex}</div>;
    } else {
        return (
            <PokemonDisplay
                selectedMon={selectedMon}
                selectedIndex={selectedIndex}
                dex={b2deDex}
            />
        );
    }
};

export default B2DEPokedex;
