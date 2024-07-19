import { Link, useParams, useLocation } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars } from "@fortawesome/free-solid-svg-icons";
import Help from "../../models/Help";
import { romhackList } from "../Homepage";

const TopBar = ({ toggleArray }) => {
    const location = useLocation();
    let { id } = useParams();
    id = parseInt(id)
    const selectedRomhack = Help.findInArray(id, romhackList)

    const linkObjs = [
        {
            name: "Locations",
            link: `/${id}/locations`,
        },
        {
            name: "Pokedex",
            link: `/${id}/pokedex/regional`,
        },
        {
            name: "Trainers",
            link: `/${id}/trainers`,
        },
        {
            name: "Moves",
            link: `/${id}/moves`,
        },
        {
            name: "Marts",
            link: `/${id}/marts`,
        },
        {
            name: "Tutors",
            link: `/${id}/tutors`,
        },
    ];

    const links = linkObjs.map((link, index) => {
        const className = `top-bar-link`;

        if (link.name === "Tutors" && selectedRomhack.tutors.length === 0) {
            return <div key={index}/>
        }

        return (
            <Link className={className} to={link.link} key={index}>
                <b>{link.name}</b>
            </Link>
        );
    });

    const Toggle = (props) => {
        if (!toggleArray) {
            return <></>;
        }
        const toggleOptions = toggleArray.map((option, index) => {
            let className = "toggle-unselected";
            if (location.pathname.includes(option.link)) {
                className = "toggle-selected";
            }

            return (
                <Link className={className} to={option.link} key={index}>
                    <h3>{option.name}</h3>
                </Link>
            );
        });

        return <div className="toggle-container">{toggleOptions}</div>;
    };

    return (
        <div className="top-bar align-center justify-between">
            <Link to="/" className="home-icon">
                <FontAwesomeIcon icon={faHouse} size="xl" color="black" />
            </Link>
            <Toggle />
            <div className="invis-sm menu-topbar">{links}</div>
            <div className="vis-sm menu-topbar">
                <FontAwesomeIcon
                    icon={faBars}
                    size="xl"
                    color="black"
                    style={{ marginRight: "2rem" }}
                />
            </div>
        </div>
    );
};

export default TopBar;
