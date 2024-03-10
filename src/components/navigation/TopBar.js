import { Link, useLocation, useParams } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars } from "@fortawesome/free-solid-svg-icons";

const TopBar = (props) => {
    const { id } = useParams();
    const { pathname } = useLocation();
    // console.log("id:", id)

    const location = pathname.split("/")[2];

    const linkObjs = [
        {
            name: "Pokedex",
            link: `/${id}/pokedex`,
        },
        {
            name: "Trainers",
            link: `/${id}/trainers`,
        },
        {
            name: "Moves",
            link: `/${id}/moves`
        }
    ];

    const links = linkObjs.map((link) => {
        // const linkLocation = link.link.split("/")[2];
        const className = `top-bar-link`

        return (
            <Link className={className} to={link.link} key={link.name}>
                <b>{link.name}</b>
            </Link>
        );
    });

    return (
        <div className="top-bar align-center justify-between">
            <Link to="/" className="home-icon">
                <FontAwesomeIcon icon={faHouse} size="xl" color="black" />
            </Link>
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
