import Romhack from "../models/Romhack";

import B2DEEncounters from "../components/B2DE/Encounters";
import B2DEItems from "../components/B2DE/Items";
import NavPage from "../components/B2DE/NavPage";
import B2DEPokedex from "../components/B2DE/Pokedex";
import B2DETrainer from "../components/B2DE/Trainers";

export const b2de = new Romhack(
    "Black 2: DE",
    "b2de",
    "",
    NavPage,
    B2DEPokedex,
    B2DETrainer,
    B2DEItems,
    B2DEEncounters,
    
);
