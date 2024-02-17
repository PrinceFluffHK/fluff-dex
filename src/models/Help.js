class Help {
    static findInArray(id, array) {
        return array.find(obj => {return id === obj.id})
    }

    static constructLearnset(monId, learnsetArray, moveArray) {
        const rawLearnset = learnsetArray.find(learnset => {
            return learnset.monId === monId
        })
        return rawLearnset.map(moveId => {
            return Help.findInArray(moveId, moveArray)
        })
    }
}

export default Help