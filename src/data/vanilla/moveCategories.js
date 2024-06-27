import MoveCategory from "../../models/MoveCategory";
import categoryData from "./moveCategories.json"

const moveCategories = MoveCategory.makeArray(categoryData)
export default moveCategories