import Move from "../../models/Move";
import { gen5Moves } from "../vanilla/moves"
import {} from "../vanilla/moves";
import {
    adjacent,
    allAdjacentFoes,
    userAdjacentAlly,
} from "../vanilla/targets";
import { physical, special } from "../vanilla/moveCategories";
import { vanillaTypes } from "../vanilla/types";
const {
    fighting,
    rock,
    grass
} = vanillaTypes

const b2deMoves = {
    ...gen5Moves,

    pound: new Move(
        ...Move.makeEdits(gen5Moves.acid, {
            effects: "Always lowers opponent's Special Defense",
        })
    ),
    aerialAce: new Move(...Move.makeEdits(gen5Moves.aerialAce, { bp: 85 })),
    armThrust: new Move(
        ...Move.makeEdits(gen5Moves.armThrust, {
            effects: "Hits exactly 4 times in a row.",
        })
    ),
    attackOrder: new Move(
        ...Move.makeEdits(gen5Moves.attackOrder, { target: allAdjacentFoes })
    ),
    boneRush: new Move(
        ...Move.makeEdits(gen5Moves.boneRush, {
            acc: 100,
            effects: "Hits exactly 3 times in a row.",
        })
    ),
    bubbleBeam: new Move(
        ...Move.makeEdits(gen5Moves.bubbleBeam, { target: allAdjacentFoes })
    ),
    charge: new Move(
        ...Move.makeEdits(gen5Moves.charge, {
            effects:
                "Raises user's Speed and next Electric move's power increases.",
        })
    ),
    cometPunch: new Move(
        ...Move.makeEdits(gen5Moves.cometPunch, {
            type: fighting,
            acc: 100,
            effects: "Hits exactly 3 times in a row.",
        })
    ),
    cut: new Move(...Move.makeEdits(gen5Moves.cut, { type: grass, bp: 65 })),
    crossPoison: new Move(...Move.makeEdits(gen5Moves.crossPoison, { bp: 90 })),
    dive: new Move(
        ...Move.makeEdits(gen5Moves.dive, {
            bp: 120,
            effects:
                "Dives underwater on first turn, attacks with 33% recoil on second turn.",
        })
    ),
    dizzyPunch: new Move(
        ...Move.makeEdits(gen5Moves.dizzyPunch, {
            effects: "50% chance to confuse opponent.",
        })
    ),
    doubleSlap: new Move(
        ...Move.makeEdits(gen5Moves.doubleSlap, {
            bp: 30,
            effects: "Hits exactly twice in a row.",
        })
    ),
    dragonRush: new Move(
        ...Move.makeEdits(gen5Moves.dragonRush, {
            bp: 120,
            acc: 100,
            effects: "User receives 33% recoil damage.",
        })
    ),
    eggBomb: new Move(...Move.makeEdits(gen5Moves.eggBomb, { type: grass, acc: 100 })),
    explosion: new Move(
        ...Move.makeEdits(gen5Moves.explosion, {
            effects: "Always critical-hits. User faints.",
        })
    ),
    selfDestruct: new Move(
        ...Move.makeEdits(gen5Moves.selfDestruct, {
            effects: "Always critical-hits. User faints.",
        })
    ),
    fly: new Move(...Move.makeEdits(gen5Moves.fly, { acc: 100 })),
    furyAttack: new Move(
        ...Move.makeEdits(gen5Moves.furyAttack, {
            acc: 100,
            effects: "Hits exactly 3 times in a row.",
        })
    ),
    furySwipes: new Move(
        ...Move.makeEdits(gen5Moves.furySwipes, {
            acc: 100,
            effects: "Hits exactly 3 times in a row.",
        })
    ),
    gearGrind: new Move(...Move.makeEdits(gen5Moves.gearGrind, { acc: 100 })),
    glaciate: new Move(...Move.makeEdits(gen5Moves.glaciate, { bp: 75 })),
    heartStamp: new Move(...Move.makeEdits(gen5Moves.heartStamp, { bp: 75 })),
    icicleCrash: new Move(
        ...Move.makeEdits(gen5Moves.icicleCrash, { bp: 75, target: allAdjacentFoes })
    ),
    icicleSpear: new Move(
        ...Move.makeEdits(gen5Moves.icicleSpear, {
            effects: "Hits exactly 3 times in a row.",
        })
    ),
    ironTail: new Move(...Move.makeEdits(gen5Moves.ironTail, { acc: 85 })),
    knockOff: new Move(
        ...Move.makeEdits(gen5Moves.knockOff, {
            effects:
                "Removes opponent's held item for the rest of the battle (does not increase damage).",
        })
    ),
    leafTornado: new Move(
        ...Move.makeEdits(gen5Moves.leafTornado, { target: allAdjacentFoes })
    ),
    lusterPurge: new Move(
        ...Move.makeEdits(gen5Moves.lusterPurge, {
            bp: 80,
            effects: "Lowers opponent's Special Defense.",
        })
    ),
    mirrorShot: new Move(
        ...Move.makeEdits(gen5Moves.mirrorShot, {
            acc: 95,
            effects: "20% chance to lower opponent's Accuracy.",
        })
    ),
    mistBall: new Move(
        ...Move.makeEdits(gen5Moves.mistBall, {
            bp: 80,
            effects: "Lowers opponent's Special Attack.",
        })
    ),
    mudSlap: new Move(
        ...Move.makeEdits(gen5Moves.mudSlap, {
            bp: 50,
            category: physical,
            effects: "10% chance to lower opponent's Accuracy.",
        })
    ),
    outrage: new Move(...Move.makeEdits(gen5Moves.outrage, { target: adjacent })),
    petalDance: new Move(...Move.makeEdits(gen5Moves.petalDance, { target: adjacent })),
    pinMissile: new Move(
        ...Move.makeEdits(gen5Moves.pinMissile, {
            acc: 100,
            effects: "Hits exactly 3 times in a row.",
        })
    ),
    poisonFang: new Move(
        ...Move.makeEdits(gen5Moves.poisonFang, {
            effects: "Badly poisons the opponent.",
        })
    ),
    poisonTail: new Move(
        ...Move.makeEdits(gen5Moves.poisonTail, {
            target: allAdjacentFoes,
            effects: "High critical hit ratio. Poisons opponents.",
        })
    ),
    rockBlast: new Move(
        ...Move.makeEdits(gen5Moves.rockBlast, {
            acc: 100,
            effects: "Hits exactly 3 times in a row.",
        })
    ),
    rockClimb: new Move(
        ...Move.makeEdits(gen5Moves.rockClimb, { type: rock, acc: 90 })
    ),
    rockSmash: new Move(
        ...Move.makeEdits(gen5Moves.rockSmash, {
            effects: "Lowers opponent's Defense.",
        })
    ),
    sharpen: new Move(
        ...Move.makeEdits(gen5Moves.sharpen, {
            target: userAdjacentAlly,
            effects: "Raises the target's Attack and Special Attack.",
        })
    ),
    skyUppercut: new Move(...Move.makeEdits(gen5Moves.skyUppercut, { acc: 100 })),
    spiderWeb: new Move(
        ...Move.makeEdits(gen5Moves.spiderWeb, { target: allAdjacentFoes })
    ),
    steelWing: new Move(
        ...Move.makeEdits(gen5Moves.steelWing, { effects: "Raises user's Defense." })
    ),
    strength: new Move(
        ...Move.makeEdits(gen5Moves.strength, { target: allAdjacentFoes })
    ),
    tailSlap: new Move(
        ...Move.makeEdits(gen5Moves.tailSlap, {
            acc: 100,
            effects: "Hits exactly 3 times in a row.",
        })
    ),
    thrash: new Move(...Move.makeEdits(gen5Moves.thrash, { target: adjacent })),
    triAttack: new Move(...Move.makeEdits(gen5Moves.triAttack, { bp: 90 })),
    voltTackle: new Move(
        ...Move.makeEdits(gen5Moves.voltTackle, { category: special })
    ),
    wildCharge: new Move(...Move.makeEdits(gen5Moves.wildCharge, { bp: 120 })),
};

export default b2deMoves