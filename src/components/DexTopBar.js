import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const DexTopBar = (props) => {
    const IncrementUp = () => {
        return (
            <div className="increment-container">
                <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "white" }}
                    size="2xl"
                />
            </div>
        );
    };
    const IncrementDown = () => {
        return (
            <div className="increment-container">
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ color: "white" }}
                    size="2xl"
                />
            </div>
        );
    };

    return (
        <div className="dex-top-bar">
            <IncrementDown/>
            <div id="return to pokedex"></div>
            {/* <div id="increment up"></div> */}
            <IncrementUp/>
        </div>
    );
};

export default DexTopBar;
