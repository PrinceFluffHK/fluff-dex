import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

class NavItem {
    constructor(thumbnail, link, name) {
        this.thumbnail = thumbnail;
        this.link = link;
        this.name = name;
    }

    displayWide() {
        return (
            <Grid item xs={12} md={6}>
                <Link to={this.link}>
                    <div className="nav-container-wide">
                        <div>{this.name}</div>
                    </div>
                </Link>
            </Grid>
        );
    }

    displayTall() {
        return (
            <Grid item xs={12} md={6}>
                <Link to={this.link}>
                    <div className="nav-container-tall">
                        <div>{this.name}</div>
                    </div>
                </Link>
            </Grid>
        );
    }
}

export default NavItem;
