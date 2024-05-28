import Help from "./Help";

class Collectible {
    constructor(item, quantity, type, description, requirements, notes) {
        this.item = item;
        this.quantity = quantity;
        this.type = type;
        this.description = description;
        this.requirements = requirements;
        this.notes = notes;
    }

    static makeSingle(collectibleObj, items) {
        const item = Help.findInArray(collectibleObj.itemId, items);
        return new Collectible(
            item,
            collectibleObj.quantity,
            collectibleObj.type,
            collectibleObj.description,
            collectibleObj.requirements,
            collectibleObj.notes
        );
    }

    static makeArray(collectibleObjArray, items) {
        return collectibleObjArray.map(collectibleObj => {
            return Collectible.makeSingle(collectibleObj, items)
        })
    }
}

export default Collectible
