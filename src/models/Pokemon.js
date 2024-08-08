import React from "react";
import Help from "./Help";
import LevelLearnMove from "./LevelLearnMove";
import TmMove from "./TmMove";
import TutorMove from "./TutorMove";

class Pokemon {
    constructor(
        id,
        name,
        gen,
        type1,
        type2,
        ability1,
        ability2,
        abilityH,
        hp,
        atk,
        def,
        spa,
        spd,
        spe,
        modifier = "",
        evoTo = [],
        evoFromId,
        levelLearn = [],
        tmLearn = [],
        tutorLearn = []
        // spriteUrl,
        // profileUrl,
    ) {
        this.id = id;
        this.name = name;
        this.gen = gen;
        this.type1 = type1;
        this.type2 = type2;
        this.ability1 = ability1;
        this.ability2 = ability2;
        this.abilityH = abilityH;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spa = spa;
        this.spd = spd;
        this.spe = spe;
        this.modifier = modifier;
        this.evoTo = evoTo;
        this.evoFromId = evoFromId;
        this.levelLearn = levelLearn;
        this.tmLearn = tmLearn;
        this.tutorLearn = tutorLearn;
        this.spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        this.profileUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    }

    static makeMon(mon, changes) {
        const newMon = { ...mon, ...changes };
        return new Pokemon(
            newMon.id,
            newMon.name,
            newMon.gen,
            newMon.type1,
            newMon.type2,
            newMon.ability1,
            newMon.ability2,
            newMon.abilityH,
            newMon.hp,
            newMon.atk,
            newMon.def,
            newMon.spa,
            newMon.spd,
            newMon.spe,
            newMon.modifier,
            newMon.spriteUrl,
            newMon.profileUrl,
            newMon.evoTo,
            newMon.evoFromId,
            newMon.levelLearn,
            newMon.tmLearn,
            newMon.tutorLearn
        );
    }

    static makeSingle(
        species,
        typesArray,
        abilitiesArray,
        movesArray,
        tutorsArray,
        tmsArray
    ) {
        const type1 = Help.findInArray(species.type1, typesArray);
        const type2 = Help.findInArray(species.type2, typesArray);
        const ability1 = Help.findInArray(species.ability1, abilitiesArray);
        const ability2 = Help.findInArray(species.ability2, abilitiesArray);
        const abilityH = Help.findInArray(species.abilityH, abilitiesArray);
        const levelLearn = LevelLearnMove.makeArray(
            species.levelLearn,
            movesArray
        );
        const tutorLearn = TutorMove.getTutorMoves(
            species.tutorLearn,
            tutorsArray
        );
        const tmLearn = TmMove.makeTmLearn(
            species.tmLearn,
            tmsArray
        );
        return new Pokemon(
            species.id,
            species.name,
            species.gen,
            type1,
            type2,
            ability1,
            ability2,
            abilityH,
            species.hp,
            species.atk,
            species.def,
            species.spa,
            species.spd,
            species.spe,
            species.modifier,
            species.evoTo,
            species.evoFromId,
            levelLearn,
            tmLearn,
            tutorLearn
        );
    }

    static makeArray(
        speciesObjArray,
        typesArray,
        abilitiesArray,
        movesArray,
        tutorsArray,
        itemsArray
    ) {
        return speciesObjArray.map((mon) => {
            return Pokemon.makeSingle(
                mon,
                typesArray,
                abilitiesArray,
                movesArray,
                tutorsArray,
                itemsArray
            );
        });
    }

    getStat(statIndex, evs, ivs, nature, level) {
        const stats = [
            { statVal: this.hp, statName: "HP" },
            { statVal: this.atk, statName: "Atk" },
            { statVal: this.def, statName: "Def" },
            { statVal: this.spa, statName: "SpA" },
            { statVal: this.spd, statName: "SpD" },
            { statVal: this.spe, statName: "SpE" },
        ];
        const baseStat = stats[statIndex];
        let natureMod = 0;
        if (baseStat.statName === nature.minusStat) {
            natureMod = 0.9;
        }
        if (baseStat.statName === nature.plusStat) {
            natureMod = 1.1;
        }
        let statVal =
            (((2 * baseStat.statVal + ivs + Math.floor(evs / 4)) * level) /
                100 +
                5) *
            natureMod;
        if (statIndex === 0) {
            statVal =
                ((2 * baseStat.statVal + ivs + Math.floor(evs / 4)) * level) /
                    100 +
                level +
                10;
        }

        return {
            statName: baseStat.statName,
            statVal,
        };
    }
}

export default Pokemon;
