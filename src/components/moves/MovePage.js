import React from "react";
import { romhackList } from "../Homepage";
import Help from "../../models/Help";
import { useParams } from "react-router-dom";
import TopBar from "../navigation/TopBar";
import { Grid } from "@mui/material";

const MovePage = (props) => {
    let { id, moveId } = useParams();
    id = parseInt(id);
    moveId = parseInt(moveId);
    const selectedRomhack = Help.findInArray(id, romhackList);

    const move = Help.findInArray(moveId, selectedRomhack.moves, true);

    const EffectText = (props) => {
        if (move.effects === "") {
            return (
                <Grid container>
                    <Grid item xs={3}>
                        <h2>Effect</h2>
                    </Grid>
                    <Grid className="justify-center" item xs={6}>
                        <h2>-</h2>
                    </Grid>
                    <Grid className="justify-right" item xs={3}>
                        <h2>None</h2>
                    </Grid>
                </Grid>
            );
        }
        return (
            <div>
                <h2>Effect:</h2>
                <h4>{move.effects}</h4>
            </div>
        );
    };
    const effect = move.effects;
    const noEffect = effect === "" ? "None" : move.effect;

    return (
        <div className="">
            <TopBar />
            <div className="content-container">
                <div className="body-container">
                    <Grid container className="width-100 justify-center">
                        <div className="width-100 center">
                            <h1>{move.name}</h1>
                        </div>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            className="justify-center"
                            style={{ marginTop: "1rem" }}
                        >
                            <div className="width-80">
                                <div className="move-stat-divider" />
                                <Grid container>
                                    <Grid item xs={3}>
                                        <h2>Type</h2>
                                    </Grid>
                                    <Grid
                                        className="justify-center"
                                        item
                                        xs={6}
                                    >
                                        <h2>-</h2>
                                    </Grid>
                                    <Grid className="justify-right" item xs={3}>
                                        <div className="align-center">
                                            {move.type.displayBanner(
                                                { width: "4.5rem" },
                                                { fontSize: "12px" }
                                            )}
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className="move-stat-divider" />
                                <Grid container>
                                    <Grid item xs={3}>
                                        <h2>Cat.</h2>
                                    </Grid>
                                    <Grid
                                        className="justify-center"
                                        item
                                        xs={6}
                                    >
                                        <h2>-</h2>
                                    </Grid>
                                    <Grid className="justify-right" item xs={3}>
                                        <h2>
                                            {move.category.display({
                                                height: "28px",
                                                width: "auto",
                                            })}
                                        </h2>
                                    </Grid>
                                </Grid>
                                <div className="move-stat-divider" />
                                <Grid container>
                                    <Grid item xs={3}>
                                        <h2>BP</h2>
                                    </Grid>
                                    <Grid
                                        className="justify-center"
                                        item
                                        xs={6}
                                    >
                                        <h2>-</h2>
                                    </Grid>
                                    <Grid className="justify-right" item xs={3}>
                                        <h2>{move.bp}</h2>
                                    </Grid>
                                </Grid>
                                <div className="move-stat-divider" />
                                <Grid container>
                                    <Grid item xs={3}>
                                        <h2>Acc</h2>
                                    </Grid>
                                    <Grid
                                        className="justify-center"
                                        item
                                        xs={6}
                                    >
                                        <h2>-</h2>
                                    </Grid>
                                    <Grid className="justify-right" item xs={3}>
                                        <h2>{move.acc}</h2>
                                    </Grid>
                                </Grid>
                                <div className="move-stat-divider" />
                                <Grid container>
                                    <Grid item xs={3}>
                                        <h2>PP</h2>
                                    </Grid>
                                    <Grid
                                        className="justify-center"
                                        item
                                        xs={6}
                                    >
                                        <h2>-</h2>
                                    </Grid>
                                    <Grid className="justify-right" item xs={3}>
                                        <h2>{move.pp}</h2>
                                    </Grid>
                                </Grid>
                                <div className="move-stat-divider" />
                                <EffectText />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default MovePage;
