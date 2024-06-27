class TrainerClass {
    constructor(id, name, modifier, sprite) {
        this.id = id
        this.name = name
        this.modifier = modifier
        this.sprite = sprite
    }

    static makeSingle(trainerClassObj) {
        const {id, name, modifier, sprite} = trainerClassObj
        return new TrainerClass(id, name, modifier, sprite)
    }

    static makeArray(trainerClassData) {
        return trainerClassData.map(trainerClassObj => {
            return TrainerClass.makeSingle(trainerClassObj)
        })
    }
}

export default TrainerClass