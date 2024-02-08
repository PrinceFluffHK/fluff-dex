import evoLines from "../vanilla/evoLines";
import { natDex } from "../vanilla/pokemon";

const {
    mankey,
    primeape,
    cubone,
    marowak,
    
} = natDex

const b2deEvoLines = {
    ...evoLines,
    mankey: { line: [mankey, primeape], lineType: 0 },
    cubone: { line: [cubone, marowak], lineType: 0 },

}