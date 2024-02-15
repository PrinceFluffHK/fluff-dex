class Help {
    static findInArray(id, array) {
        return array.find(obj => {id === obj.id})
    }

    static constructLearnset(monId, learnsetArray, moveArray) {
        const rawLearnset = learnsetArray.find(learnset => {
            learnset.monId === monId
        })
        return rawLearnset.map(moveId => {
            return Help.findInArray(moveId, moveArray)
        })
    }
}