import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

class NavItem {
    constructor(thumbnail, link, name) {
        this.thumbnail = thumbnail;
        this.link = link;
        this.name = name;
    }
}

export default NavItem;
