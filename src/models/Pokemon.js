class Pokemon {
    constructor(
        natNum,
        name,
        type1Id,
        type2Id,
        ability1Id,
        ability2Id,
        abilityHId,
        hp,
        atk,
        def,
        spa,
        spd,
        spe,
        modifier
    ) {
        this.natNum = natNum;
        this.name = name;
        this.type1Id = type1Id;
        this.type2Id = type2Id;
        this.ability1Id = ability1Id;
        this.ability2Id = ability2Id;
        this.abilityHId = abilityHId;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spa = spa;
        this.spd = spd;
        this.spe = spe;
        this.modifier = modifier;
    }
}

export default Pokemon;
