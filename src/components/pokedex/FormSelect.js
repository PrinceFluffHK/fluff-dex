import { Grid } from "@mui/material";
import React from "react";

const FormSelect = ({ selectedMonId, setSelectedMonId, baseDexEntry }) => {

    const formBar = baseDexEntry.forms.map((form) => {
        const handleSelect = () => {
            setSelectedMonId(form.id)
        };

        let className = ""
        if (selectedMonId === form.id) {
            className = "center form-sprite-container selected-form"
        } else {
            className = "center form-sprite-container unselected-form"
        }

        return (
            <Grid className={className} onClick={handleSelect} item xs key={form.id}>
                <img
                    className="form-select-sprite"
                    src={form.spriteUrl}
                    alt={`Sprite of ${form.name} (${form.modifier})`}
                />
            </Grid>
        );
    });

    if (baseDexEntry.forms.length === 1) {
        return <></>
    }
    return (
        <Grid container>
            {formBar}
        </Grid>
    )
};

export default FormSelect;
