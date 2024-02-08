import React from 'react';
import { Grid } from '@mui/material';
import { b2de } from '../../data/romhacks';


const NavPage = (props) => {
    return (
        <div>
            <Grid container spacing={2}>
                {b2de.navGrid()}
            </Grid>
        </div>
    )
}

export default NavPage 