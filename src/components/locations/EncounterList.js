import React from 'react';
import { useParams } from 'react-router-dom';
import Help from '../../models/Help';
import { romhackList } from '../Homepage';
import EncounterSheet from './EncounterSheet';

const EncounterList = (props) => {
    let { id } = useParams
    id = parseInt(id)
    const selectedRomhack = Help.findInArray(id, romhackList)
    const encounterList = selectedRomhack.locations.map((location, index) => {
        return (
            <EncounterSheet location={location}/>
        )
    })

    return (
        <div>
            {encounterList}
        </div>
    )
}

export default EncounterList