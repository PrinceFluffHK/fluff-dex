import React from "react";

class DexEntry {
    constructor(id, name, forms) {
        this.id = id;
        this.name = name;
        this.forms = forms;
    }

    static makeSubstitutions(vanillaEntries, modEntries) {
        return vanillaEntries.map(vanillaEntry => {
            const replacement = modEntries.find(modEntry => {
                return vanillaEntry.id === modEntry.id
            })
            if (replacement) {
                return replacement
            }
            return vanillaEntry
        })
    }

    static makePokedex(dexObjArray, speciesArray) {
        return dexObjArray.map((entry) => {
            const newForms = entry.forms.map((form) => {
                return speciesArray.find((species) => {
                    return species.id === form.id;
                });
            });
            return new DexEntry(entry.id, entry.name, newForms);
        });
    }
}

export default DexEntry;
