import Help from "./Help"

class Encounter {
    constructor(pokemon, percent, minLv, maxLv) {
        this.pokemon = pokemon
        this.percent = percent
        this.minLv = minLv
        this.maxLv = maxLv
    }

    static makeSingle(encMonObj, species) {
        const mon = Help.findInArray(encMonObj.pokemonId, species)
        return new Encounter(mon, encMonObj.percent, encMonObj.minLv, encMonObj.maxLv)
    }

    static makeTable(encTableObj, species) {
        const newMons = encTableObj.pokemon.map(encMonObj => {
            return Encounter.makeSingle(encMonObj, species)
        })
        return {
            ...encTableObj,
            pokemon: newMons
        }
    }

    static makeSheet(encObjArray, species) {
        return encObjArray.map(encTableObj => {
            return Encounter.makeTable(encTableObj, species)
        })
    }

    static getColor(tableType) {
        switch(tableType) {
            case "Grass":
                return "#b7d7a8"
            case "Dark Grass":
                return "#92c47c"
            case "Rustling Grass":
                return "#92c47c"
            case "Fishing":
                return "#c8daf9"
            case "Rippling Water":
                return "#c8daf9"
            default: 
                return "white"
        }
    }
}

export default Encounter