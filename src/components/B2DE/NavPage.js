import React from 'react';
import NavItem from '../../models/NavItem';
import { Grid } from '@mui/material';

const pokedexLink = new NavItem("", "/b2deDex")

const NavPage = (props) => {
    return (
        <div>
            <Grid container spacing={2}>
                
            </Grid>
            <div>
                HELLO FROM NAVPAGE
            </div>
        </div>
    )
}

export default NavPage