import React from "react";
import * as pokemon from '../data/vanilla/pokemon'
import B2DEPokedex from "./B2DE/Pokedex";
import NavItem from "../models/NavItem";
// console.log(pokemon.bulbasaur)

const b2deLink = new NavItem("", "b2de", "Black 2 DE")

const Homepage = (props) => {
    return(
        <div>
            {b2deLink.displayTall()}
            Hi :3
        </div>
    )
}

export default Homepage