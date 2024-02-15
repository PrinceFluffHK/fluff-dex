import Target from "../../models/Target";
import targetData from "./targets.json"

const moveTargets = Target.makeArray(targetData)

export default moveTargets