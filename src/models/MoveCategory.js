import React from "react";

class MoveCategory {
    constructor(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }

    static makeArray(objArray) {
        return objArray.map((catObj) => {
            return new MoveCategory(catObj.id, catObj.name, catObj.iconUrl);
        });
    }
}

export default MoveCategory;
