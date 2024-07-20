class Help {
    static findInArray(id, array, debugTrigger) {
        const foundObj = array.find((obj) => {
            return id === obj.id;
        });
        if (!foundObj) {
            if (debugTrigger) {
                console.log(`No item with id of [${id}] found in`, array);
            }
        } else {
            return foundObj;
        }
    }

    static filterByGen(objArray, genNum) {
        return objArray.filter((obj) => {
            return obj.gen < genNum + 1;
        });
    }

    static insertEdits(vanillaObjArray, editObjArray) {
        return vanillaObjArray.map((vanillaObj) => {
            const editsObj = editObjArray.find((editObj) => {
                return vanillaObj.id === editObj.id;
            });
            if (editsObj) {
                return { ...vanillaObj, ...editsObj };
            }
            return vanillaObj;
        });
    }
    static editSpecies(vanillaObjArray, editObjArray) {
        return vanillaObjArray.map((vanillaObj) => {
            const editsObj = editObjArray.find((editObj) => {
                return vanillaObj.id === editObj.id;
            });
            if (editsObj) {
                return { ...vanillaObj, ...editsObj };
            }
            const blankEdits = {
                levelLearn: [],
                tmLearn: [],
                tutorLearn: [],
            };
            return { ...vanillaObj, ...blankEdits };
        });
    }

    static getDexSize(gen) {
        switch (gen) {
            case 1:
                return 151;
            case 2:
                return 251;
            case 3:
                return 386;
            case 4:
                return 494;
            case 5:
                return 649;
            case 6:
                return 721;
            case 7:
                return 809;
            case 8:
                return 905;
            case 9:
                return 1025;
            default:
                return 0;
        }
    }
}

export default Help;
