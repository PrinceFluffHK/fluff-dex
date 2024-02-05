import React from "react";
// import * as pokemon from '../data/vanilla/pokemon'
// import B2DEPokedex from "./B2DE/Pokedex";
// import NavItem from "../models/NavItem";
import * as romhacks from "../data/romhacks"

// console.log(pokemon.bulbasaur)

// const b2deLink = new NavItem("", "b2de", "Black 2 DE")

const Homepage = (props) => {
    return(
        <div>
            {romhacks.b2de.displayTall()}
        </div>
    )
}

export default Homepage