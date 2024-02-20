import React from "react";

const TypeDisplay = ({ type1Banner, type2Banner }) => {
    return (
        <div className="" style={{ width: "100%" }}>
            <div className="center">
                <h1>Types</h1>
            </div>
            <div className="center">
                <div className="justify-around top-1" style={{ width: "90%" }}>
                    {type1Banner}
                    {type2Banner}
                </div>
            </div>
        </div>
    );
};

export default TypeDisplay;
