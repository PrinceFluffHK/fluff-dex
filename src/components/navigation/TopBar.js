import { Link, useParams, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Help from "../../models/Help";
import { romhackList } from "../Homepage";
import { Grid } from "@mui/material";

const TopBar = ({ toggleArray }) => {
    const location = useLocation();
    let { id } = useParams();
    id = parseInt(id);
    const selectedRomhack = Help.findInArray(id, romhackList);

    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        if (showMenu) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    };

    const FaIconSwitch = () => {
        if (showMenu) {
            return (
                <FontAwesomeIcon
                    icon={faX}
                    size="xl"
                    color="black"
                    style={{ marginRight: "2rem" }}
                    onClick={handleClick}
                    cursor="pointer"
                    />
                );
            } else {
                return (
                    <FontAwesomeIcon
                    icon={faBars}
                    size="xl"
                    color="black"
                    style={{ marginRight: "2rem" }}
                    cursor="pointer"
                    onClick={handleClick}
                />
            );
        }
    };

    const LinkMenu = () => {
        if (showMenu) {
            return linkObjs.map((link, index) => {
                if (
                    link.name === "Tutors" &&
                    selectedRomhack.tutors.length === 0
                ) {
                    return <div key={index} />;
                }
                return (
                    <Grid item xs={6} key={index}>
                        <Link to={link.link}>
                            <h1 className="menu-link">{link.name}</h1>
                        </Link>
                    </Grid>
                );
            });
        }
    };

    const linkObjs = [
        {
            name: "Locations",
            link: `/${id}/locations`,
        },
        {
            name: "Pokédex",
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
            return <div key={index} />;
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
        <div className="top-bar ">
            <div className="align-center justify-between top-bar-content">
                <Link to="/" className="home-icon">
                    <FontAwesomeIcon icon={faHouse} size="xl" color="black" />
                </Link>
                <Toggle />
                <div className="invis-sm menu-topbar">{links}</div>
                <div className="vis-sm menu-topbar">
                    <FaIconSwitch />
                </div>
            </div>
            <Grid container>
                <LinkMenu />
            </Grid>
        </div>
    );
};

export default TopBar;
