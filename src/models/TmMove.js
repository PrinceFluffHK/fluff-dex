import Help from "./Help"

class TmMove {
    constructor(id, item, move, hm) {
        this.id = id
        this.item = item
        this.move = move
        this.hm = hm
    }

    static makeSingle(tmObj, itemsArray, movesArray) {
        const item = Help.findInArray(tmObj.tmItemId, itemsArray)
        const move = Help.findInArray(tmObj.moveId, movesArray)
        return new TmMove(tmObj.id, item, move, tmObj.hm)
    }

    static makeArray(tmObjArray, itemsArray, movesArray) {
        return tmObjArray.map(tmObj => {
            return TmMove.makeSingle(tmObj, itemsArray, movesArray)
        })
    }

    static makeTmLearn(tmIdArray, tmMoves) {
        return tmIdArray.map((tmId, index) => {
            return Help.findInArray(tmId, tmMoves)
        })
    }
}

export default TmMove