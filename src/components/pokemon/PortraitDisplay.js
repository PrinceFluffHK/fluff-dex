import React from "react";
import { Grid } from "@mui/material";
import FormSelect from "./FormSelect";

const PortraitDisplay = ({ selectedRomhack, selectedMonId, baseDexEntry, selectedMon }) => {
    return (
        <Grid
            className="center top-1 width-100"
            item
            xs={12}
            md={6}
            style={{ flexDirection: "column" }}
        >
            <div className="portrait-container">
                <img
                    className="display-portrait"
                    src={selectedMon.profileUrl}
                    alt={selectedMon.name}
                />
            </div>
            <FormSelect
                selectedRomhack={selectedRomhack}
                selectedMonId={selectedMonId}
                baseDexEntry={baseDexEntry}
            />
        </Grid>
    );
};

export default PortraitDisplay;
