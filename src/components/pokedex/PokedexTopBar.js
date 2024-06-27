import { Grid } from "@mui/material";
import React from "react";

const PokedexTopBar = () => {
    return (
        <div className="dex-top-bar-container">
            <div className="list-padding" style={{ backgroundColor: "white" }}>
                <Grid container>
                    <Grid item xs={3} sm={2} md={1} className="">
                        <h2>Dex #</h2>
                    </Grid>
                    <Grid id="name" item xs sm={2}>
                        <h2>Name</h2>
                    </Grid>
                    <Grid
                        id="content"
                        item
                        xs
                        className="align-center justify-around"
                    >
                        <Grid container>
                            <Grid
                                item
                                xs
                                lg={4}
                                className="align-center justify-around invis-xs"
                            >
                                <h2>Type 1</h2>
                                <h2>Type 2</h2>
                            </Grid>
                            <Grid item xs={1} className="invis-md" />
                            <Grid
                                item
                                xs={6}
                                className="align-center justify-between invis-md"
                            >
                                <h2>Ability 1</h2>
                                <h2>Ability 2</h2>
                                <h2 style={{ margin: "0 .3rem 0 .5rem" }}>
                                    Hidden
                                </h2>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={1} className="align-center justify-right">
                        <h2>Sprite</h2>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default PokedexTopBar;
