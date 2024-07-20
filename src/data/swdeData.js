import Romhack from "../models/Romhack";
import typeData from "./vanilla/modernTypes.json";
import speciesEditData from "./SwDE/speciesEdits.json";
import moveEditData from "./SwDE/moveEdits.json";
import regionalDexOrder from "./SwDE/regionalDexOrder.json";
import pokedexEdits from "./SwDE/pokedexEdits.json";
import itemEdits from "./SwDE/itemEdits.json";
import trainerData from "./SwDE/trainers.json";
import shopData from "./SwDE/shops.json";
import locationData from "./SwDE/locations.json";
import tmData from "./SwDE/tms.json";

import swdeCover from "../assets/banners/BoxArtSwDE02.png";

const swde = Romhack.make(
    2,
    8,
    "Sword DE",
    typeData,
    speciesEditData,
    moveEditData,
    [],
    [],
    regionalDexOrder,
    pokedexEdits,
    itemEdits,
    trainerData,
    swdeCover,
    shopData,
    locationData,
    tmData,
    8,
    false
);

export default swde;
