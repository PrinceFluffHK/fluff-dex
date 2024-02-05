import Type from "../../models/Type"

import normalIcon from "../../assets/icons/normal_icon_HOME3.png";
import fireIcon from "../../assets/icons/fire_icon_HOME3.png";
import fairyIcon from "../../assets/icons/fairy_icon_HOME3.png";
import darkIcon from "../../assets/icons/dark_icon_HOME3.png";
import dragonIcon from "../../assets/icons/dragon_icon_HOME3.png";
import iceIcon from "../../assets/icons/ice_icon_HOME3.png";
import psychicIcon from "../../assets/icons/psychic_icon_HOME3.png";
import electricIcon from "../../assets/icons/electric_icon_HOME3.png";
import grassIcon from "../../assets/icons/grass_icon_HOME3.png";
import waterIcon from "../../assets/icons/water_icon_HOME3.png";
import steelIcon from "../../assets/icons/steel_icon_HOME3.png";
import ghostIcon from "../../assets/icons/ghost_icon_HOME3.png";
import bugIcon from "../../assets/icons/bug_icon_HOME3.png";
import rockIcon from "../../assets/icons/rock_icon_HOME3.png";
import groundIcon from "../../assets/icons/ground_icon_HOME3.png";
import poisonIcon from "../../assets/icons/poison_icon_HOME3.png";
import flyingIcon from "../../assets/icons/flying_icon_HOME3.png";
import fightingIcon from "../../assets/icons/fighting_icon_HOME3.png";

import normalBanner from "../../assets/icons/normalIC_SV.png";
import fireBanner from "../../assets/icons/fireIC_SV.png";
import fairyBanner from "../../assets/icons/fairyIC_SV.png";
import darkBanner from "../../assets/icons/darkIC_SV.png";
import dragonBanner from "../../assets/icons/dragonIC_SV.png";
import iceBanner from "../../assets/icons/iceIC_SV.png";
import psychicBanner from "../../assets/icons/psychicIC_SV.png";
import electricBanner from "../../assets/icons/electricIC_SV.png";
import grassBanner from "../../assets/icons/grassIC_SV.png";
import waterBanner from "../../assets/icons/waterIC_SV.png";
import steelBanner from "../../assets/icons/steelIC_SV.png";
import ghostBanner from "../../assets/icons/ghostIC_SV.png";
import bugBanner from "../../assets/icons/bugIC_SV.png";
import rockBanner from "../../assets/icons/rockIC_SV.png";
import groundBanner from "../../assets/icons/groundIC_SV.png";
import poisonBanner from "../../assets/icons/poisonIC_SV.png";
import flyingBanner from "../../assets/icons/flyingIC_SV.png";
import fightingBanner from "../../assets/icons/fightingIC_SV.png";

export const gen1Types = {
    noType: new Type(0, "No Type", [], [], [], "", ""),
    normal: new Type(1, "Normal", [], [6], [8], normalIcon, normalBanner),
    fighting: new Type(2, "Fighting", [1, 6, 15], [3, 4, 7, 14,], [8], fightingIcon, fightingBanner),
    flying: new Type(3, "Flying", [2, 7, 12], [6, 13], [], flyingIcon, flyingBanner),
    poison: new Type(4, "Poison", [12, 7], [4, 5, 6, 8], [], poisonIcon, poisonBanner),
    ground: new Type(5, "Ground", [4, 6, 10, 13], [7, 12], [3], groundIcon, groundBanner),
    rock: new Type(6, "Rock", [3, 7, 10, 15], [2, 5], [], rockIcon, rockBanner),
    bug: new Type(7, "Bug", [12, 14,4], [2, 3, 8, 10], [], bugIcon, bugBanner),
    ghost: new Type(8, "Flying", [8], [], [1, 14], ghostIcon, ghostBanner),
    fire: new Type(10, "Fire", [12, 15], [6, 10, 11, 16], [], fireIcon, fireBanner),
    water: new Type(11, "Water", [5, 6, 10], [11, 12, 16], [], waterIcon, waterBanner),
    grass: new Type(12, "Grass", [5, 6, 11], [3, 4, 7, 10, 12, 16], [], grassIcon, grassBanner),
    electric: new Type(13, "Electric", [3, 11], [12, 16], [5], electricIcon, electricBanner),
    psychic: new Type(14, "Psychic", [2, 4], [14], [], psychicIcon, psychicBanner),
    ice: new Type(15, "Ice", [3, 5, 12, 16], [15], [], iceIcon, iceBanner),
    dragon: new Type(16, "Dragon", [16], [], [], dragonIcon, dragonBanner),
}

export const gen2Types = {
    noType: new Type(0, "No Type", [], [], [], "", ""),
    normal: new Type(1, "Normal", [], [6], [3], normalIcon, normalBanner),
    fighting: new Type(2, "Fighting", [1, 6, 9, 15, ], [3, 4, 7, 14], [8], fightingIcon, fightingBanner),
    flying: new Type(3, "Flying", [2, 7, 12], [6, 9, 13], [], flyingIcon, flyingBanner),
    poison: new Type(4, "Poison", [12], [4, 5, 6, 8], [9], poisonIcon, poisonBanner),
    ground: new Type(5, "Ground", [4, 6, 9, 10, 13], [7, 12], [3], groundIcon, groundBanner),
    rock: new Type(6, "Rock", [3, 7, 10, 15], [2, 5, 9], [], rockIcon, rockBanner),
    bug: new Type(7, "Bug", [12, 14, ], [2, 3, 4, 8, 9, 10], [], bugIcon, bugBanner),
    ghost: new Type(8, "3", [8, 14], [9], [1], ghostIcon, ghostBanner),
    steel: new Type(9, "Steel", [6, 15], [9, 10, 11, 13], [], steelIcon, steelBanner),
    fire: new Type(10, "Fire", [9, 12, 15], [6, 10, 11, 16], [], fireIcon, fireBanner),
    water: new Type(11, "Water", [5, 6, 10], [11, 12, 16], [], waterIcon, waterBanner),
    grass: new Type(12, "Grass", [5, 6, 11], [3, 4, 7, 9, 10, 12, 16], [], grassIcon, grassBanner),
    electric: new Type(13, "Electric", [3, 11], [12, 16], [5], electricIcon, electricBanner),
    psychic: new Type(14, "Psychic", [2, 4], [9, 14], [], psychicIcon, psychicBanner),
    ice: new Type(15, "Ice", [3, 5, 12, 16], [10, 15, 9], [], iceIcon, iceBanner),
    dragon: new Type(16, "Dragon", [16], [9], [], dragonIcon, dragonBanner),
    dark: new Type(17, "Dark", [8, 14], [2, 9], [], darkIcon, darkBanner),
}

export const vanillaTypes = {
    noType: new Type(0, "No Type", [], [], [], "", ""),
    normal: new Type(1, "Normal", [], [6], [3], normalIcon, normalBanner),
    fighting: new Type(2, "Fighting", [1, 6, 9, 15, ], [3, 4, 7, 14, 18], [8], fightingIcon, fightingBanner),
    flying: new Type(3, "Flying", [2, 7, 12], [6, 9, 13], [], flyingIcon, flyingBanner),
    poison: new Type(4, "Poison", [12, 18], [4, 5, 6, 8], [9], poisonIcon, poisonBanner),
    ground: new Type(5, "Ground", [4, 6, 9, 10, 13], [7, 12], [3], groundIcon, groundBanner),
    rock: new Type(6, "Rock", [3, 7, 10, 15], [2, 5, 9], [], rockIcon, rockBanner),
    bug: new Type(7, "Bug", [12, 14, ], [2, 3, 4, 8, 9, 10, 18], [], bugIcon, bugBanner),
    ghost: new Type(8, "3", [8, 14], [], [1], ghostIcon, ghostBanner),
    steel: new Type(9, "Steel", [6, 15, 18], [9, 10, 11, 13], [], steelIcon, steelBanner),
    fire: new Type(10, "Fire", [9, 12, 15], [6, 10, 11, 16], [], fireIcon, fireBanner),
    water: new Type(11, "Water", [5, 6, 10], [11, 12, 16], [], waterIcon, waterBanner),
    grass: new Type(12, "Grass", [5, 6, 11], [3, 4, 7, 9, 10, 12, 16], [], grassIcon, grassBanner),
    electric: new Type(13, "Electric", [3, 11], [12, 16], [5], electricIcon, electricBanner),
    psychic: new Type(14, "Psychic", [2, 4], [9, 14], [], psychicIcon, psychicBanner),
    ice: new Type(15, "Ice", [3, 5, 12, 16], [10, 15, 9], [], iceIcon, iceBanner),
    dragon: new Type(16, "Dragon", [16], [9], [18], dragonIcon, dragonBanner),
    dark: new Type(17, "Dark", [8, 14], [2, 18], [], darkIcon, darkBanner),
    fairy: new Type(18, "Fairy", [2, 16, ], [4, 9, 10], [], fairyIcon, fairyBanner),
}