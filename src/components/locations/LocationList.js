import React from "react";
import TopBar from "../navigation/TopBar";
import { Link, useParams } from "react-router-dom";
import { romhackList } from "../Homepage";
import Help from "../../models/Help";
import LocationPage from "./LocationPage";

const LocationList = (props) => {
    let { id } = useParams();
    id = parseInt(id);
    const selectedRomhack = Help.findInArray(id, romhackList);
    console.log(selectedRomhack);

    const locationList = selectedRomhack.locations.map((location, index) => {
        return (
            <div className="center" key={index}>
                <LocationPage location={location} id={id}/>
            </div>
        );
    });

    return (
        <div>
            <TopBar />
            <div className="content-container">
                <div className="body-container">{locationList}</div>
            </div>
        </div>
    );
};

export default LocationList;
