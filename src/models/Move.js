import Help from "./Help.js";

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
            newMove.description
        );
    }

    static makeSingle(moveObj, types, targets, categories) {
            const type = Help.findInArray(moveObj.typeId, types);
            const target = Help.findInArray(moveObj.targetId, targets);
            const category = Help.findInArray(moveObj.categoryId, categories);

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
                moveObj.description
            );
    }

    static makeArray(moveObjArray, types, targets, categories) {
        return moveObjArray.map((moveObj) => {
            return Move.makeSingle(moveObj, types, targets, categories)
        });
    }
}

export default Move;
