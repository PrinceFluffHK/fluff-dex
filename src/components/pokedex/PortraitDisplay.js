import React from "react";
import { Grid } from "@mui/material";
import FormSelect from "./FormSelect";

const PortraitDisplay = ({ selectedRomhack, selectedMonId, setSelectedMonId, baseDexEntry, selectedMon }) => {
    return (
        <Grid
            className="center top-1 width-100"
            item
            xs={12}
            sm={6}
            style={{ flexDirection: "column" }}
        >
            <div className="portrait-container">
                <img
                    className="display-portrait"
                    src={selectedMon.profileUrl}
                    alt={selectedMon.name}
                />
                {/* <h1>#{baseDexEntry.id}</h1> */}
            </div>

            <FormSelect
                setSelectedMonId={setSelectedMonId}
                selectedRomhack={selectedRomhack}
                selectedMonId={selectedMonId}
                baseDexEntry={baseDexEntry}
            />
        </Grid>
    );
};

export default PortraitDisplay;
