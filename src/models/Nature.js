class Nature {
    constructor(id, name, plusStat, minusStat) {
        this.id = id;
        this.name = name;
        this.plusStat = plusStat;
        this.minusStat = minusStat;
    }

    static makeSingle(natureObj) {
        const { id, name, plusStat, minusStat } = natureObj;
        return new Nature(id, name, plusStat, minusStat);
    }

    static makeArray(natureData) {
        return natureData.map(natureObj => {
            return Nature.makeSingle(natureObj)
        })
    }
}

export default Nature;
