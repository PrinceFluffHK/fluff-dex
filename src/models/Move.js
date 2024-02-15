class Move {
    constructor(id, name, type, category, bp, acc, pp, target, gen, effects) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.category = category;
        this.bp = bp;
        this.acc = acc;
        this.pp = pp;
        this.target = target;
        this.gen = gen;
        this.effects = effects;
    }

    static makeEdits(move, changes) {
        const newMove = { ...move, ...changes };
        return new Move(
            newMove.id,
            newMove.name,
            newMove.type,
            newMove.category,
            newMove.bp,
            newMove.acc,
            newMove.pp,
            newMove.target,
            newMove.gen,
            newMove.effects
        );
    }

    static insertEdits(vanillaObjArray, editObjArray) {
        return vanillaObjArray.map((moveObj) => {
            const moveEdits = editObjArray.find((editObj) => {
                return moveObj.id === editObj.moveId;
            });
            if (moveEdits) {
                return { ...moveObj, ...moveEdits };
            }
            return moveObj;
        });
    }

    static makeArray(moveObjArray, types, targets, categories) {
        return moveObjArray.map((moveObj) => {
            // const type = types.find(typeObj => {moveObj.id === typeObj.id})
            const type = Help.findInArray(moveObj.id, types);
            const target = Help.findInArray(moveObj.id, targets);
            const category = Help.findInArray(moveObj.id, categories);

            return new Move(
                moveObj.id,
                moveObj.name,
                type,
                category,
                moveObj.bp,
                moveObj.acc,
                moveObj.pp,
                target,
                moveObj.gen,
                moveObj.effects
            );
        });
    }
}

export default Move;
