import Type from "../../models/Type"

export let normal = new Type(1, "normal", [], [6, 9], [8])
export let fighting = new Type(2, "fighting", [1, 6, 9, 15, 17], [3, 4, 7, 14, 18], [8])
export let flying = new Type(3, "flying", [2, 7, 12], [6, 9, 13], [])
export let poison = new Type(4, "poison", [12, 18], [4, 5, 6, 8], [9])
export let ground = new Type(5, "ground", [4, 6, 9, 10, 13], [7, 12], [3])
export let rock = new Type(6, "rock", [3, 7, 10, 15], [2, 5, 9], [])
export let bug = new Type(7, "bug", [12, 14, 17], [2, 3, 4, 8, 9, 10, 18], [])
export let ghost = new Type(8, "flying", [8, 14], [17], [1])
export let steel = new Type(9, "steel", [6, 15, 18], [9, 10, 12, 13], [])
export let fire = new Type(10, "fire", [9, 12, 15], [6, 10, 11, 16], [])
export let water = new Type(11, "water", [5, 6, 10], [11, 12, 16], [])
export let grass = new Type(12, "grass", [5, 6, 11], [3, 4, 7, 9, 10, 12, 16], [])
export let electric = new Type(13, "electric", [3, 11, ], [12, 16], [5])
export let psychic = new Type(14, "psychic", [2, 4], [9, 14], [17])
export let ice = new Type(15, "ice", [3, 5, 12, 16], [9, 10, 15], [])
export let dragon = new Type(16, "dragon", [16], [9], [18])
export let dark = new Type(17, "dark", [8, 14], [2, 17, 18], [])
export let fairy = new Type(18, "fairy", [2, 16, 17], [4, 9, 10], [])

export const types = [
    normal, 
    fighting, 
    flying, 
    poison, 
    ground, 
    rock, 
    bug, 
    ghost, 
    steel, 
    fire, 
    water, 
    grass, 
    electric, 
    psychic, 
    ice, 
    dragon, 
    dark, 
    fairy, 
]