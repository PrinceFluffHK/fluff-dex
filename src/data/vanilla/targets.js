import Target from "../../models/Target";

export const adjacent = new Target(1, "Any adjacent Pokemon");
export const adjacentFoe = new Target(2, "Any adjacent foe Pokemon");
export const anyPokemon = new Target(3, "Any Pokemon");
export const userAdjacentAlly = new Target(4, "The user or an adjacent ally");
export const allAdjacentFoes = new Target(5, "All adjacent foes");
export const allAdjacent = new Target(6, "All adjacent Pokemon");
export const allAllies = new Target(7, "All allies");
export const allFoes = new Target(8, "All foes");
export const allPokemon = new Target(9, "All Pokemon");
export const adjacentAlly = new Target(10, "One adjacent ally");
export const user = new Target(11, "The user");
export const userAllAllies = new Target(12, "The user and all allies");
export const randomAdjacentFoe = new Target(13, "Random adjacent foe");
