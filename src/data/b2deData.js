import Romhack from "../models/Romhack";

import oldGenTypesData from "./vanilla/oldGenTypes.json";
import speciesEditData from "./B2DE/speciesEdits.json"
import moveEditData from "./B2DE/moveEdits.json";
import tutorData from "./B2DE/tutors.json";
import tutorMoveData from "./B2DE/tutorMoves.json";
import regionalDexOrder from "./B2DE/regionalDexOrder.json";
import pokedexEdits from "./B2DE/pokedexEdits.json";
import itemEdits from "./B2DE/itemEdits.json";

const b2de = Romhack.make(
    5,
    "Black 2: DE",
    oldGenTypesData,
    speciesEditData,
    moveEditData,
    tutorData,
    tutorMoveData,
    regionalDexOrder,
    pokedexEdits,
    itemEdits
);

export default b2de;
