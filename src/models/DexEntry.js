import React from "react";
import Help from "./Help";

class DexEntry {
    constructor(id, index, forms) {
        this.id = id;
        this.dexNum = index;
        this.forms = forms;
    }

    static makeSingle(dexEntryObj, speciesArray, index) {
        const newForms = dexEntryObj.forms.map((form) => {
            return Help.findInArray(form, speciesArray);
        });
        return new DexEntry(dexEntryObj.id, index, newForms);
    }
}

export default DexEntry;
