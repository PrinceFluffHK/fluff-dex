import React from 'react';
import { Grid } from '@mui/material';
import { b2de } from '../../data/romhacks';

// const pokedexLink = new NavItem("", "/b2deDex", "Pokedex")
// const encountersLink = new NavItem("", "/b2deEncounters", "Encounters")

const NavPage = (props) => {
    // console.log(b2deMoves)
    return (
        <div>
            <Grid container spacing={2}>
                {b2de.navGrid()}
                {/* {encountersLink.displayShort()} */}
            </Grid>
            <div>
                HELLO FROM NAVPAGE
            </div>
        </div>
    )
}

export default NavPage