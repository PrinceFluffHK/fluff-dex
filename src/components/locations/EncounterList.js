import React from "react";
import { useParams } from "react-router-dom";
import Help from "../../models/Help";
import { romhackList } from "../Homepage";
import EncounterSheet from "./EncounterSheet";
import TopBar from "../navigation/TopBar";

const EncounterList = (props) => {
    let { id } = useParams();
    id = parseInt(id);
    const selectedRomhack = Help.findInArray(id, romhackList);
    // console.log(selectedRomhack);

    const encounterList = selectedRomhack.locations.map((location, index) => {
        if (index === 0) {
            return <></>
        }
        if (location.encounters.length > 0 || location.subLocations.length > 0) {
            return (
                <EncounterSheet location={location} index={index} key={index} />
            );
        }
        return <></>
    });

    return (
        <div className="">
            <TopBar />
            <div className="content-container">
                <div className="body-container">{encounterList}</div>
            </div>
        </div>
    );
};

export default EncounterList;
