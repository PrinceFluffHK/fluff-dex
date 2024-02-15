import abilityData from "../../data/vanilla/abilities.json"
import Ability from "../../models/Ability.js"

const natDexAbilities = Ability.makeArray(abilityData)

const b2deAbilities = natDexAbilities.filter(ability => {
    return ability.gen <= 5
})

export default b2deAbilities