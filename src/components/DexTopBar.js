import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const DexTopBar = ({
    selectedIndex,
    setSelectedIndex,
    setSelectedMon,
    pokedex,
}) => {
    const nextMon = pokedex[selectedIndex + 1];
    const lastMon = pokedex[selectedIndex - 1];

    const incrementUp = () => {
        setSelectedIndex(selectedIndex + 1);
        setSelectedMon(pokedex[selectedIndex + 1]);
    };

    const incrementDown = () => {
        setSelectedIndex(selectedIndex - 1);
        setSelectedMon(pokedex[selectedIndex - 1]);
    };

    const returnToDex = () => {
        setSelectedIndex(-1);
    };

    const IncrementUpButton = () => {
        return (
            <div className="increment-container" onClick={incrementUp}>
                <img src={nextMon.sprite} alt="next pokemon" />
                <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "white" }}
                    size="2xl"
                />
            </div>
        );
    };
    const IncrementDownButton = () => {
        return (
            <div className="increment-container" onClick={incrementDown}>
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ color: "white" }}
                    size="2xl"
                />
                <img src={lastMon.sprite} alt="previous pokemon" />
            </div>
        );
    };

    const BackToDex = (props) => {
        return <div onClick={returnToDex}>Back to Dex</div>;
    };

    return (
        <div className="dex-top-bar">
            <IncrementDownButton />
            <BackToDex />
            <IncrementUpButton />
        </div>
    );
};

export default DexTopBar;
