class Tutor {
    constructor(id, name, location, currency, moves) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.currency = currency;
    }

    static makeSingle(tutorObj) {
        return new Tutor(
            tutorObj.id,
            tutorObj.name,
            tutorObj.location,
            tutorObj.currency
        );
    }

    static makeArray(tutorObjArray) {
        return tutorObjArray.map(tutorObj => {
            return Tutor.makeSingle(tutorObj)
        })
    }
}

export default Tutor;
