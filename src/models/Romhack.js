import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import moveTargets from "../data/vanilla/targets";
import moveCategories from "../data/vanilla/moveCategories";
import abilityData from "../data/vanilla/abilities.json";
import speciesData from "../data/vanilla/species.json";
import moveData from "../data/vanilla/moves.json";
import pokedex from "../data/vanilla/pokedex.json";
import itemData from "../data/vanilla/items.json";

import Ability from "./Ability";
import Type from "./Type";
import Move from "./Move";
import Help from "./Help";
import Tutor from "./Tutor";
import TutorMove from "./TutorMove";
import Item from "./Item";
import Pokemon from "./Pokemon";
import Pokedex from "./Pokedex";

class Romhack {
    constructor(
        id,
        name,
        thumbnailUrl,
        species,
        nationalDex,
        regionalDex,
        moves,
        abilities,
        types,
        tutors,
        tutorMoves
    ) {
        this.id = id;
        this.name = name;
        this.thumbnailUrl = thumbnailUrl;
        this.species = species;
        this.nationalDex = nationalDex;
        this.regionalDex = regionalDex;
        this.moves = moves;
        this.abilities = abilities;
        this.types = types;
        this.tutors = tutors;
        this.tutorMoves = tutorMoves;
    }

    navDisplayShort() {
        return (
            <Grid item xs={12} md={6}>
                <Link to={this.link}>
                    <div className="nav-container-short">
                        <div>{this.name}</div>
                    </div>
                </Link>
            </Grid>
        );
    }


    static make(
        id,
        gen,
        title,
        typeData,
        speciesEdits,
        moveEditData,
        tutorData,
        tutorMoveData,
        regionalDexOrder,
        pokedexEdits,
        itemEdits
    ) {
        const abilities = Ability.makeArray(Help.filterByGen(abilityData, gen));
        const types = Type.makeArray(typeData);
        const moves = Move.makeArray(
            Help.insertEdits(Help.filterByGen(moveData, gen), moveEditData),
            types,
            moveTargets,
            moveCategories
        );
        const tutors = Tutor.makeArray(tutorData);
        const tutorMoves = TutorMove.makeArray(tutorMoveData, moves, tutorData);
        const items = Item.makeArray(
            Help.insertEdits(Help.filterByGen(itemData, gen), itemEdits)
        );
        const species = Pokemon.makeArray(
            Help.insertEdits(Help.filterByGen(speciesData, gen), speciesEdits),
            types,
            abilities,
            moves,
            tutors,
            items
        );

        const nationalDex = Pokedex.makeNationalDex(
            Help.insertEdits(pokedex, pokedexEdits),
            species,
            gen
        );
        const regionalDex = Pokedex.makeRegionalDex(
            regionalDexOrder,
            Help.insertEdits(pokedex, pokedexEdits),
            species
        );

        return new Romhack(
            id,
            title,
            "",
            species,
            nationalDex,
            regionalDex,
            moves,
            abilities,
            types,
            tutors,
            tutorMoves
        );
    }
}

export default Romhack;
