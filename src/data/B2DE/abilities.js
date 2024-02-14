// import * as gen from "../vanilla/abilities.js"
import data from "../../data/vanilla/abilities.json"
import Ability from "../../models/Ability.js"

const natDexAbilities = Ability.makeArray(data)

const b2deAbilities = natDexAbilities.filter(ability => {
    return ability.gen <= 5
})

export default b2deAbilities