import React from 'react';

const TmLearnDisplay = ({ selectedMon, baseDexEntry }) => {
    console.log(selectedMon, baseDexEntry)
    let { id } = useParams();
    id = parseInt(id);
    
    let moveArray =
        selectedMon.levelLearn.length === 0
            ? baseDexEntry.forms[0].levelLearn
            : selectedMon.levelLearn;
    return (
        <div></div>
    )
}

export default TmLearnDisplay