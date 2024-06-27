import React from "react";
import { Link, useParams } from "react-router-dom";
import Help from "../../models/Help";
import { romhackList } from "../Homepage";
import { Grid } from "@mui/material";
import TopBar from "../navigation/TopBar";
import MoveListHeader from "./MoveListHeader";

const MoveList = (props) => {
    let { id } = useParams();
    id = parseInt(id);
    const selectedRomhack = Help.findInArray(id, romhackList);

    const moveList = selectedRomhack.moves.map((move, index) => {
        let bgColor = "white";
        if (index % 2) {
            bgColor = "lightcyan";
        }
        if (index > 0) {
            return (
                <div
                    // className="width-80"
                    className="list-padding"
                    key={index}
                    style={{ backgroundColor: bgColor }}
                >
                    <Link
                        to={`/${id}/moves/${move.id}`}
                        className="suppress-link"
                    >
                        <Grid
                            container
                            columnSpacing={1}
                            className="align-center"
                        >
                            <Grid item xs={1.5} sm={1} md={0.5}>
                                <b>{move.id}.</b>
                            </Grid>
                            <Grid item xs={5} sm={4} md={3}>
                                <b>{move.name}</b>
                            </Grid>
                            <Grid
                                id="stats"
                                className="invis-sm center"
                                item
                                xs
                            >
                                <Grid container>
                                    <Grid item md>
                                        <b>{move.bp}</b>
                                    </Grid>
                                    <Grid item md>
                                        <b>{move.acc}</b>
                                    </Grid>
                                    <Grid item md>
                                        <b>{move.pp}</b>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                id="target"
                                className="invis-md"
                                item
                                xs
                            ></Grid>
                            <Grid id="category" className="center" item xs={3}>
                                {move.category.display({
                                    height: "2rem",
                                    width: "auto",
                                    margin: "3px 0 3px 0",
                                })}
                            </Grid>
                            <Grid
                                id="type"
                                className="justify-center"
                                item
                                xs={2.5}
                            >
                                <div>
                                    {move.type.displayBanner(
                                        { height: "1.5rem", width: "4.35rem" },
                                        {}
                                    )}
                                </div>
                            </Grid>
                        </Grid>
                    </Link>
                </div>
            );
        }
        return <></>
    });

    return (
        <div>
            <TopBar />
            <div className="content-container">
                <div className="body-container">
                    <MoveListHeader />
                    <div style={{ paddingTop: "3rem" }}>{moveList}</div>
                </div>
            </div>
        </div>
    );
};

export default MoveList;
