import React from 'react';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import b2de from '../data/b2deData';
import Help from '../models/Help';

const NavPage = (props) => {
    const { id } = useParams()
    const romhackList = [
        b2de
    ]
    const selectedRomhack = romhackList[id - 1]
    return (
        <div>
            <Grid container spacing={2}>
                {selectedRomhack.navGrid()}
            </Grid>
        </div>
    )
}

export default NavPage 