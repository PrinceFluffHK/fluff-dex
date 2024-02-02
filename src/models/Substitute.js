class Substitute {
    move (moveArray, newMoves) {
        const newMoveArray = moveArray.map((move) => {
            let newMove = false
            newMoves.forEach(element => {
                if (element.id === move.id) {
                    newMove = element
                }
            });
            if (!newMove) {
                return move
            } else {
                return newMove
            }
        })
        
        return newMoveArray
    }
}

export default Substitute