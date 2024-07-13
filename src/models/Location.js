import Battle from "./Battle";
import Collectible from "./Collectible";
import Encounter from "./Encounter";
import Help from "./Help";

class Location {
    constructor(
        name,
        trainers,
        encounters,
        collectibles,
        shops,
        subLocations,
    ) {
        this.name = name;
        this.trainers = trainers;
        this.encounters = encounters;
        this.collectibles = collectibles;
        this.shops = shops;
        this.subLocations = subLocations;
    }

    static makeSingle(locationObj, trainers, species, items, shops) {
        const locTrainers = locationObj.trainers
            ? locationObj.trainers.map((battleObj) => {
                // console.log(battleObj.opponent)
                if (typeof battleObj.opponent == "object") {
                    // console.log(battleObj)
                    const newOpponents = battleObj.opponent.map((trainerId) => {
                        return Help.findInArray(trainerId, trainers)
                    })
                    const partner = Help.findInArray(battleObj.partner, trainers)
                    const newBattle = new Battle(battleObj.battleType, newOpponents, partner, battleObj.notes)
                    return newBattle
                }
                const newOpponent = Help.findInArray(battleObj.opponent, trainers)
                return new Battle(battleObj.battleType, newOpponent, battleObj.partner, battleObj.notes)
            })
            : [];
        // console.log(locationObj.name, locTrainers);

        const locEncounters = locationObj.encounters
            ? Encounter.makeSheet(locationObj.encounters, species)
            : [];

        const locCollectibles = locationObj.collectibles
            ? Collectible.makeArray(locationObj.collectibles, items)
            : [];

        const locShops = locationObj.shops
            ? locationObj.shops.map((shopId) => {
                  return Help.findInArray(shopId, shops);
              })
            : [];

        const locSubLocations = locationObj.subLocations
            ? Location.makeArray(
                  locationObj.subLocations,
                  trainers,
                  species,
                  items,
                  shops
              )
            : [];

        return new Location(
            locationObj.name,
            locTrainers,
            locEncounters,
            locCollectibles,
            locShops,
            locSubLocations,

        );
    }

    static makeArray(locObjArray, trainers, species, items, shops) {
        return locObjArray.map((locObj) => {
            return Location.makeSingle(locObj, trainers, species, items, shops);
        });
    }
}

export default Location;
