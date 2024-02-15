class Ability {
    constructor (id, name, gen, description) {
        this.id = id
        this.name = name
        this.gen = gen
        this.description = description
    }

    static makeSingle(abilityObj) {
        return new Ability(abilityObj.id, abilityObj.name, abilityObj.gen, abilityObj.description)
    }

    static makeArray(objArray) {
        return objArray.map(ability => {
            return Ability.makeSingle(ability)
        })
    }
}

export default Ability