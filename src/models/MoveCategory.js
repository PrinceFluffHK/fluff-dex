import React from "react";

class MoveCategory {
    constructor(id, name, iconUrl) {
        this.id = id;
        this.name = name;
        this.iconUrl = iconUrl;
    }

    static makeArray(objArray) {
        return objArray.map((catObj) => {
            return new MoveCategory(catObj.id, catObj.name, catObj.iconUrl);
        });
    }

    display(styleObj) {
        return <img src={this.iconUrl} alt={`Icon indicating a ${this.name} move`} style={{...styleObj}}/>
        
    }
}

export default MoveCategory;
