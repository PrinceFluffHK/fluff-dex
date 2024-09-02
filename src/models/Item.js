class Item {
    constructor(id, name, gen, type, description, priceP, priceBP, tmId) {
        this.id = id;
        this.name = name;
        this.gen = gen
        this.type = type;
        this.description = description;
        this.priceP = priceP;
        this.priceBP = priceBP;
        this.tmId = tmId
    }

    static makeSingle(itemObj) {
        return new Item(
            itemObj.id,
            itemObj.name,
            itemObj.gen,
            itemObj.type,
            itemObj.description,
            itemObj.priceP,
            itemObj.priceBp,
            itemObj.tmId
        );
    }

    static makeArray(itemObjArray) {
        return itemObjArray.map(itemObj => {
            return Item.makeSingle(itemObj)
        })
    }

    listDisplay() {
        
    }
}

export default Item;
