import React from 'react';
import NavItem from '../../models/NavItem';
import { Grid } from '@mui/material';

const pokedexLink = new NavItem("", "/b2deDex", "Pokedex")
const encountersLink = new NavItem("", "/b2deEncounters", "Encounters")

const NavPage = (props) => {
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