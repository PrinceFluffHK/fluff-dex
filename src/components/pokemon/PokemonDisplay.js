import { Grid } from "@mui/material";
import React, { useState } from "react";
import Help from "../../models/Help";
import PokemonDisplayTopBar from "./PokemonDisplayTopBar";
import AbilityDisplay from "./AbilityDisplay";
import FormSelect from "./FormSelect";
import DexEntry from "../../models/DexEntry";
import PortraitDisplay from "./PortraitDisplay";
import StatDisplay from "./StatDisplay";
import { romhackList } from "../Homepage";
import { useParams } from "react-router-dom";
import TopBar from "../navigation/TopBar";
import LevelLearnDisplay from "./LevelLearnDisplay";
import EvoDisplay from "./EvoDisplay";

const PokemonDisplay = ({ dexType }) => {
    let { id, selectedEntryId, selectedFormIndex } = useParams();
    id = parseInt(id);
    selectedEntryId = parseInt(selectedEntryId);
    selectedFormIndex = parseInt(selectedFormIndex);

    const selectedRomhack = Help.findInArray(id, romhackList);

    const [selectedMonId, setSelectedMonId] = useState(() => {
        const selectedEntry =
            selectedRomhack.nationalDex.dexArray[selectedEntryId];
        return selectedEntry.forms[selectedFormIndex].id;
    });

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
                    setSelectedMonId={setSelectedMonId}
                    dexType={dexType}
                />
                <Grid className="mon-content" container spacing={0}>
                    <PortraitDisplay
                        setSelectedMonId={setSelectedMonId}
                        selectedRomhack={selectedRomhack}
                        selectedMonId={selectedMonId}
                        baseDexEntry={baseDexEntry}
                        selectedMon={selectedMon}
                    />
                    <AbilityDisplay selectedMon={selectedMon} />
                    <StatDisplay selectedMon={selectedMon} />
                    <EvoDisplay
                        selectedMon={selectedMon}
                        selectedRomhack={selectedRomhack}
                        setSelectedMonId={setSelectedMonId}
                    />
                    <Grid id="moves-container" item xs={12}>
                        <Grid container>
                            <LevelLearnDisplay
                                selectedMon={selectedMon}
                                movesData={selectedRomhack.moves}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default PokemonDisplay;
