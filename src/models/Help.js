class Help {
    static findInArray(id, array) {
        return array.find((obj) => {
            return id === obj.id;
        });
    }
    // static findInArray(id, array) {
    //     const foundObj = array.find((obj) => {
    //         return id === obj.id;
    //     });
    //     if (!foundObj) {
    //         console.log(`No item with id of [${id}] found in`, array)
    //     } else {
    //         return foundObj
    //     }
    // }

    static constructLearnset(monId, learnsetArray, moveArray) {
        const rawLearnset = learnsetArray.find((learnset) => {
            return learnset.monId === monId;
        });
        return rawLearnset.map((moveId) => {
            return Help.findInArray(moveId, moveArray);
        });
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

    static getDexSize(gen) {
        switch(gen) {
            case 1:
                return 151
            case 2:
                return 251
            case 3:
                return 386
            case 4:
                return 494
            case 5:
                return 649
            case 6:
                return 721
            case 7:
                return 809
            case 8:
                return 905
            case 9:
                return 1025
        }
    }
}

export default Help;
