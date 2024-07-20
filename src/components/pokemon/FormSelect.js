import { Grid } from "@mui/material";
import { React } from "react";
import { Link } from "react-router-dom";

const FormSelect = ({ selectedMonId, baseDexEntry, selectedRomhack }) => {
    const formBar = baseDexEntry.forms.map((form, index) => {
        let className = "";
        if (selectedMonId === form.id) {
            className = `center form-sprite-container selected-form`;
        } else {
            className = `center form-sprite-container unselected-form`;
        }

        return (
            <Grid item xs key={form.id}>
                <Link
                    to={`/${selectedRomhack.id}/pokemon/${baseDexEntry.id}/${index}`}
                    key={index}
                >
                    <div className={className}>
                        <img
                            className="form-select-sprite"
                            src={form.spriteUrl}
                            alt={`Sprite of ${form.name} (${form.modifier})`}
                        />
                    </div>
                </Link>
            </Grid>
        );
    });

    if (baseDexEntry.forms.length === 1) {
        return <></>;
    }
    return (
        <Grid style={{ width: "90%" }} container className="align-center">
            {formBar}
        </Grid>
    );
};

export default FormSelect;
