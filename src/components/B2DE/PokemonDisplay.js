import React from "react";
import DexTopBar from "../DexTopBar";
import { Grid } from "@mui/material";

const PokemonDisplay = ({
    selectedIndex,
    selectedMon,
    setSelectedIndex,
    setSelectedMon,
    pokedex,
}) => {
    const type1Banner = selectedMon.type1.displayBanner("display-type");
    const type2Banner =
        selectedMon.type2.id === 0 ? "" : selectedMon.type2.displayBanner("display-type");

    return (
        <div>
            <DexTopBar
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                selectedMon={selectedMon}
                setSelectedMon={setSelectedMon}
                pokedex={pokedex}
            />
            <div className="display-scroll">
                <Grid container spacing={0}>
                    <Grid
                        className="center"
                        item
                        xs={12}
                        style={{ flexDirection: "column" }}
                    >
                        <h1>{selectedMon.name}</h1>
                        <img
                            className="display-portrait"
                            src={selectedMon.profile}
                            alt={selectedMon.name}
                        />
                    </Grid>
                    <Grid
                        className="center"
                        item
                        xs={12}
                        style={{ flexDirection: "column" }}
                    >
                        <div className="justify-around" style={{width: "90%"}}>
                            {type1Banner}
                            {type2Banner}
                        </div>
                        <div className="ability-container">
                            <h3>{selectedMon.ability1.name}</h3>
                            <h3>
                                {selectedMon.ability2.id === 0
                                    ? ""
                                    : selectedMon.ability2.name}
                            </h3>
                            <h3>
                                {selectedMon.abilityH.id === 0
                                    ? ""
                                    : selectedMon.abilityH.name}
                            </h3>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default PokemonDisplay;
