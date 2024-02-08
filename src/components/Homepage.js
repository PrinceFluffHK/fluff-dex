import React from "react";
import * as romhacks from "../data/romhacks"

const Homepage = (props) => {
    return(
        <div>
            {romhacks.b2de.displayTall()}
        </div>
    )
}

export default Homepage