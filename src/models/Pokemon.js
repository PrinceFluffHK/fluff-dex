class Pokemon {
    constructor(
        id,
        name,
        gen,
        type1,
        type2,
        ability1,
        ability2,
        abilityH,
        hp,
        atk,
        def,
        spa,
        spd,
        spe,
        levelLearn = [],
        tmLearn = [],
        tutorLearn = [],
        modifier = "",
        sprite,
        profile,
        evolutions = [],
        evoLine = []
    ) {
        this.id = id;
        this.name = name;
        this.gen = gen;
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
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        this.profile = profile
            ? profile
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        this.evolutions = evolutions;
        this.evoLine = evoLine
    }

    static makeEdits(mon, changes) {
        const newMon = { ...mon, ...changes };
        return [
            newMon.id,
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

    static makeSingle(species, typesArray, abilitiesArray) {
        const type1 = typesArray.find(type => {return type.id === species.type1Id})
        const type2 = typesArray.find(type => {return type.id === species.type2Id})
        const ability1 = abilitiesArray.find(ability => {return ability.id === species.ability1Id})
        const ability2 = abilitiesArray.find(ability => {return ability.id === species.ability2Id})
        const abilityH = abilitiesArray.find(ability => {return ability.id === species.abilityHId})
        return new Pokemon(species.id, species.name, type1, type2, )
    }

    static makeArray(rawJsonArray, typesArray, abilitiesArray) {
        const jsonArray = JSON.parse(rawJsonArray)
        return jsonArray.map(mon => {
            return Pokemon.makeSingle(mon, typesArray, abilitiesArray)
        })
    }

    dexListItem() {
        // return (
        // )
    }
}

export default Pokemon;
