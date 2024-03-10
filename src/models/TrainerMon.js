import Help from "./Help"
import natures from "../data/vanilla/natures"

class TrainerMon {
    constructor(pokemon, level, ability, nature, item, moves, ivs, evs) {
        this.pokemon = pokemon
        this.level = level
        this.ability = ability  
        this.nature = nature
        this.item = item
        this.moves = moves
        this.ivs = ivs
        this.evs = evs 
    }

    static makeSingle(trainerMonObj, species, abilities, items, moves) {
        const {pokemonId, level, abilityId, natureId, itemId, ivs, evs} = trainerMonObj
        const mon = Help.findInArray(pokemonId, species)
        const ability = Help.findInArray(abilityId, abilities)
        const nature = Help.findInArray(natureId, natures)
        const item = Help.findInArray(itemId, items)
        const newMoves = trainerMonObj.moves.map(move => {
            return Help.findInArray(move, moves)
        })
        const newIvs = ivs ? trainerMonObj.ivs : [15, 15, 15, 15, 15, 15]
        const newEvs = evs ? trainerMonObj.evs : [0, 0, 0, 0, 0, 0]

        return new TrainerMon(mon, level, ability, nature, item, newMoves, newIvs, newEvs)
    }

    static makeTeam(trainerTeamData, species, abilities, items, moves) {
        return trainerTeamData.map(trainerMonObj => {
            return this.makeSingle(trainerMonObj, species, abilities, items, moves)
        })
    }
}

export default TrainerMon