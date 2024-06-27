import React from "react";

const TypeDisplay = ({ type1Banner, type2Banner }) => {
    return (
        <div className="width-80">
            <div className="">
                <h1>Types</h1>
            </div>
            <div className="center justify-around top-1">
                {type1Banner}
                {type2Banner}
            </div>
        </div>
    );
};

export default TypeDisplay;
