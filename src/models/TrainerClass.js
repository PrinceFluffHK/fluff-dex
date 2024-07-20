import trainerClasses from "../data/vanilla/trainerClasses.json"
class TrainerClass {
    constructor(id, name, modifier) {
        this.id = id
        this.name = name
        this.modifier = modifier
        // this.sprite = sprite
    }

    static makeSingle(trainerClassObj) {
        const {id, name, modifier} = trainerClassObj
        return new TrainerClass(id, name, modifier)
    }

    static makeArray() {
        return trainerClasses.map(trainerClassObj => {
            return TrainerClass.makeSingle(trainerClassObj)
        })
    }
}

export default TrainerClass