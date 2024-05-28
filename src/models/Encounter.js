import Help from "./Help"

class Encounter {
    constructor(pokemon, percent, minLv, maxLv) {
        this.pokemon = pokemon
        this.percent = percent
        this.minLv = minLv
        this.maxLv = maxLv
    }

    static makeSingle(encObj, species) {
        const mon = Help.findInArray(encObj.pokemon, species)
        return {
            ...encObj,
            pokemon: mon
        }
    }

    static makeSheet(encObjArray, species) {
        return encObjArray.map(encObj => {
            return Encounter.makeSingle(encObj, species)
        })
    }
}

export default Encounter