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
import TmMove from "./TmMove";

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
        locations,
        tms,
        spriteId,
        nationalDexBool,
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
        this.trainers = trainers;
        this.trainerClasses = trainerClasses
        this.shops = shops;
        this.locations = locations;
        this.tms = tms
        this.spriteId = spriteId
        this.nationalDexBool = nationalDexBool
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
        trainerData,
        thumbnail,
        shopData,
        locationData,
        tmData,
        spriteId,
        nationalDexBool
    ) {
        // console.error(title, nationalDexBool)
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

        const tms = TmMove.makeArray(tmData, items, moves)
        console.warn("HELLO FROM TMS")
        const species = Pokemon.makeArray(
            Help.editSpecies(Help.filterByGen(speciesData, gen), speciesEdits),
            types,
            abilities,
            moves,
            tutorMoves,
            tms
        );

        const regionalDex = Pokedex.makeRegionalDex(
            regionalDexOrder,
            Help.insertEdits(pokedex, pokedexEdits),
            species
        );

        let nationalDex = []
        if (nationalDexBool) {
            nationalDex = Pokedex.makeNationalDex(
                Help.insertEdits(pokedex, pokedexEdits),
                species,
                gen
            );
        } else if (!nationalDexBool) {
            nationalDex = regionalDex
        }

        const trainerClasses = TrainerClass.makeArray();
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
            locations,
            tms,
            spriteId,
            nationalDexBool
        );
    }
}

export default Romhack;
