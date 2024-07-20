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
        tutors,
        subLocations
    ) {
        this.name = name;
        this.trainers = trainers;
        this.encounters = encounters;
        this.collectibles = collectibles;
        this.shops = shops;
        this.tutors = tutors;
        this.subLocations = subLocations;
    }

    static makeSingle(locationObj, trainers, species, items, shops, tutors) {
        const locTrainers = locationObj.trainers
            ? locationObj.trainers.map((battleObj) => {
                  if (typeof battleObj.opponent == "object") {
                      const newOpponents = battleObj.opponent.map(
                          (trainerId) => {
                              return Help.findInArray(trainerId, trainers);
                          }
                      );
                      const partner = Help.findInArray(
                          battleObj.partner,
                          trainers
                      );
                      const newBattle = new Battle(
                          battleObj.battleType,
                          newOpponents,
                          partner,
                          battleObj.notes
                      );
                      return newBattle;
                  }
                  const newOpponent = Help.findInArray(
                      battleObj.opponent,
                      trainers
                  );
                  return new Battle(
                      battleObj.battleType,
                      newOpponent,
                      battleObj.partner,
                      battleObj.notes
                  );
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
        const locTutors = locationObj.tutors
            ? locationObj.tutors.map((tutorId) => {
                return Help.findInArray(tutorId, tutors)
            })
            : [];

        const locSubLocations = locationObj.subLocations
            ? Location.makeArray(
                  locationObj.subLocations,
                  trainers,
                  species,
                  items,
                  shops,
                  tutors
              )
            : [];

        return new Location(
            locationObj.name,
            locTrainers,
            locEncounters,
            locCollectibles,
            locShops,
            locTutors,
            locSubLocations
        );
    }

    static makeArray(locObjArray, trainers, species, items, shops, tutors) {
        return locObjArray.map((locObj) => {
            return Location.makeSingle(locObj, trainers, species, items, shops, tutors);
        });
    }
}

export default Location;
