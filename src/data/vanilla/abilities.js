import Ability from "../../models/Ability"
import abilityData from "./abilities.json"

const vanillaAbilities = Ability.makeArray(abilityData)

export default vanillaAbilities