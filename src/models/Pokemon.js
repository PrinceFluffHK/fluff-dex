import { gen3Abilities } from "../data/vanilla/abilities";
import { vanillaTypes } from "../data/vanilla/types";

const { noAbility } = gen3Abilities;
const { noType } = vanillaTypes;

class Pokemon {
    constructor(
        natNum,
        name,
        type1,
        type2,
        ability1,
        ability2,
        abilityH,
        hp = 0,
        atk = 0,
        def = 0,
        spa = 0,
        spd = 0,
        spe = 0,
        levelLearn = [],
        tmLearn = [],
        tutorLearn = [],
        modifier = ""
    ) {
        this.natNum = natNum;
        this.regionNum = 0;
        this.name = name;
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
        this.levelLearn = levelLearn;
        this.tmLearn = tmLearn;
        this.tutorLearn = tutorLearn;
        this.modifier = modifier;
    }

    addRegional(regionNum, levelLearn, tmLearn, tutorLearn) {
        const newMon = new Pokemon(
            this.natNum,
            regionNum,
            this.name,
            this.type1,
            this.type2,
            this.ability1,
            this.ability2,
            this.abilityH,
            this.hp,
            this.atk,
            this.def,
            this.spa,
            this.spd,
            this.spe,
            levelLearn,
            tmLearn,
            tutorLearn,
            this.modifier
        );
        return newMon;
    }

    static makeEdits(mon, changes) {
        const newMon = { ...mon, ...changes };
        return [
            newMon.natNum,
            // newMon.regionNum,
            newMon.name,
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
            newMon.levelLearn,
            newMon.tmLearn,
            newMon.tutorLearn,
            newMon.modifier,
        ];
    }
}

export default Pokemon;
