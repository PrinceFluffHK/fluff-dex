import { Grid } from "@mui/material";
import React from "react";
import Help from "../../models/Help";
import PokemonDisplayTopBar from "./PokemonDisplayTopBar";
import AbilityDisplay from "./AbilityDisplay";

const PokemonDisplay = ({
    selectedMonId,
    setSelectedMonId,
    selectedRomhack,
    dexType,
}) => {
    const selectedMon = Help.findInArray(
        selectedMonId,
        selectedRomhack.species
    );
    const type1Banner = selectedMon.type1.displayBanner("display-type");
    const type2Banner =
        selectedMon.type2.id === 0
            ? ""
            : selectedMon.type2.displayBanner("display-type");

    return (
        <div>
            <PokemonDisplayTopBar
                selectedMonId={selectedMonId}
                setSelectedMonId={setSelectedMonId}
                selectedRomhack={selectedRomhack}
                dexType={dexType}
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
                            src={selectedMon.profileUrl}
                            alt={selectedMon.name}
                        />
                    </Grid>
                    <Grid
                        className="center"
                        item
                        xs={12}
                        style={{ flexDirection: "column" }}
                    >
                        <div
                            className="justify-around"
                            style={{ width: "90%" }}
                        >
                            {type1Banner}
                            {type2Banner}
                        </div>
                        <AbilityDisplay
                            selectedMon={selectedMon}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default PokemonDisplay;
