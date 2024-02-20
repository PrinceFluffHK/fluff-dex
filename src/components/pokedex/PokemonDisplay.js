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

const PokemonDisplay = ({ dexType }) => {
    const { id, selectedEntryId, selectedFormIndex } = useParams();

    const selectedRomhack = romhackList[id - 1];

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
    const className = baseDexEntry.forms.length > 1 ? "mon-content" : "";

    return (
        <div>
            <PokemonDisplayTopBar
                selectedMonId={selectedMonId}
                selectedRomhack={selectedRomhack}
                setSelectedMonId={setSelectedMonId}
                dexType={dexType}
            />
            {/* <div className={className}> */}
            {/* <FormSelect
                    setSelectedMonId={setSelectedMonId}
                    selectedRomhack={selectedRomhack}
                    selectedMonId={selectedMonId}
                    baseDexEntry={baseDexEntry}
                /> */}
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
            </Grid>
            {/* </div> */}
        </div>
    );
};

export default PokemonDisplay;
