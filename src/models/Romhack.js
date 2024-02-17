import { Grid } from "@mui/material";
import React from "react";
import { Link, Route } from "react-router-dom";

class Romhack {
    constructor(
        name,
        link,
        thumbnailUrl,
        homeComponent,
        pokedexComponent,
        trainersComponent,
        encountersComponent,
        itemsComponent,
        species,
        speciesEdits,
        moves,
        abilities,
        tutors,
    ) {
        this.name = name;
        this.link = link;
        this.thumbnailUrl = thumbnailUrl;
        this.homeComponent = homeComponent;
        this.pokedexComponent = pokedexComponent;
        this.trainersComponent = trainersComponent;
        this.encountersComponent = encountersComponent;
        this.itemsComponent = itemsComponent;
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

    navGrid() {
        return(
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Link to={`Pokedex`}><div className="flex center"><h1>Pokedex</h1></div></Link>
                    <Link to={`Trainers`}><div className="flex center"><h1>Trainers</h1></div></Link>
                    <Link to={`Encounters`}><div className="flex center"><h1>Encounters</h1></div></Link>
                    <Link to={`Items`}><div className="flex center"><h1>Items</h1></div></Link>
                </Grid>
            </Grid>
        )
    }

    homeCard = () => {
        return <div>hello from {this.name}!</div>;
    };

    routes = () => {
        return (
            <>
                <Route
                    exact
                    path={`/${this.link}`}
                    Component={this.homeComponent}
                />
                <Route
                    exact
                    path={`/${this.link}/Pokedex`}
                    Component={this.pokedexComponent}
                />
                <Route
                    exact
                    path={`/${this.link}/Trainers`}
                    Component={this.trainersComponent}
                />
                <Route
                    exact
                    path={`/${this.link}/Encounters`}
                    Component={this.encountersComponent}
                />
                <Route
                    exact
                    path={`/${this.link}/Items`}
                    Component={this.itemsComponent}
                />
            </>
        );
    };
}

export default Romhack;
