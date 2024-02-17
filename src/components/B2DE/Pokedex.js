import React, { useState } from "react";
import PokemonDisplay from "./PokemonDisplay";
import { Grid } from "@mui/material";
import b2deDex from "../../data/B2DE/pokedex";

const B2DEPokedex = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [selectedMon, setSelectedMon] = useState(0);
    // console.log(b2deDex)

    const pokedex = b2deDex.map((mon, index) => {
        const handleSelect = () => {
            setSelectedMon(mon);
            setSelectedIndex(index);
        };

        let bgColor = "white";
        if (index % 2) {
            bgColor = "#00ebc7";
        }

        return (
            <div
                className="dex-padding"
                key={index}
                onClick={handleSelect}
                style={{ backgroundColor: bgColor }}
            >
                <Grid container spacing={0}>
                    <Grid item xs={3} className="flex align-center">
                        <h3>#{index}:</h3>
                    </Grid>
                    <Grid item xs={6} className="flex align-center">
                        <h3>{mon.name}</h3>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        className="flex align-center justify-right"
                    >
                        <img
                            className="dex-sprite"
                            src={mon.spriteUrl}
                            alt={`Sprite of ${mon.name}`}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    });

    if (selectedIndex === -1) {
        return <div className="">{pokedex}</div>;
    } else {
        return (
            <PokemonDisplay
                selectedMon={selectedMon}
                selectedIndex={selectedIndex}
                setSelectedMon={setSelectedMon}
                setSelectedIndex={setSelectedIndex}
                pokedex={b2deDex}
            />
        );
    }
};

export default B2DEPokedex;
