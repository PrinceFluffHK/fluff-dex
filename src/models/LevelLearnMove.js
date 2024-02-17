import Help from "./Help.js"

class LevelLearnMove {
    constructor (level, move) {
        this.level = level
        this.move = move
    }

    static makeArray(learnsetArray, movesArray) {
        // console.log(learnsetArray, movesArray)
        return learnsetArray.map(learnMove => {
            const move = Help.findInArray(learnMove.moveId, movesArray)
            return new LevelLearnMove(learnMove.level, move)
        })
    }
}

export default LevelLearnMove