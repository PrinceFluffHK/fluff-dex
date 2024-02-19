import { Grid } from "@mui/material";
import React from "react";
import Help from "../../models/Help";
import PokemonDisplayTopBar from "./PokemonDisplayTopBar";
import AbilityDisplay from "./AbilityDisplay";
import FormSelect from "./FormSelect";
import DexEntry from "../../models/DexEntry";
import PortraitDisplay from "./PortraitDisplay";
import StatDisplay from "./StatDisplay";

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
    const baseDexEntry = DexEntry.findFromForm(
        selectedMonId,
        selectedRomhack.nationalDex.dexArray
    );

    return (
        <div>
            <PokemonDisplayTopBar
                selectedMonId={selectedMonId}
                setSelectedMonId={setSelectedMonId}
                selectedRomhack={selectedRomhack}
                dexType={dexType}
            />
            <FormSelect
                selectedRomhack={selectedRomhack}
                selectedMonId={selectedMonId}
                setSelectedMonId={setSelectedMonId}
                baseDexEntry={baseDexEntry}
            />

            <Grid className="display-scroll" container spacing={0}>
                <PortraitDisplay
                    baseDexEntry={baseDexEntry}
                    selectedMon={selectedMon}
                />
                <AbilityDisplay selectedMon={selectedMon} />
                <StatDisplay
                    selectedMon={selectedMon}
                />
            </Grid>
        </div>
    );
};

export default PokemonDisplay;
