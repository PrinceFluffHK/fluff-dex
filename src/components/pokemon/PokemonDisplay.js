import { Grid } from "@mui/material";
import React, { useState } from "react";
import Help from "../../models/Help";
import PokemonDisplayTopBar from "./PokemonDisplayTopBar";
import AbilityDisplay from "./AbilityDisplay";
import DexEntry from "../../models/DexEntry";
import PortraitDisplay from "./PortraitDisplay";
import StatDisplay from "./StatDisplay";
import { romhackList } from "../Homepage";
import { useParams } from "react-router-dom";
import TopBar from "../navigation/TopBar";
import LevelLearnDisplay from "./LevelLearnDisplay";
import EvoDisplay from "./EvoDisplay";

const PokemonDisplay = ({ dexType }) => {
    let { id, entryId, formIndex } = useParams();
    id = parseInt(id);
    entryId = parseInt(entryId);
    formIndex = parseInt(formIndex);

    const selectedRomhack = Help.findInArray(id, romhackList);
    const selectedEntry = selectedRomhack.nationalDex.dexArray[entryId];

    const [selectedForm, setSelectedForm] = useState(formIndex)
    const selectedMonId = selectedEntry.forms[selectedForm].id;

    const selectedMon = Help.findInArray(
        selectedMonId,
        selectedRomhack.species
    );

    const baseDexEntry = DexEntry.findFromForm(
        selectedMonId,
        selectedRomhack.nationalDex.dexArray
    );

    return (
        <div>
            <TopBar />
            <div className="top-bar-padding">
                <PokemonDisplayTopBar
                    selectedMonId={selectedMonId}
                    selectedRomhack={selectedRomhack}
                    dexType={dexType}
                />
                <Grid className="mon-content" container spacing={0}>
                    <PortraitDisplay
                        selectedRomhack={selectedRomhack}
                        selectedMonId={selectedMonId}
                        baseDexEntry={baseDexEntry}
                        selectedMon={selectedMon}
                        setSelectedForm={setSelectedForm}
                    />
                    <AbilityDisplay selectedMon={selectedMon} />
                    <StatDisplay selectedMon={selectedMon} />
                    <EvoDisplay
                        selectedMon={selectedMon}
                        selectedRomhack={selectedRomhack}
                    />
                    <Grid item xs={12}>
                        <Grid container>
                            <LevelLearnDisplay
                                baseDexEntry={baseDexEntry}
                                selectedMon={selectedMon}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default PokemonDisplay;
