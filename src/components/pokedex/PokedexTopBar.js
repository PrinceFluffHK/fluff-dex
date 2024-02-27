import { Grid } from "@mui/material";
import React from "react";

const PokedexTopBar = ({ dexType, setDexType }) => {
    const handleRegional = () => {
        setDexType(0);
    };
    const handleNational = () => {
        setDexType(1);
    };

    let regionalClass = "center dex-type-selected";
    let nationalClass = "center dex-type-unselected";
    if (dexType === 1) {
        regionalClass = "center dex-type-unselected";
        nationalClass = "center dex-type-selected";
    }

    return (
        <div className="top-bar-padding dex-type-select-container">
            <Grid container>
                <Grid
                    className={regionalClass}
                    item
                    xs
                    style={{
                        borderRight: "2px solid black",
                    }}
                    onClick={handleRegional}
                >
                    <h2>Regional</h2>
                </Grid>
                <Grid
                    className={nationalClass}
                    item
                    xs
                    style={{
                        borderLeft: "2px solid black",
                    }}
                    onClick={handleNational}
                >
                    <h2>National</h2>
                </Grid>
            </Grid>
            <div
                className="list-padding"
                style={{ backgroundColor: "white" }}
            >
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
                            <Grid item xs lg={4} className="center invis-xs">
                                <h2>Type(s)</h2>
                            </Grid>
                            <Grid item xs={1} className="invis-md"/>
                            <Grid item xs={6} className="align-center justify-between invis-md">
                                <h2 >Ability 1</h2>
                                <h2 >Ability 2</h2>
                                <h2 style={{ margin: "0 .3rem 0 .5rem"}}>Hidden</h2>
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
