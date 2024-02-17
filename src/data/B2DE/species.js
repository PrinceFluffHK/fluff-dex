import speciesData from "../vanilla/species.json";
import b2deSpeciesEdits from "./speciesEdits.json";
import b2deAbilities from "./abilities";
import b2deTypes from "./types";
import b2deMoves from "./moves";
import LevelLearnMove from "../../models/LevelLearnMove";
import Help from "../../models/Help";
import Pokemon from "../../models/Pokemon";

const b2deSpecies = speciesData.map((speciesJson) => {
    // console.log(speciesJson);
    const editsJson = Help.findInArray(speciesJson.id, b2deSpeciesEdits);
    const newMon = { ...speciesJson, ...editsJson };
    newMon.type1 = Help.findInArray(newMon.type1, b2deTypes);
    newMon.type2 = Help.findInArray(newMon.type2, b2deTypes);
    newMon.ability1 = Help.findInArray(newMon.ability1, b2deAbilities);
    newMon.ability2 = Help.findInArray(newMon.ability2, b2deAbilities);
    newMon.abilityH = Help.findInArray(newMon.abilityH, b2deAbilities);
    if (newMon.levelLearn) {
        newMon.levelLearn = LevelLearnMove.makeArray(
            newMon.levelLearn,
            b2deMoves
        );
    }
    console.log(newMon)
    // console.log(newMon);
    return Pokemon.makeMon(newMon);
});

export default b2deSpecies;
