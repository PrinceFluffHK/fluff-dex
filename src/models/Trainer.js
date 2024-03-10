import Help from "./Help";
import TrainerMon from "./TrainerMon";

class Trainer {
    constructor(id, name, trainerClass, team, notes, battleType, mandatory) {
        this.id = id;
        this.name = name;
        this.trainerClass = trainerClass;
        this.team = team;
        this.notes = notes;
        this.battleType = battleType
        this.mandatory = mandatory;
    }

    static makeSingle(
        trainerObj,
        trainerClasses,
        species,
        abilities,
        items,
        moves
    ) {
        const { id, name, trainerClass, team, notes, battleType, mandatory } = trainerObj;
        const newClass = Help.findInArray(trainerClass, trainerClasses);
        const newTeam = TrainerMon.makeTeam(
            team,
            species,
            abilities,
            items,
            moves
        );
        const newBattleType = battleType ? battleType : 2
        return new Trainer(id, name, newClass, newTeam, notes, newBattleType, mandatory);
    }

    static makeArray(
        trainerData,
        trainerClasses,
        species,
        abilities,
        items,
        moves
    ) {
        return trainerData.map((trainerObj) => {
            return this.makeSingle(
                trainerObj,
                trainerClasses,
                species,
                abilities,
                items,
                moves
            );
        });
    }
}

export default Trainer