import React, { useState } from "react";
import { b2deDex, b2deDexArray } from "../../data/B2DE/dex";
import PokemonDisplay from "./PokemonDisplay";
import { Grid } from "@mui/material";

const B2DEPokedex = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [selectedMon, setSelectedMon] = useState(0);

    const pokedex = b2deDexArray.map((mon, index) => {
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
                            src={mon.sprite}
                            alt={mon.name}
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
                pokedex={b2deDexArray}
            />
        );
    }
};

export default B2DEPokedex;
