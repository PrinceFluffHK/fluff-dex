import Move from "../../models/Move";
import moveData from "./moves.json";
import { modernTypes } from "./types";
import moveTargets from "./targets";
import moveCategories from "./moveCategories";

const vanillaMoves = Move.makeArray(
    moveData,
    modernTypes,
    moveTargets,
    moveCategories
);

export default vanillaMoves;
