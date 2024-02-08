class Pokemon {
    constructor(
        natNum,
        name,
        type1,
        type2,
        ability1,
        ability2,
        abilityH,
        hp = 0,
        atk = 0,
        def = 0,
        spa = 0,
        spd = 0,
        spe = 0,
        levelLearn = [],
        tmLearn = [],
        tutorLearn = [],
        modifier = "",
        sprite,
        profile,
        evolutions = [],
        evoLine = []
    ) {
        this.natNum = natNum;
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
        this.ability1 = ability1;
        this.ability2 = ability2;
        this.abilityH = abilityH;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spa = spa;
        this.spd = spd;
        this.spe = spe;
        this.levelLearn = levelLearn;
        this.tmLearn = tmLearn;
        this.tutorLearn = tutorLearn;
        this.modifier = modifier;
        this.sprite = sprite
            ? sprite
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${natNum}.png`;
        this.profile = profile
            ? profile
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${natNum}.png`;
        this.evolutions = evolutions;
        this.evoLine = evoLine
    }

    static makeEdits(mon, changes) {
        const newMon = { ...mon, ...changes };
        return [
            newMon.natNum,
            newMon.name,
            newMon.type1,
            newMon.type2,
            newMon.ability1,
            newMon.ability2,
            newMon.abilityH,
            newMon.hp,
            newMon.atk,
            newMon.def,
            newMon.spa,
            newMon.spd,
            newMon.spe,
            newMon.levelLearn,
            newMon.tmLearn,
            newMon.tutorLearn,
            newMon.modifier,
            newMon.sprite,
            newMon.profile,
            newMon.evolutions,
        ];
    }

    

    dexListItem() {
        // return (
        // )
    }
}

export default Pokemon;
