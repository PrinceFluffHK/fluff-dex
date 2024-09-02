import React from "react";
import { Link, useParams } from "react-router-dom";
import TopBar from "../navigation/TopBar";
import { Grid } from "@mui/material";
import { romhackList } from "../Homepage";
import Help from "../../models/Help";
import TeamDisplay from "./TeamDisplay";

const TrainerList = (props) => {
    let { id } = useParams();
    id = parseInt(id);
    const selectedRomhack = Help.findInArray(id, romhackList);

    const trainerList = selectedRomhack.trainers.map((trainer, index) => {
        if (index > 0) {
            let bgColor = "lightcyan";
            if (index % 2) {
                bgColor = "white";
            }
            return (
                <Link
                    className="suppress-link"
                    to={`${trainer.id}`}
                    key={index}
                >
                    <Grid
                        className="list-padding"
                        style={{ backgroundColor: bgColor }}
                        container
                        key={trainer.id}
                    >
                        <Grid
                            className="align-center justify-left"
                            item
                            xs={2}
                            sm={1.5}
                            md={1}
                        >
                            #{trainer.id}.
                        </Grid>
                        <Grid className="align-center" item xs>
                            <h3>
                                {trainer.trainerClass.name} {trainer.name}
                            </h3>
                        </Grid>
                        <Grid className="center" item xs={2}>
                                <img
                                    src={`/trainerClasses/${trainer.trainerClass.id}-${selectedRomhack.spriteId}.png`}
                                    alt={`Sprite of the ${trainer.trainerClass.name} Trainer Class`}
                                    style={{ height: "6rem" }}
                                />
                        </Grid>
                        <Grid className="invis-xs" item sm={6}>
                            <TeamDisplay
                                selectedTrainer={trainer}
                                styleObj={{}}
                                gridSizes={{
                                    xs: 4,
                                    sm: 4,
                                    md: 4,
                                    lg: 2,
                                    xl: 2,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Link>
            );
        }
        return <div key={index} />;
    });

    return (
        <div>
            <TopBar />
            <div className="content-container">
                <div className="body-container">
                    <div>{trainerList}</div>
                </div>
            </div>
        </div>
    );
};

export default TrainerList;
