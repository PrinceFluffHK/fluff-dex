import Help from "./Help";
import natures from "../data/vanilla/natures";

class TrainerMon {
    constructor(pokemon, level, ability, nature, item, moves, ivs, evs, maxStatus) {
        this.pokemon = pokemon;
        this.level = level;
        this.ability = ability;
        this.nature = nature;
        this.item = item;
        this.moves = moves;
        this.ivs = ivs;
        this.evs = evs;
        this.maxStatus = maxStatus || 0
    }

    static makeSingle(trainerMonObj, species, abilities, items, moves) {
        const { pokemonId, level, abilityId, natureId, itemId, ivs, evs, maxStatus } =
            trainerMonObj;
        const mon = Help.findInArray(pokemonId, species);
        const ability = Help.findInArray(abilityId, abilities);
        const nature = Help.findInArray(natureId, natures);
        const item = Help.findInArray(itemId, items);
        const newMoves = trainerMonObj.moves.map((move) => {
            return Help.findInArray(move, moves);
        });
        const newIvs = ivs ? trainerMonObj.ivs : [15, 15, 15, 15, 15, 15];
        const newEvs = evs ? trainerMonObj.evs : [0, 0, 0, 0, 0, 0];

        return new TrainerMon(
            mon,
            level,
            ability,
            nature,
            item,
            newMoves,
            newIvs,
            newEvs,
            maxStatus
        );
    }

    static makeTeam(trainerTeamData, species, abilities, items, moves) {
        return trainerTeamData.map((trainerMonObj) => {
            return this.makeSingle(
                trainerMonObj,
                species,
                abilities,
                items,
                moves
            );
        });
    }

    getPaste() {
        let itemText = "";
        if (this.item) {
            itemText = `@ ${this.item.name}`;
        }

        let evText = "";
        if (this.evs) {
            evText = `EVs: ${this.evs[0]} HP / ${this.evs[1]} Atk / ${this.evs[2]} Def / ${this.evs[3]} SpA / ${this.evs[4]} SpD / ${this.evs[5]} Spe`;
        }

        let moveText = ""
        this.moves.forEach(move => {
            moveText += (`
- ${move.name}`)
        })
        return `${this.pokemon.name} ${itemText}
Ability: ${this.ability.name}
${evText}
${this.nature.name} Nature
IVs: 15 HP / 15 Atk / 15 Def / 15 SpA / 15 SpD / 15 Spe ${moveText}`
    }

    getStat(statIndex) {
        return this.pokemon.getStat(statIndex, this.evs[statIndex], this.ivs[statIndex], this.nature, this.level)
    }

    getStats() {
        const stats = []
        for (let i = 0 ; i < 6 ; i++ ) {
            stats.push(this.getStat(i))
        }
        return stats
    }
}

export default TrainerMon;
