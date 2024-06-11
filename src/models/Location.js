import Collectible from "./Collectible";
import Encounter from "./Encounter";
import Help from "./Help";
import Shop from "./Shop";

class Location {
    constructor(
        id,
        name,
        trainers,
        encounters,
        collectibles,
        shops,
        subLocations
    ) {
        this.id = id;
        this.name = name;
        this.trainers = trainers;
        this.encounters = encounters;
        this.collectibles = collectibles;
        this.shops = shops;
        this.subLocations = subLocations;
    }

    static makeSingle(locationObj, trainers, species, items, shops) {
        const locTrainers = locationObj.trainers
            ? locationObj.trainers.map((trainerId) => {
                  return Help.findInArray(trainerId, trainers);
              })
            : [];
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
            locationObj.id,
            locationObj.name,
            locTrainers,
            locEncounters,
            locCollectibles,
            locShops,
            locSubLocations
        );
    }

    static makeArray(locObjArray, trainers, species, items, shops) {
        return locObjArray.map((locObj) => {
            return Location.makeSingle(locObj, trainers, species, items, shops);
        });
    }

}

export default Location;
