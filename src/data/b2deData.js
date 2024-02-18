import Pokemon from "../models/Pokemon";
import Type from "../models/Type";
import Romhack from "../models/Romhack";
import Ability from "../models/Ability";
import Help from "../models/Help";
import Move from "../models/Move";
import Tutor from "../models/Tutor";
import TutorMove from "../models/TutorMove";
import Item from "../models/Item";

import oldGenTypesData from "./vanilla/oldGenTypes.json";
import abilityData from "./vanilla/abilities.json";
import speciesData from "./vanilla/species.json";
import speciesEdits from "./B2DE/speciesEdits.json"
import moveData from "./vanilla/moves.json";
import dexEntries from "./vanilla/pokedex.json";
import moveEditData from "./B2DE/moveEdits.json";
import tutorData from "./B2DE/tutors.json";
import tutorMoveData from "./B2DE/tutorMoves.json";
import regionalDexOrder from "./B2DE/regionalDexOrder.json";
import pokedexEdits from "./B2DE/pokedexEdits.json";
import itemData from "./vanilla/items.json";
import itemEdits from "./B2DE/itemEdits.json";

import moveTargets from "./vanilla/targets";
import moveCategories from "./vanilla/moveCategories";
import Pokedex from "../models/Pokedex";

const b2deAbilities = Ability.makeArray(Help.filterByGen(abilityData, 5));
const b2deTypes = Type.makeArray(oldGenTypesData);
const b2deMoves = Move.makeArray(
    Help.insertEdits(Help.filterByGen(moveData, 5), moveEditData),
    b2deTypes,
    moveTargets,
    moveCategories
);
const b2deTutors = Tutor.makeArray(tutorData);
const b2deTutorMoves = TutorMove.makeArray(tutorMoveData, b2deMoves, tutorData);
const b2deItems = Item.makeArray(
    Help.insertEdits(Help.filterByGen(itemData, 5), itemEdits)
);

const b2deSpecies = Pokemon.makeArray(
    Help.insertEdits(
        Help.filterByGen(speciesData, 5),
        speciesEdits
    ),
    b2deTypes,
    b2deAbilities,
    b2deMoves,
    b2deTutors,
    b2deItems
);
const b2deNationalDex = Pokedex.makeNationalDex(
    Help.insertEdits(dexEntries, pokedexEdits),
    b2deSpecies,
    5
)
const b2deRegionalDex = Pokedex.makeRegionalDex(
    regionalDexOrder,
    Help.insertEdits(dexEntries, pokedexEdits),
    b2deSpecies
);

const b2de = new Romhack(
    1,
    "Black 2: DE",
    "",
    b2deSpecies,
    b2deNationalDex,
    b2deRegionalDex,
    b2deMoves,
    b2deAbilities,
    b2deTypes,
    b2deTutors,
    b2deTutorMoves
);

export default b2de;
