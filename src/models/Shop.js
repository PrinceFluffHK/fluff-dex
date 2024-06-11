import Help from "./Help"

class Shop {
    constructor(id, name, bp, contents) {
        this.id = id
        this.name = name
        this.bp = bp
        this.contents = contents
    }

    static makeSingle(shopObj, items) {
        const newContents = shopObj.contents.map(shopItem => {
            return Help.findInArray(shopItem, items)
        })
        return new Shop(shopObj.id, shopObj.name, shopObj.bp, newContents)
    }

    static makeArray(shopObjArray, items) {
        // console.log(shopObjArray)
        return shopObjArray.map(shopObj => {
            return Shop.makeSingle(shopObj, items)
        })
    }
}

export default Shop