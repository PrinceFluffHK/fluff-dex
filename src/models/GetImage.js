import React from "react";

import normalIcon from "../assets/icons/normal_icon_HOME3.png";
import fireIcon from "../assets/icons/fire_icon_HOME3.png";
import fairyIcon from "../assets/icons/fairy_icon_HOME3.png";
import darkIcon from "../assets/icons/dark_icon_HOME3.png";
import dragonIcon from "../assets/icons/dragon_icon_HOME3.png";
import iceIcon from "../assets/icons/ice_icon_HOME3.png";
import psychicIcon from "../assets/icons/psychic_icon_HOME3.png";
import electricIcon from "../assets/icons/electric_icon_HOME3.png";
import grassIcon from "../assets/icons/grass_icon_HOME3.png";
import waterIcon from "../assets/icons/water_icon_HOME3.png";
import steelIcon from "../assets/icons/steel_icon_HOME3.png";
import ghostIcon from "../assets/icons/ghost_icon_HOME3.png";
import bugIcon from "../assets/icons/bug_icon_HOME3.png";
import rockIcon from "../assets/icons/rock_icon_HOME3.png";
import groundIcon from "../assets/icons/ground_icon_HOME3.png";
import poisonIcon from "../assets/icons/poison_icon_HOME3.png";
import flyingIcon from "../assets/icons/flying_icon_HOME3.png";
import fightingIcon from "../assets/icons/fighting_icon_HOME3.png";

import normalBanner from "../assets/icons/normalIC_SV.png";
import fireBanner from "../assets/icons/fireIC_SV.png";
import fairyBanner from "../assets/icons/fairyIC_SV.png";
import darkBanner from "../assets/icons/darkIC_SV.png";
import dragonBanner from "../assets/icons/dragonIC_SV.png";
import iceBanner from "../assets/icons/iceIC_SV.png";
import psychicBanner from "../assets/icons/psychicIC_SV.png";
import electricBanner from "../assets/icons/electricIC_SV.png";
import grassBanner from "../assets/icons/grassIC_SV.png";
import waterBanner from "../assets/icons/waterIC_SV.png";
import steelBanner from "../assets/icons/steelIC_SV.png";
import ghostBanner from "../assets/icons/ghostIC_SV.png";
import bugBanner from "../assets/icons/bugIC_SV.png";
import rockBanner from "../assets/icons/rockIC_SV.png";
import groundBanner from "../assets/icons/groundIC_SV.png";
import poisonBanner from "../assets/icons/poisonIC_SV.png";
import flyingBanner from "../assets/icons/flyingIC_SV.png";
import fightingBanner from "../assets/icons/fightingIC_SV.png";

class GetImage {
    static typeIcon(typeName) {
        switch (typeName) {
            case "normal":
                return <img src={normalIcon} alt="Circular normal-type icon" />;
            case "fighting":
                return (
                    <img src={fightingIcon} alt="Circular fighting-type icon" />
                );
            case "flying":
                return <img src={flyingIcon} alt="Circular flying-type icon" />;
            case "poison":
                return <img src={poisonIcon} alt="Circular poison-type icon" />;
            case "ground":
                return <img src={groundIcon} alt="Circular ground-type icon" />;
            case "rock":
                return <img src={rockIcon} alt="Circular rock-type icon" />;
            case "bug":
                return <img src={bugIcon} alt="Circular bug-type icon" />;
            case "ghost":
                return <img src={ghostIcon} alt="Circular ghost-type icon" />;
            case "steel":
                return <img src={steelIcon} alt="Circular steel-type icon" />;
            case "water":
                return <img src={waterIcon} alt="Circular water-type icon" />;
            case "grass":
                return <img src={grassIcon} alt="Circular grass-type icon" />;
            case "electric":
                return (
                    <img src={electricIcon} alt="Circular electric-type icon" />
                );
            case "psychic":
                return (
                    <img src={psychicIcon} alt="Circular psychic-type icon" />
                );
            case "ice":
                return <img src={iceIcon} alt="Circular ice-type icon" />;
            case "dragon":
                return <img src={dragonIcon} alt="Circular dragon-type icon" />;
            case "dark":
                return <img src={darkIcon} alt="Circular dark-type icon" />;
            case "fairy":
                return <img src={fairyIcon} alt="Circular fairy-type icon" />;
            case "fire":
                return <img src={fireIcon} alt="Circular fire-type icon" />;
            case "":
                return <div />;
        }
    }

    static typeBanner(typeName) {
        switch (typeName) {
            case "normal":
                return (
                    <img src={normalBanner} alt="Circular normal-type icon" />
                );
            case "fighting":
                return (
                    <img
                        src={fightingBanner}
                        alt="Circular fighting-type icon"
                    />
                );
            case "flying":
                return (
                    <img src={flyingBanner} alt="Circular flying-type icon" />
                );
            case "poison":
                return (
                    <img src={poisonBanner} alt="Circular poison-type icon" />
                );
            case "ground":
                return (
                    <img src={groundBanner} alt="Circular ground-type icon" />
                );
            case "rock":
                return <img src={rockBanner} alt="Circular rock-type icon" />;
            case "bug":
                return <img src={bugBanner} alt="Circular bug-type icon" />;
            case "ghost":
                return <img src={ghostBanner} alt="Circular ghost-type icon" />;
            case "steel":
                return <img src={steelBanner} alt="Circular steel-type icon" />;
            case "water":
                return <img src={waterBanner} alt="Circular water-type icon" />;
            case "grass":
                return <img src={grassBanner} alt="Circular grass-type icon" />;
            case "electric":
                return (
                    <img
                        src={electricBanner}
                        alt="Circular electric-type icon"
                    />
                );
            case "psychic":
                return (
                    <img src={psychicBanner} alt="Circular psychic-type icon" />
                );
            case "ice":
                return <img src={iceBanner} alt="Circular ice-type icon" />;
            case "dragon":
                return (
                    <img src={dragonBanner} alt="Circular dragon-type icon" />
                );
            case "dark":
                return <img src={darkBanner} alt="Circular dark-type icon" />;
            case "fairy":
                return <img src={fairyBanner} alt="Circular fairy-type icon" />;
            case "fire":
                return <img src={fireBanner} alt="Circular fire-type icon" />;
            case "":
                return <div />;
        }
    }
}

export default GetImage;
