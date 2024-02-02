import b2deMoves from "./moves";
import * as tutors from "./tutors";
import TutorMove from "../../models/TutorMove";

const tutorMoves = {
    covet: new TutorMove(b2deMoves.covet, tutors.redShard, items.redShard),
    bugBite: new TutorMove(b2deMoves.bugBite, tutors.redShard, items.redShard),
    drillRun: new TutorMove(
        b2deMoves.drillRun,
        tutors.redShard,
        items.redShard
    ),
    bounce: new TutorMove(b2deMoves.bounce, tutors.redShard, items.redShard),
    signalBeam: new TutorMove(
        b2deMoves.signalBeam,
        tutors.redShard,
        items.redShard
    ),
    ironHead: new TutorMove(
        b2deMoves.ironHead,
        tutors.redShard,
        items.redShard
    ),
    superFang: new TutorMove(
        b2deMoves.superFang,
        tutors.redShard,
        items.redShard
    ),
    uproar: new TutorMove(b2deMoves.uproar, tutors.redShard, items.redShard),
    seedBomb: new TutorMove(
        b2deMoves.seedBomb,
        tutors.redShard,
        items.redShard
    ),
    dualChop: new TutorMove(
        b2deMoves.dualChop,
        tutors.redShard,
        items.redShard
    ),
    lowKick: new TutorMove(b2deMoves.lowKick, tutors.redShard, items.redShard),
    gunkShot: new TutorMove(
        b2deMoves.gunkShot,
        tutors.redShard,
        items.redShard
    ),
    thunderPunch: new TutorMove(
        b2deMoves.thunderPunch,
        tutors.redShard,
        items.redShard
    ),
    firePunch: new TutorMove(
        b2deMoves.firePunch,
        tutors.redShard,
        items.redShard
    ),
    icePunch: new TutorMove(
        b2deMoves.icePunch,
        tutors.redShard,
        items.redShard
    ),
    grassPledge: new TutorMove(
        b2deMoves.grassPledge,
        tutors.pledges,
        items.noItem
    ),
    firePledge: new TutorMove(
        b2deMoves.firePledge,
        tutors.pledges,
        items.noItem
    ),
    waterPledge: new TutorMove(
        b2deMoves.waterPledge,
        tutors.pledges,
        items.noItem
    ),
    frenzyPlant: new TutorMove(
        b2deMoves.frenzyPlant,
        tutors.ultMoves,
        items.noItem
    ),
    blastBurn: new TutorMove(
        b2deMoves.blastBurn,
        tutors.ultMoves,
        items.noItem
    ),
    hydroCannon: new TutorMove(
        b2deMoves.hydroCannon,
        tutors.ultMoves,
        items.noItem
    ),
    lastResort: new TutorMove(
        b2deMoves.lastResort,
        tutors.blueShard,
        items.blueShard
    ),
    ironDefense: new TutorMove(
        b2deMoves.ironDefense,
        tutors.blueShard,
        items.blueShard
    ),
    magnetRise: new TutorMove(
        b2deMoves.magnetRise,
        tutors.blueShard,
        items.blueShard
    ),
    magicCoat: new TutorMove(
        b2deMoves.magicCoat,
        tutors.blueShard,
        items.blueShard
    ),
    block: new TutorMove(b2deMoves.block, tutors.blueShard, items.blueShard),
    hyperVoice: new TutorMove(
        b2deMoves.hyperVoice,
        tutors.blueShard,
        items.blueShard
    ),
    electroweb: new TutorMove(
        b2deMoves.electroweb,
        tutors.blueShard,
        items.blueShard
    ),
    icyWind: new TutorMove(
        b2deMoves.icyWind,
        tutors.blueShard,
        items.blueShard
    ),
    ironTail: new TutorMove(
        b2deMoves.ironTail,
        tutors.blueShard,
        items.blueShard
    ),
    aquaTail: new TutorMove(
        b2deMoves.aquaTail,
        tutors.blueShard,
        items.blueShard
    ),
    earthPower: new TutorMove(
        b2deMoves.earthPower,
        tutors.blueShard,
        items.blueShard
    ),
    zenHeadbutt: new TutorMove(
        b2deMoves.zenHeadbutt,
        tutors.blueShard,
        items.blueShard
    ),
    foulPlay: new TutorMove(
        b2deMoves.foulPlay,
        tutors.blueShard,
        items.blueShard
    ),
    superpower: new TutorMove(
        b2deMoves.superpower,
        tutors.blueShard,
        items.blueShard
    ),
    gravity: new TutorMove(
        b2deMoves.gravity,
        tutors.blueShard,
        items.blueShard
    ),
    dragonPulse: new TutorMove(
        b2deMoves.dragonPulse,
        tutors.blueShard,
        items.blueShard
    ),
    darkPulse: new TutorMove(
        b2deMoves.darkPulse,
        tutors.blueShard,
        items.blueShard
    ),
    dracoMeteor: new TutorMove(
        b2deMoves.dracoMeteor,
        tutors.drayden,
        items.noItem
    ),
    bind: new TutorMove(b2deMoves.bind, tutors.yellowShard, items.yellowShard),
    snore: new TutorMove(
        b2deMoves.snore,
        tutors.yellowShard,
        items.yellowShard
    ),
    healBell: new TutorMove(
        b2deMoves.healBell,
        tutors.yellowShard,
        items.yellowShard
    ),
    knockOff: new TutorMove(
        b2deMoves.knockOff,
        tutors.yellowShard,
        items.yellowShard
    ),
    synthesis: new TutorMove(
        b2deMoves.synthesis,
        tutors.yellowShard,
        items.yellowShard
    ),
    roost: new TutorMove(
        b2deMoves.roost,
        tutors.yellowShard,
        items.yellowShard
    ),
    skyAttack: new TutorMove(
        b2deMoves.skyAttack,
        tutors.yellowShard,
        items.yellowShard
    ),
    rolePlay: new TutorMove(
        b2deMoves.rolePlay,
        tutors.yellowShard,
        items.yellowShard
    ),
    heatWave: new TutorMove(
        b2deMoves.heatWave,
        tutors.yellowShard,
        items.yellowShard
    ),
    gigaDrain: new TutorMove(
        b2deMoves.gigaDrain,
        tutors.yellowShard,
        items.yellowShard
    ),
    drainPunch: new TutorMove(
        b2deMoves.drainPunch,
        tutors.yellowShard,
        items.yellowShard
    ),
    painSplit: new TutorMove(
        b2deMoves.painSplit,
        tutors.yellowShard,
        items.yellowShard
    ),
    tailwind: new TutorMove(
        b2deMoves.tailwind,
        tutors.yellowShard,
        items.yellowShard
    ),
    worrySeed: new TutorMove(
        b2deMoves.worrySeed,
        tutors.greenShard,
        items.greenShard
    ),
    gastroAcid: new TutorMove(
        b2deMoves.gastroAcid,
        tutors.greenShard,
        items.greenShard
    ),
    helpingHand: new TutorMove(
        b2deMoves.helpingHand,
        tutors.greenShard,
        items.greenShard
    ),
    afterYou: new TutorMove(
        b2deMoves.afterYou,
        tutors.greenShard,
        items.greenShard
    ),
    magicRoom: new TutorMove(
        b2deMoves.magicRoom,
        tutors.greenShard,
        items.greenShard
    ),
    wonderRoom: new TutorMove(
        b2deMoves.wonderRoom,
        tutors.greenShard,
        items.greenShard
    ),
    spite: new TutorMove(b2deMoves.spite, tutors.greenShard, items.greenShard),
    recycle: new TutorMove(
        b2deMoves.recycle,
        tutors.greenShard,
        items.greenShard
    ),
    trick: new TutorMove(b2deMoves.trick, tutors.greenShard, items.greenShard),
    stealthRock: new TutorMove(
        b2deMoves.stealthRock,
        tutors.greenShard,
        items.greenShard
    ),
    outrage: new TutorMove(
        b2deMoves.outrage,
        tutors.greenShard,
        items.greenShard
    ),
    endeavor: new TutorMove(
        b2deMoves.endeavor,
        tutors.greenShard,
        items.greenShard
    ),
    sleepTalk: new TutorMove(
        b2deMoves.sleepTalk,
        tutors.greenShard,
        items.greenShard
    ),
    skillSwap: new TutorMove(
        b2deMoves.skillSwap,
        tutors.greenShard,
        items.greenShard
    ),
    snatch: new TutorMove(
        b2deMoves.snatch,
        tutors.greenShard,
        items.greenShard
    ),
};

export default tutorMoves;
