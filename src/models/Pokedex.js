import DexEntry from "./DexEntry";
import Help from "./Help";

class Pokedex {
    constructor(dexArray) {
        this.dexArray = dexArray;
    }

    static makeRegionalDex(orderArray, dexObjArray, speciesArray) {
        const orderedDex = orderArray.map((monId) => {
            return Help.findInArray(monId, dexObjArray);
        });
        return new Pokedex(
            orderedDex.map((dexEntry, index) => {
                return DexEntry.makeSingle(dexEntry, speciesArray, index);
            })
        );
    }

    static makeNationalDex(dexObjArray, speciesArray, gen) {
        const trimmedDex = dexObjArray.filter((dexEntry) => {
            return Help.getDexSize(gen) >= dexEntry.forms[0];
        });
        return new Pokedex(
            trimmedDex.map((dexEntry, index) => {
                return DexEntry.makeSingle(dexEntry, speciesArray, index);
            })
        );
    }

    static filterByGen(dexArray, gen) {
        return dexArray.filter((dexEntry) => {
            return dexEntry.forms[0].gen <= gen;
        });
    }


    static getBaseForm(mon, speciesData) {
        if (mon.evoFromId === 0) {
            return mon;
        }
        const prevMon = Help.findInArray(mon.evoFromId, speciesData);
        return this.getBaseForm(prevMon, speciesData);
    };
}

export default Pokedex;
