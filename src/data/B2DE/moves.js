import Move from "../../models/Move";
import moveData from "../vanilla/moves.json"
import b2deTypes from "./types";

// const vanillaMoves = JSON.parse(moveData)

const b2deMoveEdits = [
    {
        moveId: 51, //Acid
        effects: "Always lowers opponent's Special Defense",
    },
    {
        moveId: 332, //Aerial Ace
        bp: 85,
    },
    {
        moveId: 292, //armThrust,
        effects: "Hits exactly 4 times in a row.",
    },
    {
        moveId: 454, //attackOrder,
        targetId: 5,
    },
    {
        moveId: 198, //boneRush,
        acc: 100,
        effects: "Hits exactly 3 times in a row.",
    },
    {
        moveId: 61, //bubbleBeam,
        targetId: 5,
    },
    {
        moveId: 268, //charge
        effects:
            "Raises user's Speed and next Electric move's power increases.",
    },
    {
        moveId: 4, //cometPunch
        typeId: 2,
        acc: 100,
        effects: "Hits exactly 3 times in a row.",
    },
    {
        moveId: 15, //cut,
        typeId: 12,
        bp: 65,
    },
    {
        moveId: 440, //crossPoison,
        bp: 90,
    },
    {
        moveId: 291, //dive
        bp: 120,
        effects:
            "Dives underwater on first turn, attacks with 33% recoil on second turn.",
    },
    {
        moveId: 146, //dizzyPunch
        effects: "50% chance to confuse opponent.",
    },
    {
        moveId: 3, //doubleSlap
        bp: 30,
        effects: "Hits exactly twice in a row.",
    },
    {
        moveId: 407, //dragonRush
        bp: 120,
        acc: 100,
        effects: "User receives 33% recoil damage.",
    },
    {
        moveId: 121, //eggBomb,
        typeId: 12,
        acc: 100,
    },
    {
        moveId: 153, //explosion
        effects: "Always critical-hits. User faints.",
    },
    {
        moveId: 120, //selfDestruct
        effects: "Always critical-hits. User faints.",
    },
    {
        moveId: 19, //fly,
        acc: 100,
    },
    {
        moveId: 31, //furyAttack
        acc: 100,
        effects: "Hits exactly 3 times in a row.",
    },
    {
        moveId: 154, //furySwipes
        acc: 100,
        effects: "Hits exactly 3 times in a row.",
    },
    {
        moveId: 544, //gearGrind,
        acc: 100,
    },
    {
        moveId: 549, //glaciate,
        bp: 75,
    },
    {
        moveId: 531, //heartStamp,
        bp: 75,
    },
    {
        moveId: 556, //icicleCrash
        bp: 75,
        targetId: 5,
    },
    {
        moveId: 333, //icicleSpear
        effects: "Hits exactly 3 times in a row.",
    },
    {
        moveId: 231, //ironTail,
        acc: 85,
    },
    {
        moveId: 282, //knockOff
        effects:
            "Removes opponent's held item for the rest of the battle (does not increase damage).",
    },
    {
        moveId: 536, //leafTornado,
        targetId: 5,
    },
    {
        moveId: 295, //lusterPurge
        bp: 80,
        effects: "Lowers opponent's Special Defense.",
    },
    {
        moveId: 429, //mirrorShot
        acc: 95,
        effects: "20% chance to lower opponent's Accuracy.",
    },
    {
        moveId: 296, //mistBall
        bp: 80,
        effects: "Lowers opponent's Special Attack.",
    },
    {
        moveId: 189, //mudSlap
        bp: 50,
        categoryId: 1,
        effects: "10% chance to lower opponent's Accuracy.",
    },
    {
        moveId: 200, //outrage,
        targetId: 1,
    },
    {
        moveId: 80, //petalDance,
        targetId: 1,
    },
    {
        moveId: 42, //pinMissile
        acc: 100,
        effects: "Hits exactly 3 times in a row.",
    },
    {
        moveId: 305, //poisonFang
        effects: "Badly poisons the opponent.",
    },
    {
        moveId: 342, //poisonTail
        targetId: 5,
        effects: "High critical hit ratio. Poisons opponents.",
    },
    {
        moveId: 350, //rockBlast
        acc: 100,
        effects: "Hits exactly 3 times in a row.",
    },
    {
        moveId: 431, //rockClimb,
        typeId: 6,
        acc: 90,
    },
    {
        moveId: 249, //rockSmash
        effects: "Lowers opponent's Defense.",
    },
    {
        moveId: 159, //sharpen
        targetId: 4,
        effects: "Raises the target's Attack and Special Attack.",
    },
    {
        moveId: 327, //skyUppercut,
        acc: 100,
    },
    {
        moveId: 169, //spiderWeb,
        targetId: 5,
    },
    {
        moveId: 211, //steelWing
        effects: "Raises user's Defense.",
    },
    {
        moveId: 70, //strength,
        targetId: 5,
    },
    {
        moveId: 541, //tailSlap
        acc: 100,
        effects: "Hits exactly 3 times in a row.",
    },
    {
        moveId: 37, //thrash,
        targetId: 1,
    },
    {
        moveId: 161, //triAttack,
        bp: 90,
    },
    {
        moveId: 344, //voltTackle,
        categoryId: 2,
    },
    {
        moveId: 528, //wildCharge,
        bp: 120,
    },
];

const b2deMoveObjects = Move.insertEdits(moveData, b2deMoveEdits)

const b2deMoves = b2deMoveObjects.map(moveObj => {
    const type = b2deTypes.find(typeObj => {
        return typeObj.id === moveObj.typeId
    })
    return new Move(moveObj.id, moveObj.name, type, )
})

export default b2deMoves;
