import React from "react";
import { useParams } from "react-router-dom";
import Help from "../../models/Help";
import { romhackList } from "../Homepage";
import TopBar from "../navigation/TopBar";
import FullTeamDisplay from "./FullTeamDisplay";

const TrainerDisplay = (props) => {
    let { id, trainerId } = useParams();
    id = parseInt(id);
    trainerId = parseInt(trainerId);

    const selectedRomhack = Help.findInArray(id, romhackList);
    const thisTrainer = Help.findInArray(trainerId, selectedRomhack.trainers);

    return (
        <div className="">
            <TopBar />
            <div className="top-bar-padding">
                <h1 className="text-center">
                    {thisTrainer.trainerClass.name} {thisTrainer.name}
                </h1>
                <h3 className="text-center" style={{ color: "gray"}}>{thisTrainer.notes}</h3>
                {/* <div className="lead-window">
                    <div className="oval-left">
                        <div className="lead-mon-container">
                            <img
                                className="lead-mon-sprite"
                                src={thisTrainer.team[0].pokemon.spriteUrl}
                                alt={`Sprite of ${thisTrainer.team[0].pokemon.name}`}
                            />
                        </div>
                    </div>
                    <div className="pokemon-oval" />
                    <img
                        className="lead-window-trainer"
                        src={thisTrainer.trainerClass.sprite}
                    />
                </div> */}
            </div>
            <FullTeamDisplay thisTrainer={thisTrainer} id={id} />
        </div>
    );
};

export default TrainerDisplay;
