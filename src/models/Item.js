class Item {
    constructor(id, name, gen, type, description, priceP, priceBP) {
        this.id = id;
        this.name = name;
        this.gen = gen
        this.type = type;
        this.description = description;
        this.priceP = priceP;
        this.priceBP = priceBP;
    }

    static makeSingle(itemObj) {
        return new Item(
            itemObj.id,
            itemObj.name,
            itemObj.gen,
            itemObj.type,
            itemObj.description,
            itemObj.priceP,
            itemObj.priceBp
        );
    }

    static makeArray(itemObjArray) {
        itemObjArray.map(itemObj => {
            return Item.makeSingle(itemObj)
        })
    }
}

export default Item;
