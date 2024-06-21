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
import TrainerClass from "./TrainerClass";
import Trainer from "./Trainer";
import Shop from "./Shop";
import Location from "./Location";

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
        tutorMoves,
        trainerClasses,
        trainers,
        shops,
        locations
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
        this.trainerClasses = trainerClasses;
        this.trainers = trainers;
        this.shops = shops;
        this.locations = locations
    }

    homeDisplay(index) {
        return (
            <Grid className="center" item xs={12} md={6} lg={4} key={index}>
                <Link to={`/${this.id}/locations`}>
                    <img
                        className="hack-cover drop-shadow"
                        src={this.thumbnailUrl}
                        alt={`Cover art for ${this.title}`}
                    />
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
        itemEdits,
        trainerClassData,
        trainerData,
        thumbnail,
        shopData,
        locationData,
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
            tutorMoves,
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

        const trainerClasses = TrainerClass.makeArray(trainerClassData);
        const trainers = Trainer.makeArray(
            trainerData,
            trainerClasses,
            species,
            abilities,
            items,
            moves
        );

        const shops = Shop.makeArray(shopData, items);

        const locations = Location.makeArray(locationData, trainers, species, items, shops)

        return new Romhack(
            id,
            title,
            thumbnail,
            species,
            nationalDex,
            regionalDex,
            moves,
            abilities,
            types,
            tutors,
            tutorMoves,
            trainerClasses,
            trainers,
            shops,
            locations
        );
    }
}

export default Romhack;
