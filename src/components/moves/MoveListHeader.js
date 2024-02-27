import { Grid } from "@mui/material";
import React from "react";

const MoveListHeader = (props) => {
    return (
        <div
            className=" top-bar-padding align-center move-top-bar"
        >
            <Grid container columnSpacing={1} className="align-center list-padding" style={{ height: "3rem"}}>
                <Grid item xs={1.5} sm={1} md={0.5}>
                    <b>ID</b>
                </Grid>
                <Grid item xs={5} sm={4} md={3}>
                    <b>Name</b>
                </Grid>
                <Grid id="stats" className="invis-sm center" item xs>
                    <Grid container>
                        <Grid item md>
                            <b>BP</b>
                        </Grid>
                        <Grid item md>
                            <b>Acc.</b>
                        </Grid>
                        <Grid item md>
                            <b>PP</b>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid id="target" className="invis-md" item xs></Grid>
                <Grid id="category" className="justify-center" item xs={3}>
                    <b>Cat.</b>
                </Grid>
                <Grid id="type" className="justify-center" item xs={2.5}>
                    <b>Type</b>
                </Grid>
            </Grid>
        </div>
    );
};

export default MoveListHeader;
