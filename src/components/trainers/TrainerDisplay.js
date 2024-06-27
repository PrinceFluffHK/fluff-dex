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
            <div className="content-container">
                <div className="body-container">
                    <h1 className="text-center">
                        {thisTrainer.trainerClass.name} {thisTrainer.name}
                    </h1>
                    <h3 className="text-center" style={{ color: "gray" }}>
                        {thisTrainer.notes}
                    </h3>
                    <FullTeamDisplay thisTrainer={thisTrainer} id={id} />
                </div>
            </div>
        </div>
    );
};

export default TrainerDisplay;
