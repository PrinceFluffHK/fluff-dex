import { Grid } from "@mui/material";
import React from "react";
import { Link, Route } from "react-router-dom";

class Romhack {
    constructor(
        id,
        name,
        thumbnailUrl,
        species,
        nationalDex,
        regionalDex,
        moves,
        abilities,
        types,
        tutors,
        tutorMoves
    ) {
        this.id = id;
        this.name = name;
        this.thumbnailUrl = thumbnailUrl;
        this.species = species;
        this.nationalDex = nationalDex;
        this.regionalDex = regionalDex;
        this.moves = moves;
        this.abilities = abilities;
        this.types = types;
        this.tutors = tutors;
        this.tutorMoves = tutorMoves;
    }

    navDisplayShort() {
        return (
            <Grid item xs={12} md={6}>
                <Link to={this.link}>
                    <div className="nav-container-short">
                        <div>{this.name}</div>
                    </div>
                </Link>
            </Grid>
        );
    }

    navGrid() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Link to={`Pokedex`}>
                        <div className="flex center">
                            <h1>Pokedex</h1>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to={`Trainers`}>
                        <div className="flex center">
                            <h1>Trainers</h1>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to={`Encounters`}>
                        <div className="flex center">
                            <h1>Encounters</h1>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to={`Items`}>
                        <div className="flex center">
                            <h1>Items</h1>
                        </div>
                    </Link>
                </Grid>
            </Grid>
        );
    }
}

export default Romhack;
