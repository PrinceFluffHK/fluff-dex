import React from 'react';
import NavItem from '../../models/NavItem';
import { Grid } from '@mui/material';
import b2deMoves from '../../data/B2DE/moves';

const pokedexLink = new NavItem("", "/b2deDex", "Pokedex")
const encountersLink = new NavItem("", "/b2deEncounters", "Encounters")

const NavPage = (props) => {
    console.log(b2deMoves)
    return (
        <div>
            <Grid container spacing={2}>
                {pokedexLink.displayShort()}
                {encountersLink.displayShort()}
            </Grid>
            <div>
                HELLO FROM NAVPAGE
            </div>
        </div>
    )
}

export default NavPage