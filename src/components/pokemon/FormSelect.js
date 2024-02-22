import { Grid } from "@mui/material";
import React from "react";

const FormSelect = ({ selectedMonId, setSelectedMonId, baseDexEntry }) => {
    const formBar = baseDexEntry.forms.map((form, index) => {
        const handleSelect = () => {
            setSelectedMonId(form.id);
        };
        let className = "";
        if (selectedMonId === form.id) {
            className = `center form-sprite-container selected-form`;
        } else {
            className = `center form-sprite-container unselected-form`;
        }

        return (
            <Grid onClick={handleSelect} item xs key={form.id}>
                <div className={className}>
                    <img
                        className="form-select-sprite"
                        src={form.spriteUrl}
                        alt={`Sprite of ${form.name} (${form.modifier})`}
                    />
                </div>
            </Grid>
        );
    });

    if (baseDexEntry.forms.length === 1) {
        return <></>;
    }
    return (
        <Grid
            style={{ width: "90%" }}
            container
            className="align-center"
        >
            {formBar}
        </Grid>
    );
};

export default FormSelect;
