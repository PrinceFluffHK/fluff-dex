import Help from "./Help";
import TrainerMon from "./TrainerMon";
import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { romhackList } from "../components/Homepage";
import DexEntry from "./DexEntry";

class Trainer {
    constructor(id, name, trainerClass, team, notes, battleType, mandatory) {
        this.id = id;
        this.name = name;
        this.trainerClass = trainerClass;
        this.team = team;
        this.notes = notes;
        this.battleType = battleType;
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
        const { id, name, trainerClass, team, notes, battleType, mandatory } =
            trainerObj;
        const newClass = Help.findInArray(trainerClass, trainerClasses);
        const newTeam = TrainerMon.makeTeam(
            team,
            species,
            abilities,
            items,
            moves
        );
        const newBattleType = battleType ? battleType : 2;
        return new Trainer(
            id,
            name,
            newClass,
            newTeam,
            notes,
            newBattleType,
            mandatory
        );
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

    teamView(hackId) {
        return this.team.map((trainerMon, index) => {
            const selectedRomhack = Help.findInArray(hackId, romhackList);
            const mon = trainerMon.pokemon;
            const baseDexEntry = DexEntry.findFromForm(
                mon.id,
                selectedRomhack.nationalDex.dexArray
            );
            return (
                <Grid
                    item
                    xs={6}
                    sm={4}
                    className="center"
                    style={{ flexDirection: "column" }}
                    key={index}
                >
                    <Link
                        to={`/${hackId}/pokemon/${baseDexEntry.id}/0`}
                        key={index}
                        className="suppress-link"
                    >
                        <div
                            style={{ paddingTop: "5px" }}
                            className="text-center"
                        >
                            {mon.name}
                        </div>
                        <img
                            src={mon.spriteUrl}
                            className="location-mon-sprite"
                            alt={`Sprite of ${mon.name} that links to its info page.`}
                        />
                    </Link>
                </Grid>
            );
        });
    }

    locationStandard(color, index, hackId, final, teammate) {
        const romhack = Help.findInArray(hackId, romhackList);
        const teamView = this.teamView(hackId);

        let className = "list-divider";
        if (index === 0) {
            className += " no-border round-top";
            if (final) {
                className += "-bottom";
            }
        } else if (final) {
            className += " round-bottom";
        }
        if (teammate && index === 1) {
            className += " no-border";
        }

        return (
            <div
                className={className}
                style={{ backgroundColor: color }}
                key={index}
            >
                <Grid container>
                    <Grid item xs={3} className="center">
                        <Link to={`/${hackId}/trainers/${this.id}`}>
                            <img
                                src={`/trainerClasses/${this.trainerClass.id}-${romhack.spriteId}.png`}
                                alt={`Sprite for the ${this.trainerClass.name} trainer class.`}
                            />
                        </Link>
                    </Grid>
                    <Grid item xs={2} className="align-center">
                        <Link
                            to={`/${hackId}/trainers/${this.id}`}
                            className="suppress-link"
                        >
                            <b>
                                {this.trainerClass.name} {this.name}
                            </b>
                        </Link>
                    </Grid>
                    <Grid item xs={7}>
                        <Grid container columnSpacing={2}>
                            {teamView}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

    // locationPartner(color, index, hackId, final) {
    //     // const teamView = this.teamView(hackId)

    //     let className = "list-divider";
    //     if (index === 0) {

    //         className += " round-top";
    //         if (final) {
    //             className += "-bottom";
    //         }
    //     } else if (final) {
    //         className += " round-bottom";
    //     }
    //     return (
    //     <div key={index}>

    //     </div>
    // )
    // }
}

export default Trainer;
