import Encounter from "./Encounter";
import Help from "./Help";

class Location {
    constructor(id, name, trainers, encounterTables, collectibles, shops, subLocations) {
        this.id = id;
        this.name = name;
        this.trainers = trainers;
        this.encounterTables = encounterTables;
        this.collectibles = collectibles;
        this.shops = shops
        this.subLocations = subLocations;
    }

    static makeSingle(locationObj, trainers, species, items, shops, index) {
        const locTrainers = locationObj.trainers.map(trainerId => {
            return Help.findInArray(trainerId, trainers)
        })
        const locEncounterTables = Encounter.makeSheet(locationObj.encounterTables, species)
        
        // const locCollectibles = 

        return new Location(locationObj.id, locationObj.name, locTrainers, locEncounterTables)
    }

    static makeArray(locObjArray, trainers, items, shops) {

    }


}

export default Location;
