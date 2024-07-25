import React from "react";
import TopBar from "../navigation/TopBar";
import { useParams } from "react-router-dom";
import { romhackList } from "../Homepage";
import Help from "../../models/Help";
import LocationPage from "./LocationPage";

const LocationList = (props) => {
    let { id } = useParams();
    id = parseInt(id);
    const selectedRomhack = Help.findInArray(id, romhackList);

    const locationList = selectedRomhack.locations.map((location, index) => {
        if (index > 0) {
            return (
                <div className="center" key={index}>
                    <LocationPage location={location} id={id} />
                </div>
            );
        }
        return <div key={index}></div>
    });

    return (
        <div>
            <TopBar />
            <div className="content-container">
                <div className="location-body-container">{locationList}</div>
            </div>
        </div>
    );
};

export default LocationList;
