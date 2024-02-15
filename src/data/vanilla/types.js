import gen1TypesData from "./gen1Types.json"
import oldGenTypesData from "./oldGenTypes.json"
import modernTypesData from "./modernTypes.json"
import Type from "../../models/Type"

export const gen1Types = Type.makeArray(gen1TypesData) 
export const oldGenTypes = Type.makeArray(oldGenTypesData) 
export const modernTypes = Type.makeArray(modernTypesData) 