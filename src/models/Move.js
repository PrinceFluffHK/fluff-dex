class Move {
    constructor (id, name, type, category, bp, acc, pp, target, gen, effects) {
        this.id = id
        this.name = name
        this.type = type
        this.category = category
        this.bp = bp
        this.acc = acc
        this.pp = pp
        this.target = target
        this.gen = gen
        this.effects = effects
    }

    static makeEdits = (move, changes) => {
        const newMove = { ...move, ...changes };
        return [
            newMove.id,
            newMove.name,
            newMove.type,
            newMove.category,
            newMove.bp,
            newMove.acc,
            newMove.pp,
            newMove.target,
            newMove.gen,
            newMove.effects,
        ];
    };
}

export default Move