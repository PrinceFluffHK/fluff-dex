import { Button, Tooltip } from "@mui/material";
import React from "react";

const AbilityDisplay = ({ selectedMon }) => {
    return (
        <div className="ability-container">
            <div className="">
                <h3>
                    Ability 1: {selectedMon.ability1.name}
                    {/* <Tooltip title={selectedMon.ability1.description} placement="right" arrow>
                        <Button>
                            {selectedMon.ability1.name}
                        </Button>
                    </Tooltip> */}
                </h3>
                <p>{selectedMon.ability1.description}</p>
            </div>
            <div>
                <div>
                    <h3>
                        Ability 2: {selectedMon.ability2.name}
                        {/* <Tooltip title={"Ability 2"} placement="right" arrow>
                            <Button> */}
                        {/* </Button>
                        </Tooltip> */}
                    </h3>
                    <p>{selectedMon.ability2.description}</p>
                </div>
                <p>
                    {selectedMon.ability2.id === 0
                        ? ""
                        : selectedMon.ability2.description}
                </p>
            </div>
            <div>
                <h3>
                    {" "}
                    Hidden Ability: {selectedMon.abilityH.name}
                    {/* {selectedMon.abilityH.id === 0
                        ? ""
                        : selectedMon.abilityH.name} */}
                </h3>
                <p>{selectedMon.abilityH.description}</p>
            </div>
        </div>
    );
};

export default AbilityDisplay;
