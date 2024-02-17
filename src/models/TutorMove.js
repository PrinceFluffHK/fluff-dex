import Help from "./Help"

class TutorMove {
    constructor (id, tutor, move, cost) {
        this.id = id
        this.tutor = tutor
        this.move = move
        this.cost = cost
    }

    static makeSingle(tutorMoveObj, movesArray, tutorsArray) {
        const move = Help.findInArray(tutorMoveObj.moveId, movesArray)
        const tutor = Help.findInArray(tutorMoveObj.tutorId, tutorsArray)

        return new TutorMove(tutorMoveObj.id, tutor, move, tutorMoveObj.cost)
    }

    static makeArray(tutorMoveObjArray, movesArray, tutorsArray) {
        return tutorMoveObjArray.map((tutorMoveObj) => {
            TutorMove.makeSingle(tutorMoveObj, movesArray, tutorsArray)
        })
    }
}

export default TutorMove