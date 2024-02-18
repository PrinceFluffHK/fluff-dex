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

    static makeSingle(species, typesArray, abilitiesArray, movesArray, tutorsArray, itemsArray) {
        const type1 = Help.findInArray(species.type1, typesArray);
        const type2 = Help.findInArray(species.type2, typesArray);
        const ability1 = Help.findInArray(species.ability1, abilitiesArray);
        const ability2 = Help.findInArray(species.ability2, abilitiesArray);
        const abilityH = Help.findInArray(species.abilityH, abilitiesArray);
        const levelLearn = LevelLearnMove.makeArray(
            species.levelLearn,
            movesArray
        );
        const tutorLearn = TutorMove.makeArray(
            species.tutorLearn,
            movesArray,
            tutorsArray
        );
        const tmLearn = TmMove.makeArray([], itemsArray, movesArray)
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
            tutorLearn,
        );
    }

    static makeArray(speciesObjArray, typesArray, abilitiesArray, movesArray, tutorsArray, itemsArray) {
        return speciesObjArray.map((mon) => {
            return Pokemon.makeSingle(mon, typesArray, abilitiesArray, movesArray, tutorsArray, itemsArray)
        });
    }
}

export default Pokemon;
