import { Grid } from "@mui/material";
import React from "react";

const TypeDisplay = ({ type1Banner, type2Banner }) => {
    return (
        <div className="justify-around" style={{ width: "90%" }}>
            {type1Banner}
            {type2Banner}
        </div>
    );
};

export default TypeDisplay;
