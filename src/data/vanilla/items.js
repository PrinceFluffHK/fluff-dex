import Item from "../../models/Item";

const items = {
    masterBall: new Item(
        1,
        "Pokeballs",
        "The best Ball with the ultimate level of performance. It will catch any wild Pokémon without fail.",
        "Master Ball"
    ),

    ultraBall: new Item(
        2,
        "Pokeballs",
        "An ultra-performance Ball that provides a higher Pokémon catch rate than a Great Ball.",
        "Ultra Ball"
    ),

    greatBall: new Item(
        3,
        "Pokeballs",
        "A good, high-performance Ball that provides a higher Pokémon catch rate than a standard Poké Ball.",
        "Great Ball"
    ),

    pokéBall: new Item(
        4,
        "Pokeballs",
        "A device for catching wild Pokémon. It is thrown like a ball at the target. It is designed as a capsule system.",
        "Poké Ball"
    ),

    safariBall: new Item(
        5,
        "Pokeballs",
        "A special Poké Ball that is used only in the Great Marsh. It is decorated in a camouflage pattern.",
        "Safari Ball"
    ),

    netBall: new Item(
        6,
        "Pokeballs",
        "A somewhat different Poké Ball that works especially well on Water- and Bug-type Pokémon.",
        "Net Ball"
    ),

    diveBall: new Item(
        7,
        "Pokeballs",
        "A somewhat different Poké Ball that works especially well on Pokémon that live underwater.",
        "Dive Ball"
    ),

    nestBall: new Item(
        8,
        "Pokeballs",
        "A somewhat different Poké Ball that works especially well on weaker Pokémon in the wild.",
        "Nest Ball"
    ),

    repeatBall: new Item(
        9,
        "Pokeballs",
        "A somewhat different Poké Ball that works especially well on Pokémon species that were previously caught.",
        "Repeat Ball"
    ),

    timerBall: new Item(
        10,
        "Pokeballs",
        "A somewhat different BALL that becomes progressively better the more turns there are in a battle.",
        "Timer Ball"
    ),

    luxuryBall: new Item(
        11,
        "Pokeballs",
        "A comfortable Poké Ball that makes a caught wild Pokémon quickly grow friendly.",
        "Luxury Ball"
    ),

    premierBall: new Item(
        12,
        "Pokeballs",
        "A somewhat rare Poké Ball that has been specially made to commemorate an event of some sort.",
        "Premier Ball"
    ),

    duskBall: new Item(
        13,
        "Pokeballs",
        "A somewhat different Poké Ball that makes it easier to catch wild Pokémon at night or in dark places like caves.",
        "Dusk Ball"
    ),

    healBall: new Item(
        14,
        "Pokeballs",
        "A remedial Poké Ball that restores the caught Pokémon's HP and eliminates any status problem.",
        "Heal Ball"
    ),

    quickBall: new Item(
        15,
        "Pokeballs",
        "A somewhat different Poké Ball that provides a better catch rate if it is used at the start of a wild encounter.",
        "Quick Ball"
    ),

    cherishBall: new Item(
        16,
        "Pokeballs",
        "A quite rare Poké Ball that has been specially crafted to commemorate an occasion of some sort.",
        "Cherish Ball"
    ),

    potion: new Item(17, "Medicine", "Restores 20 HP.", "Potion"),

    antidote: new Item(
        18,
        "Medicine",
        "A spray-type medicine. It lifts the effect of poison from one Pokémon.",
        "Antidote"
    ),

    burnHeal: new Item(
        19,
        "Medicine",
        "A spray-type medicine. It heals a single Pokémon that is suffering from a burn.",
        "Burn Heal"
    ),

    iceHeal: new Item(
        20,
        "Medicine",
        "A spray-type medicine. It defrosts a Pokémon that has been frozen solid.",
        "Ice Heal"
    ),

    awakening: new Item(
        21,
        "Medicine",
        "A spray-type medicine. It awakens a Pokémon from the clutches of sleep.",
        "Awakening"
    ),

    paralyzeHeal: new Item(
        22,
        "Medicine",
        "A spray-type medicine. It eliminates paralysis from a single Pokémon.",
        "Paralyze Heal"
    ),

    fullRestore: new Item(
        23,
        "Medicine",
        "A medicine that fully restores the HP and heals any status problems of a single Pokémon.",
        "Full Restore"
    ),

    maxPotion: new Item(24, "Medicine", "Fully restores HP.", "Max Potion"),

    hyperPotion: new Item(25, "Medicine", "Restores 120 HP.", "Hyper Potion"),

    superPotion: new Item(26, "Medicine", "Restores 60 HP.", "Super Potion"),

    fullHeal: new Item(
        27,
        "Medicine",
        "A spray-type medicine. It heals all the status problems of a single Pokémon.",
        "Full Heal"
    ),

    revive: new Item(
        28,
        "Medicine",
        "A medicine that revives a fainted Pokémon. It restores half the Pokémon's maximum HP.",
        "Revive"
    ),

    maxRevive: new Item(
        29,
        "Medicine",
        "A medicine that revives a fainted Pokémon. It fully restores the Pokémon's HP.",
        "Max Revive"
    ),

    freshWater: new Item(30, "Medicine", "Restores 30 HP.", "Fresh Water"),

    sodaPop: new Item(31, "Medicine", "Restores 50 HP.", "Soda Pop"),

    lemonade: new Item(32, "Medicine", "Restores 70 HP.", "Lemonade"),

    moomooMilk: new Item(
        33,
        "Medicine",
        "Milk with a very high nutrition content. It restores the HP of one Pokémon by 100 points.",
        "Moomoo Milk"
    ),

    energyPowder: new Item(
        34,
        "Medicine",
        "Restores 60 HP but lowers Friendship.",
        "Energy Powder"
    ),

    energyRoot: new Item(
        35,
        "Medicine",
        "Restores 120 HP but lowers Friendship.",
        "Energy Root"
    ),

    healPowder: new Item(
        36,
        "Medicine",
        "Heals all status problems, but lowers Friendship.",
        "Heal Powder"
    ),

    revivalHerb: new Item(
        37,
        "Medicine",
        "Revives a Pokémon to max HP, but lowers Friendship.",
        "Revival Herb"
    ),

    ether: new Item(
        38,
        "Medicine",
        "It restores the PP of a Pokémon's selected move by a maximum of 10 points.",
        "Ether"
    ),

    maxEther: new Item(
        39,
        "Medicine",
        "It fully restores the PP of a single selected move that has been learned by the target Pokémon.",
        "Max Ether"
    ),

    elixir: new Item(
        40,
        "Medicine",
        "It restores the PP of all the moves learned by the targeted Pokémon by 10 points each.",
        "Elixir"
    ),

    maxElixir: new Item(
        41,
        "Medicine",
        "It fully restores the PP of all the moves learned by the targeted Pokémon.",
        "Max Elixir"
    ),

    lavaCookie: new Item(
        42,
        "Medicine",
        "Heals all major status conditions.",
        "Lava Cookie"
    ),

    berryJuice: new Item(
        43,
        "Medicine",
        "A 100% pure juice made of Berries. It restores the HP of one Pokémon by just 20 points.",
        "Berry Juice"
    ),

    sacredAsh: new Item(
        44,
        "Medicine",
        "It revives all fainted Pokémon. In doing so, it also fully restores their HP.",
        "Sacred Ash"
    ),

    hPUp: new Item(45, "Medicine", "Increases HP EVs by 10.", "HP Up"),

    protein: new Item(46, "Medicine", "Increases Attack EVs by 10.", "Protein"),

    iron: new Item(47, "Medicine", "Increases Defense EVs by 10.", "Iron"),

    carbos: new Item(48, "Medicine", "Increases Speed EVs by 10.", "Carbos"),

    calcium: new Item(
        49,
        "Medicine",
        "Increases Special Attack EVs by 10.",
        "Calcium"
    ),

    rareCandy: new Item(
        50,
        "Medicine",
        "A candy that is packed with energy. It raises the level of a single Pokémon by one.",
        "Rare Candy"
    ),

    pPUp: new Item(
        51,
        "Medicine",
        "It slightly raises the maximum PP of a selected move that has been learned by the target Pokémon.",
        "PP Up"
    ),

    zinc: new Item(
        52,
        "Medicine",
        "Increases Special Defense EVs by 10.",
        "Zinc"
    ),

    pPMax: new Item(
        53,
        "Medicine",
        "It maximally raises the top PP of a selected move that has been learned by the target Pokémon.",
        "PP Max"
    ),

    oldGateau: new Item(
        54,
        "Medicine",
        "Heals all major status conditions.",
        "Old Gateau"
    ),

    guardSpec: new Item(
        55,
        "Battle items",
        "Prevents stat reduction for five turns.",
        "Guard Spec."
    ),

    direHit: new Item(
        56,
        "Battle items",
        "Raises critical-hit ratio of a Pokémon in battle.",
        "Dire Hit"
    ),

    xAttack: new Item(
        57,
        "Battle items",
        "Raises Attack of a Pokémon in battle.",
        "X Attack"
    ),

    xDefense: new Item(
        58,
        "Battle items",
        "Raises Defense of a Pokémon in battle.",
        "X Defense"
    ),

    xSpeed: new Item(
        59,
        "Battle items",
        "Raises Speed of a Pokémon in battle.",
        "X Speed"
    ),

    xAccuracy: new Item(
        60,
        "Battle items",
        "Raises Accuracy of a Pokémon in battle.",
        "X Accuracy"
    ),

    xSpAtk: new Item(
        61,
        "Battle items",
        "Raises Special Attack of a Pokémon in battle.",
        "X Sp. Atk"
    ),

    xSpDef: new Item(
        62,
        "Battle items",
        "Raises Special Defense of a Pokémon in battle.",
        "X Sp. Def"
    ),

    pokéDoll: new Item(
        63,
        "General items",
        "A doll that attracts Pokémon. Use it to flee from any battle with a wild Pokémon.",
        "Poké Doll"
    ),

    fluffyTail: new Item(
        64,
        "General items",
        "An item that attracts Pokémon. Use it to flee from any battle with a wild Pokémon.",
        "Fluffy Tail"
    ),

    blueFlute: new Item(
        65,
        "General items",
        "A toy flute made from blue glass. A maniac will buy it for a high price.",
        "Blue Flute"
    ),

    yellowFlute: new Item(
        66,
        "General items",
        "A toy flute made from yellow glass. A maniac will buy it for a high price.",
        "Yellow Flute"
    ),

    redFlute: new Item(
        67,
        "General items",
        "A toy flute made from red glass. A maniac will buy it for a high price.",
        "Red Flute"
    ),

    blackFlute: new Item(
        68,
        "General items",
        "A toy flute made from black glass. A maniac will buy it for a high price.",
        "Black Flute"
    ),

    whiteFlute: new Item(
        69,
        "General items",
        "A toy flute made from white glass. A maniac will buy it for a high price.",
        "White Flute"
    ),

    shoalSalt: new Item(
        70,
        "General items",
        "Pure salt that can be discovered deep inside the Shoal Cave. A maniac will buy it for a high price.",
        "Shoal Salt"
    ),

    shoalShell: new Item(
        71,
        "General items",
        "A pretty seashell that can be found deep inside the Shoal Cave. A maniac will buy it for a high price.",
        "Shoal Shell"
    ),

    redShard: new Item(
        72,
        "General items",
        "A small red shard. It appears to be from some sort of implement made long ago.",
        "Red Shard"
    ),

    blueShard: new Item(
        73,
        "General items",
        "A small blue shard. It appears to be from some sort of implement made long ago.",
        "Blue Shard"
    ),

    yellowShard: new Item(
        74,
        "General items",
        "A small yellow shard. It appears to be from some sort of implement made long ago.",
        "Yellow Shard"
    ),

    greenShard: new Item(
        75,
        "General items",
        "A small green shard. It appears to be from some sort of implement made long ago.",
        "Green Shard"
    ),

    superRepel: new Item(
        76,
        "General items",
        "An item that prevents weak wild Pokémon from appearing for 200 steps after its use.",
        "Super Repel"
    ),

    maxRepel: new Item(
        77,
        "General items",
        "An item that prevents weak wild Pokémon from appearing for 250 steps after its use.",
        "Max Repel"
    ),

    escapeRope: new Item(
        78,
        "General items",
        "A long, durable rope. Use it to escape instantly from a cave or a dungeon.",
        "Escape Rope"
    ),

    repel: new Item(
        79,
        "General items",
        "An item that prevents weak wild Pokémon from appearing for 100 steps after its use.",
        "Repel"
    ),

    sunStone: new Item(
        80,
        "General items",
        "Evolves certain species of Pokémon.",
        "Sun Stone"
    ),

    moonStone: new Item(
        81,
        "General items",
        "Evolves certain species of Pokémon.",
        "Moon Stone"
    ),

    fireStone: new Item(
        82,
        "General items",
        "Evolves certain species of Pokémon.",
        "Fire Stone"
    ),

    thunderStone: new Item(
        83,
        "General items",
        "Evolves certain species of Pokémon.",
        "Thunder Stone"
    ),

    waterStone: new Item(
        84,
        "General items",
        "Evolves certain species of Pokémon.",
        "Water Stone"
    ),

    leafStone: new Item(
        85,
        "General items",
        "Evolves certain species of Pokémon.",
        "Leaf Stone"
    ),

    tinyMushroom: new Item(
        86,
        "General items",
        "A small and rare mushroom. It is sought after by collectors.",
        "Tiny Mushroom"
    ),

    bigMushroom: new Item(
        87,
        "General items",
        "A large and rare mushroom. It is sought after by collectors.",
        "Big Mushroom"
    ),

    pearl: new Item(
        88,
        "General items",
        "A somewhat-small pearl that sparkles in a pretty silver color. It can be sold cheaply to shops.",
        "Pearl"
    ),

    bigPearl: new Item(
        89,
        "General items",
        "A quite-large pearl that sparkles in a pretty silver color. It can be sold at a high price to shops.",
        "Big Pearl"
    ),

    stardust: new Item(
        90,
        "General items",
        "Lovely, red-colored sand with a loose, silky feel. It can be sold at a high price to shops.",
        "Stardust"
    ),

    starPiece: new Item(
        91,
        "General items",
        "A shard of a pretty gem that sparkles in a red color. It can be sold at a high price to shops.",
        "Star Piece"
    ),

    nugget: new Item(
        92,
        "General items",
        "A nugget of pure gold that gives off a lustrous gleam. It can be sold at a high price to shops.",
        "Nugget"
    ),

    heartScale: new Item(
        93,
        "General items",
        "A pretty, heart-shaped scale that is extremely rare. It glows faintly in the colors of the rainbow.",
        "Heart Scale"
    ),

    honey: new Item(
        94,
        "General items",
        "A sweet honey with a lush aroma that attracts wild Pokémon when it is used in grass, caves, or on special trees.",
        "Honey"
    ),

    growthMulch: new Item(
        95,
        "General items",
        "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.",
        "Growth Mulch"
    ),

    dampMulch: new Item(
        96,
        "General items",
        "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.",
        "Damp Mulch"
    ),

    stableMulch: new Item(
        97,
        "General items",
        "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.",
        "Stable Mulch"
    ),

    gooeyMulch: new Item(
        98,
        "General items",
        "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.",
        "Gooey Mulch"
    ),

    rootFossil: new Item(
        99,
        "General items",
        "A fossil of an ancient Pokémon that lived in the sea. It appears to be part of a plant root.",
        "Root Fossil"
    ),

    clawFossil: new Item(
        100,
        "General items",
        "A fossil of an ancient Pokémon that lived in the sea. It appears to be part of a claw.",
        "Claw Fossil"
    ),

    domeFossil: new Item(
        102,
        "General items",
        "A fossil of an ancient Pokémon that lived in the sea. It appears to be part of a shell.",
        "Dome Fossil"
    ),

    oldAmber: new Item(
        103,
        "General items",
        "A piece of amber that contains the genetic material of an ancient Pokémon. It is clear with a reddish tint.",
        "Old Amber"
    ),

    armorFossil: new Item(
        104,
        "General items",
        "A fossil from a prehistoric Pokémon that lived on the land. It appears to be part of a collar.",
        "Armor Fossil"
    ),

    skullFossil: new Item(
        105,
        "General items",
        "A fossil from a prehistoric Pokémon that lived on the land. It appears to be part of a head.",
        "Skull Fossil"
    ),

    rareBone: new Item(
        106,
        "General items",
        "A bone that is extremely valuable for Pokémon archeology. It can be sold for a high price to shops.",
        "Rare Bone"
    ),

    shinyStone: new Item(
        107,
        "General items",
        "Evolves certain species of Pokémon.",
        "Shiny Stone"
    ),

    duskStone: new Item(
        108,
        "General items",
        "Evolves certain species of Pokémon.",
        "Dusk Stone"
    ),

    dawnStone: new Item(
        109,
        "General items",
        "Evolves certain species of Pokémon.",
        "Dawn Stone"
    ),

    ovalStone: new Item(
        110,
        "General items",
        "Evolves Happiny when held.",
        "Oval Stone"
    ),

    oddKeystone: new Item(
        111,
        "General items",
        "A vital item that is needed to keep a stone tower from collapsing. Voices can be heard from it occasionally.",
        "Odd Keystone"
    ),

    griseousOrb: new Item(
        112,
        "Hold items",
        "Increases the power of Dragon- and Ghost-type moves when held by Giratina, and changes it to Origin Forme.",
        "Griseous Orb"
    ),

    tea: new Item(
        113,
        "Key Items",
        "An aromatic tea prepared by an old lady. It will slake even the worst thirst.",
        "Tea"
    ),

    autograph: new Item(
        115,
        "Key Items",
        'The autograph you got from the Vermilion City Gym Leader, Lt. Surge. He wrote, "Good luck!"',
        "Autograph"
    ),

    douseDrive: new Item(
        116,
        "Hold items",
        "Changes Techno Blast to a Water-type move when held by Genesect.",
        "Douse Drive"
    ),

    shockDrive: new Item(
        117,
        "Hold items",
        "Changes Techno Blast to an Electric-type move when held by Genesect.",
        "Shock Drive"
    ),

    burnDrive: new Item(
        118,
        "Hold items",
        "Changes Techno Blast to a Fire-type move when held by Genesect.",
        "Burn Drive"
    ),

    chillDrive: new Item(
        119,
        "Hold items",
        "Changes Techno Blast to an Ice-type move when held by Genesect.",
        "Chill Drive"
    ),

    tMCase: new Item(
        123,
        "Key Items",
        "A case that holds TMs and HMs. It is attached to the BAG's compartment for important items.",
        "TM Case"
    ),

    sweetHeart: new Item(
        134,
        "Medicine",
        "Very sweet chocolate. It restores the HP of one Pokémon by only 20 points.",
        "Sweet Heart"
    ),

    adamantOrb: new Item(
        135,
        "Hold items",
        "Increases the power of Dragon- and Steel-type moves when held by Dialga.",
        "Adamant Orb"
    ),

    lustrousOrb: new Item(
        136,
        "Hold items",
        "Increases the power of Dragon- and Water-type moves when held by Palkia.",
        "Lustrous Orb"
    ),

    cheriBerry: new Item(
        149,
        "Berries",
        "If held by a Pokémon, it recovers from paralysis.",
        "Cheri Berry"
    ),

    chestoBerry: new Item(
        150,
        "Berries",
        "If held by a Pokémon, it recovers from sleep.",
        "Chesto Berry"
    ),

    pechaBerry: new Item(
        151,
        "Berries",
        "If held by a Pokémon, it recovers from poison.",
        "Pecha Berry"
    ),

    rawstBerry: new Item(
        152,
        "Berries",
        "If held by a Pokémon, it recovers from a burn.",
        "Rawst Berry"
    ),

    aspearBerry: new Item(
        153,
        "Berries",
        "If held by a Pokémon, it defrosts it.",
        "Aspear Berry"
    ),

    leppaBerry: new Item(
        154,
        "Berries",
        "If held by a Pokémon, it restores a move's PP by 10.",
        "Leppa Berry"
    ),

    oranBerry: new Item(
        155,
        "Berries",
        "If held by a Pokémon, it heals the user by just 10 HP.",
        "Oran Berry"
    ),

    persimBerry: new Item(
        156,
        "Berries",
        "If held by a Pokémon, it recovers from confusion.",
        "Persim Berry"
    ),

    lumBerry: new Item(
        157,
        "Berries",
        "If held by a Pokémon, it recovers from any status problem.",
        "Lum Berry"
    ),

    sitrusBerry: new Item(
        158,
        "Berries",
        "If held by a Pokémon, it heals the user's HP a little.",
        "Sitrus Berry"
    ),

    figyBerry: new Item(
        159,
        "Berries",
        "Restores HP if it's low, but may cause confusion.",
        "Figy Berry"
    ),

    wikiBerry: new Item(
        160,
        "Berries",
        "Restores HP if it's low, but may cause confusion.",
        "Wiki Berry"
    ),

    magoBerry: new Item(
        161,
        "Berries",
        "Restores HP if it's low, but may cause confusion.",
        "Mago Berry"
    ),

    aguavBerry: new Item(
        162,
        "Berries",
        "Restores HP if it's low, but may cause confusion.",
        "Aguav Berry"
    ),

    iapapaBerry: new Item(
        163,
        "Berries",
        "Restores HP if it's low, but may cause confusion.",
        "Iapapa Berry"
    ),

    razzBerry: new Item(
        164,
        "Berries",
        "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
        "Razz Berry"
    ),

    blukBerry: new Item(
        165,
        "Berries",
        "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
        "Bluk Berry"
    ),

    nanabBerry: new Item(
        166,
        "Berries",
        "A Berry to be used in cooking. Calms a Pokémon in battle, in Let's Go Pikachu/Eevee.",
        "Nanab Berry"
    ),

    wepearBerry: new Item(
        167,
        "Berries",
        "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
        "Wepear Berry"
    ),

    pinapBerry: new Item(
        168,
        "Berries",
        "A Berry to be used in cooking. Increases chances of getting items when a Pokémon is caught, in Pokémon Let's Go.",
        "Pinap Berry"
    ),

    kelpsyBerry: new Item(
        170,
        "Berries",
        "Increases Friendship but lowers Attack EVs.",
        "Kelpsy Berry"
    ),

    qualotBerry: new Item(
        171,
        "Berries",
        "Increases Friendship but lowers Defense EVs.",
        "Qualot Berry"
    ),

    hondewBerry: new Item(
        172,
        "Berries",
        "Increases Friendship but lowers Special Attack EVs.",
        "Hondew Berry"
    ),

    grepaBerry: new Item(
        173,
        "Berries",
        "Increases Friendship but lowers Special Defense EVs.",
        "Grepa Berry"
    ),

    tamatoBerry: new Item(
        174,
        "Berries",
        "Increases Friendship but lowers Speed EVs.",
        "Tamato Berry"
    ),

    cornnBerry: new Item(
        175,
        "Berries",
        "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
        "Cornn Berry"
    ),

    magostBerry: new Item(
        176,
        "Berries",
        "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
        "Magost Berry"
    ),

    rabutaBerry: new Item(
        177,
        "Berries",
        "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
        "Rabuta Berry"
    ),

    nomelBerry: new Item(
        178,
        "Berries",
        "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
        "Nomel Berry"
    ),

    spelonBerry: new Item(
        179,
        "Berries",
        "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
        "Spelon Berry"
    ),

    pamtreBerry: new Item(
        180,
        "Berries",
        "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
        "Pamtre Berry"
    ),

    watmelBerry: new Item(
        181,
        "Berries",
        "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
        "Watmel Berry"
    ),

    durinBerry: new Item(
        182,
        "Berries",
        "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
        "Durin Berry"
    ),

    belueBerry: new Item(
        183,
        "Berries",
        "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
        "Belue Berry"
    ),

    occaBerry: new Item(
        184,
        "Berries",
        "Weakens a supereffective Fire-type attack against the holding Pokémon.",
        "Occa Berry"
    ),

    passhoBerry: new Item(
        185,
        "Berries",
        "Weakens a supereffective Water-type attack against the holding Pokémon.",
        "Passho Berry"
    ),

    wacanBerry: new Item(
        186,
        "Berries",
        "Weakens a supereffective Electric-type attack against the holding Pokémon.",
        "Wacan Berry"
    ),

    rindoBerry: new Item(
        187,
        "Berries",
        "Weakens a supereffective Grass-type attack against the holding Pokémon.",
        "Rindo Berry"
    ),

    yacheBerry: new Item(
        188,
        "Berries",
        "Weakens a supereffective Ice-type attack against the holding Pokémon.",
        "Yache Berry"
    ),

    chopleBerry: new Item(
        189,
        "Berries",
        "Weakens a supereffective Fighting-type attack against the holding Pokémon.",
        "Chople Berry"
    ),

    kebiaBerry: new Item(
        190,
        "Berries",
        "Weakens a supereffective Poison-type attack against the holding Pokémon.",
        "Kebia Berry"
    ),

    shucaBerry: new Item(
        191,
        "Berries",
        "Weakens a supereffective Ground-type attack against the holding Pokémon.",
        "Shuca Berry"
    ),

    cobaBerry: new Item(
        192,
        "Berries",
        "Weakens a supereffective Flying-type attack against the holding Pokémon.",
        "Coba Berry"
    ),

    payapaBerry: new Item(
        193,
        "Berries",
        "Weakens a supereffective Psychic-type attack against the holding Pokémon.",
        "Payapa Berry"
    ),

    tangaBerry: new Item(
        194,
        "Berries",
        "Weakens a supereffective Bug-type attack against the holding Pokémon.",
        "Tanga Berry"
    ),

    chartiBerry: new Item(
        195,
        "Berries",
        "Weakens a supereffective Rock-type attack against the holding Pokémon.",
        "Charti Berry"
    ),

    kasibBerry: new Item(
        196,
        "Berries",
        "Weakens a supereffective Ghost-type attack against the holding Pokémon.",
        "Kasib Berry"
    ),

    habanBerry: new Item(
        197,
        "Berries",
        "Weakens a supereffective Dragon-type attack against the holding Pokémon.",
        "Haban Berry"
    ),

    colburBerry: new Item(
        198,
        "Berries",
        "Weakens a supereffective Dark-type attack against the holding Pokémon.",
        "Colbur Berry"
    ),

    babiriBerry: new Item(
        199,
        "Berries",
        "Weakens a supereffective Steel-type attack against the holding Pokémon.",
        "Babiri Berry"
    ),

    chilanBerry: new Item(
        200,
        "Berries",
        "Weakens a Normal-type attack against the Pokémon holding this berry.",
        "Chilan Berry"
    ),

    liechiBerry: new Item(
        201,
        "Berries",
        "Raises Attack when HP is low.",
        "Liechi Berry"
    ),

    ganlonBerry: new Item(
        202,
        "Berries",
        "Raises Defense when HP is low.",
        "Ganlon Berry"
    ),

    salacBerry: new Item(
        203,
        "Berries",
        "Raises Speed when HP is low.",
        "Salac Berry"
    ),

    petayaBerry: new Item(
        204,
        "Berries",
        "Raises Special Attack when HP is low.",
        "Petaya Berry"
    ),

    apicotBerry: new Item(
        205,
        "Berries",
        "Raises Special Defense when HP is low.",
        "Apicot Berry"
    ),

    lansatBerry: new Item(
        206,
        "Berries",
        "Increases critical-hit ratio when HP is low.",
        "Lansat Berry"
    ),

    starfBerry: new Item(
        207,
        "Berries",
        "Sharply raises a random stat when HP is low.",
        "Starf Berry"
    ),

    enigmaBerry: new Item(
        208,
        "Berries",
        "If held by a Pokémon, it restores its HP if it is hit by any supereffective attack.",
        "Enigma Berry"
    ),

    micleBerry: new Item(
        209,
        "Berries",
        "Increases a move's accuracy when HP is low.",
        "Micle Berry"
    ),

    custapBerry: new Item(
        210,
        "Berries",
        "Holder can move first when HP is low.",
        "Custap Berry"
    ),

    jabocaBerry: new Item(
        211,
        "Berries",
        "If held by a Pokémon and a physical attack lands, the attacker also takes damage.",
        "Jaboca Berry"
    ),

    rowapBerry: new Item(
        212,
        "Berries",
        "If held by a Pokémon and a special attack lands, the attacker also takes damage.",
        "Rowap Berry"
    ),

    brightPowder: new Item(
        213,
        "Hold items",
        "Lowers the opponent's accuracy.",
        "Bright Powder"
    ),

    whiteHerb: new Item(
        214,
        "Hold items",
        "An item to be held by a POKéMON. It restores any lowered stat in battle. It can be used only once.",
        "White Herb"
    ),

    machoBrace: new Item(
        215,
        "Hold items",
        "An item to be held by a Pokémon. It is a stiff and heavy brace that promotes strong growth but lowers Speed.",
        "Macho Brace"
    ),

    expShare: new Item(
        216,
        "Hold items",
        "An item to be held by a Pokémon. The holder gets a share of a battle's Exp. Points without battling.",
        "Exp. Share"
    ),

    quickClaw: new Item(
        217,
        "Hold items",
        "An item to be held by a Pokémon. A light, sharp claw that lets the bearer move first occasionally.",
        "Quick Claw"
    ),

    sootheBell: new Item(
        218,
        "Hold items",
        "An item to be held by a Pokémon. It is a bell with a comforting chime that calms the holder and makes it friendly.",
        "Soothe Bell"
    ),

    mentalHerb: new Item(
        219,
        "Hold items",
        "An item to be held by a Pokémon. It snaps the holder out of infatuation. It can be used only once.",
        "Mental Herb"
    ),

    choiceBand: new Item(
        220,
        "Hold items",
        "Raises Attack, but only one move can be used.",
        "Choice Band"
    ),

    kingsRock: new Item(
        221,
        "Hold items",
        "May cause opponent to flinch. Evolves Poliwhirl and Slowpoke when traded holding the item.",
        "King's Rock"
    ),

    silverPowder: new Item(
        222,
        "Hold items",
        "Increases the power of Bug-type moves.",
        "Silver Powder"
    ),

    amuletCoin: new Item(
        223,
        "Hold items",
        "Doubles prize money if held.",
        "Amulet Coin"
    ),

    cleanseTag: new Item(
        224,
        "Hold items",
        "An item to be held by a Pokémon. It helps keep wild Pokémon away if the holder is the first one in the party.",
        "Cleanse Tag"
    ),

    soulDew: new Item(
        225,
        "Hold items",
        "Increases the power of Psychic- and Dragon-type moves when held by Latios or Latias. Increases Sp.Atk/Sp.Def prior to Gen 7.",
        "Soul Dew"
    ),

    deepSeaTooth: new Item(
        226,
        "Hold items",
        "Increases Special Attack when held by Clamperl. Evolves Clamperl when traded holding the item.",
        "Deep Sea Tooth"
    ),

    deepSeaScale: new Item(
        227,
        "Hold items",
        "Increases Special Defense when held by Clamperl. Evolves Clamperl when traded holding the item.",
        "Deep Sea Scale"
    ),

    smokeBall: new Item(
        228,
        "Hold items",
        "An item to be held by a Pokémon. It enables the holder to flee from any wild Pokémon without fail.",
        "Smoke Ball"
    ),

    everstone: new Item(
        229,
        "Hold items",
        "An item to be held by a Pokémon. The Pokémon holding this peculiar stone is prevented from evolving.",
        "Everstone"
    ),

    focusBand: new Item(
        230,
        "Hold items",
        "An item to be held by a Pokémon. The holder may endure a potential KO attack, leaving it with just 1 HP.",
        "Focus Band"
    ),

    luckyEgg: new Item(
        231,
        "Hold items",
        "An item to be held by a Pokémon. It is an egg filled with happiness that earns extra Exp. Points in battle.",
        "Lucky Egg"
    ),

    scopeLens: new Item(
        232,
        "Hold items",
        "Increases critical-hit ratio.",
        "Scope Lens"
    ),

    metalCoat: new Item(
        233,
        "Hold items",
        "Increases the power of Steel-type moves. Evolves Onix and Scyther when traded holding the item.",
        "Metal Coat"
    ),

    leftovers: new Item(
        234,
        "Hold items",
        "An item to be held by a Pokémon. The holder's HP is gradually restored during battle.",
        "Leftovers"
    ),

    dragonScale: new Item(
        235,
        "General items",
        "Evolves Seadra when traded holding the item.",
        "Dragon Scale"
    ),

    lightBall: new Item(
        236,
        "Hold items",
        "An item to be held by PIKACHU. It is a puzzling orb that raises the Attack and Sp. Atk stat.",
        "Light Ball"
    ),

    softSand: new Item(
        237,
        "Hold items",
        "Increases the power of Ground-type moves.",
        "Soft Sand"
    ),

    hardStone: new Item(
        238,
        "Hold items",
        "Increases the power of Rock-type moves.",
        "Hard Stone"
    ),

    miracleSeed: new Item(
        239,
        "Hold items",
        "Increases the power of Grass-type moves.",
        "Miracle Seed"
    ),

    blackGlasses: new Item(
        240,
        "Hold items",
        "Increases the power of Dark-type moves.",
        "Black Glasses"
    ),

    blackBelt: new Item(
        241,
        "Hold items",
        "Increases the power of Fighting-type moves.",
        "Black Belt"
    ),

    magnet: new Item(
        242,
        "Hold items",
        "Increases the power of Electric-type moves.",
        "Magnet"
    ),

    mysticWater: new Item(
        243,
        "Hold items",
        "Increases the power of Water-type moves.",
        "Mystic Water"
    ),

    sharpBeak: new Item(
        244,
        "Hold items",
        "Increases the power of Flying-type moves.",
        "Sharp Beak"
    ),

    poisonBarb: new Item(
        245,
        "Hold items",
        "Increases the power of Poison-type moves.",
        "Poison Barb"
    ),

    neverMeltIce: new Item(
        246,
        "Hold items",
        "Increases the power of Ice-type moves.",
        "Never-Melt Ice"
    ),

    spellTag: new Item(
        247,
        "Hold items",
        "Increases the power of Ghost-type moves.",
        "Spell Tag"
    ),

    twistedSpoon: new Item(
        248,
        "Hold items",
        "Increases the power of Psychic-type moves.",
        "Twisted Spoon"
    ),

    charcoal: new Item(
        249,
        "Hold items",
        "Increases the power of Fire-type moves.",
        "Charcoal"
    ),

    dragonFang: new Item(
        250,
        "Hold items",
        "Increases the power of Dragon-type moves.",
        "Dragon Fang"
    ),

    silkScarf: new Item(
        251,
        "Hold items",
        "Increases the power of Normal-type moves.",
        "Silk Scarf"
    ),

    upgrade: new Item(
        252,
        "General items",
        "Evolves Porygon when traded holding the item.",
        "Upgrade"
    ),

    shellBell: new Item(
        253,
        "Hold items",
        "An item to be held by a Pokémon. The holder's HP is restored a little every time it inflicts damage.",
        "Shell Bell"
    ),

    seaIncense: new Item(
        254,
        "Hold items",
        "Increases the power of Water-type moves. Breeding Marill or Azumarill produces Azurill when held.",
        "Sea Incense"
    ),

    laxIncense: new Item(
        255,
        "Hold items",
        "Lowers the opponent's accuracy. Breeding Wobbuffet produces Wynaut when held.",
        "Lax Incense"
    ),

    luckyPunch: new Item(
        256,
        "Hold items",
        "Increases critical-hit ratio when held by Chansey.",
        "Lucky Punch"
    ),

    metalPowder: new Item(
        257,
        "Hold items",
        "Increases Defense when held by Ditto.",
        "Metal Powder"
    ),

    thickClub: new Item(
        258,
        "Hold items",
        "Increases Attack when held by Cubone or Marowak.",
        "Thick Club"
    ),

    leek: new Item(
        259,
        "Hold items",
        "Increases critical-hit ratio when held by Farfetch'd.",
        "Leek"
    ),

    redScarf: new Item(
        260,
        "General items",
        "Raises holder's Cool aspect in a Contest.",
        "Red Scarf"
    ),

    blueScarf: new Item(
        261,
        "General items",
        "Raises holder's Beauty aspect in a Contest.",
        "Blue Scarf"
    ),

    pinkScarf: new Item(
        262,
        "General items",
        "Raises holder's Cute aspect in a Contest.",
        "Pink Scarf"
    ),

    greenScarf: new Item(
        263,
        "General items",
        "Raises holder's Smart aspect in a Contest.",
        "Green Scarf"
    ),

    yellowScarf: new Item(
        264,
        "General items",
        "Raises holder's Tough aspect in a Contest.",
        "Yellow Scarf"
    ),

    wideLens: new Item(
        265,
        "Hold items",
        "Increases the accuracy of moves.",
        "Wide Lens"
    ),

    muscleBand: new Item(
        266,
        "Hold items",
        "Increases the power of Physical-category moves.",
        "Muscle Band"
    ),

    wiseGlasses: new Item(
        267,
        "Hold items",
        "Increases the power of Special-category moves.",
        "Wise Glasses"
    ),

    expertBelt: new Item(
        268,
        "Hold items",
        "Increases the power of super-effective moves.",
        "Expert Belt"
    ),

    lightClay: new Item(
        269,
        "Hold items",
        "A Pokémon held item that extends the duration of barrier moves like Light Screen and Reflect used by the holder.",
        "Light Clay"
    ),

    lifeOrb: new Item(
        270,
        "Hold items",
        "Increases the power of moves, but loses HP each turn.",
        "Life Orb"
    ),

    powerHerb: new Item(
        271,
        "Hold items",
        "A single-use item to be held by a Pokémon. It allows the immediate use of a move that charges on the first turn.",
        "Power Herb"
    ),

    toxicOrb: new Item(
        272,
        "Hold items",
        "An item to be held by a Pokémon. It is a bizarre orb that badly poisons the holder in battle.",
        "Toxic Orb"
    ),

    flameOrb: new Item(
        273,
        "Hold items",
        "An item to be held by a Pokémon. It is a bizarre orb that inflicts a burn on the holder in battle.",
        "Flame Orb"
    ),

    quickPowder: new Item(
        274,
        "Hold items",
        "Increases Speed when held by Ditto.",
        "Quick Powder"
    ),

    focusSash: new Item(
        275,
        "Hold items",
        "An item to be held by a Pokémon. If it has full HP, the holder will endure one potential KO attack, leaving 1 HP.",
        "Focus Sash"
    ),

    zoomLens: new Item(
        276,
        "Hold items",
        "Raises a move's accuracy if the holder moves after its target.",
        "Zoom Lens"
    ),

    metronome: new Item(
        277,
        "Hold items",
        "Increases the power of moves used consecutively.",
        "Metronome"
    ),

    ironBall: new Item(
        278,
        "Hold items",
        "A Pokémon held item that cuts Speed. It makes Flying-type and levitating holders susceptible to Ground moves.",
        "Iron Ball"
    ),

    laggingTail: new Item(
        279,
        "Hold items",
        "Holder always attacks last.",
        "Lagging Tail"
    ),

    destinyKnot: new Item(
        280,
        "Hold items",
        "A long, thin, bright-red string to be held by a Pokémon. If the holder becomes infatuated, the foe does too.",
        "Destiny Knot"
    ),

    blackSludge: new Item(
        281,
        "Hold items",
        "A held item that gradually restores the HP of Poison-type Pokémon. It inflicts damage on all other types.",
        "Black Sludge"
    ),

    icyRock: new Item(
        282,
        "Hold items",
        "A Pokémon held item that extends the duration of the move Hail used by the holder.",
        "Icy Rock"
    ),

    smoothRock: new Item(
        283,
        "Hold items",
        "A Pokémon held item that extends the duration of the move Sandstorm used by the holder.",
        "Smooth Rock"
    ),

    heatRock: new Item(
        284,
        "Hold items",
        "A Pokémon held item that extends the duration of the move Sunny Day used by the holder.",
        "Heat Rock"
    ),

    dampRock: new Item(
        285,
        "Hold items",
        "A Pokémon held item that extends the duration of the move Rain Dance used by the holder.",
        "Damp Rock"
    ),

    gripClaw: new Item(
        286,
        "Hold items",
        "A Pokémon held item that extends the duration of multiturn attacks like Bind and Wrap.",
        "Grip Claw"
    ),

    choiceScarf: new Item(
        287,
        "Hold items",
        "Raises Speed, but only one move can be used.",
        "Choice Scarf"
    ),

    stickyBarb: new Item(
        288,
        "Hold items",
        "A held item that damages the holder on every turn. It may latch on to foes and allies that touch the holder.",
        "Sticky Barb"
    ),

    powerBracer: new Item(
        289,
        "Hold items",
        "A Pokémon held item that promotes Attack gain on leveling, but reduces the Speed stat.",
        "Power Bracer"
    ),

    powerBelt: new Item(
        290,
        "Hold items",
        "A Pokémon held item that promotes Defense gain on leveling, but reduces the Speed stat.",
        "Power Belt"
    ),

    powerLens: new Item(
        291,
        "Hold items",
        "A Pokémon held item that promotes Sp. Atk gain on leveling, but reduces the Speed stat.",
        "Power Lens"
    ),

    powerBand: new Item(
        292,
        "Hold items",
        "A Pokémon held item that promotes Sp. Def gain on leveling, but reduces the Speed stat.",
        "Power Band"
    ),

    powerAnklet: new Item(
        293,
        "Hold items",
        "A Pokémon held item that promotes Speed gain on leveling, but reduces the Speed stat.",
        "Power Anklet"
    ),

    powerWeight: new Item(
        294,
        "Hold items",
        "A Pokémon held item that promotes HP gain on leveling, but reduces the Speed stat.",
        "Power Weight"
    ),

    shedShell: new Item(
        295,
        "Hold items",
        "A tough, discarded carapace to be held by a Pokémon. It enables the holder to switch with a waiting Pokémon in battle.",
        "Shed Shell"
    ),

    bigRoot: new Item(
        296,
        "Hold items",
        "Recovers more HP from HP-stealing moves.",
        "Big Root"
    ),

    choiceSpecs: new Item(
        297,
        "Hold items",
        "Raises Special Attack, but only one move can be used.",
        "Choice Specs"
    ),

    flamePlate: new Item(
        298,
        "Hold items",
        "Increases power of Fire-type moves. Changes Arceus' type to Fire.",
        "Flame Plate"
    ),

    splashPlate: new Item(
        299,
        "Hold items",
        "Increases power of Water-type moves. Changes Arceus' type to Water.",
        "Splash Plate"
    ),

    zapPlate: new Item(
        300,
        "Hold items",
        "Increases power of Electric-type moves. Changes Arceus' type to Electric.",
        "Zap Plate"
    ),

    meadowPlate: new Item(
        301,
        "Hold items",
        "Increases power of Grass-type moves. Changes Arceus' type to Grass.",
        "Meadow Plate"
    ),

    iciclePlate: new Item(
        302,
        "Hold items",
        "Increases power of Ice-type moves. Changes Arceus' type to Ice.",
        "Icicle Plate"
    ),

    fistPlate: new Item(
        303,
        "Hold items",
        "Increases power of Fighting-type moves. Changes Arceus' type to Fighting.",
        "Fist Plate"
    ),

    toxicPlate: new Item(
        304,
        "Hold items",
        "Increases power of Poison-type moves. Changes Arceus' type to Poison.",
        "Toxic Plate"
    ),

    earthPlate: new Item(
        305,
        "Hold items",
        "Increases power of Ground-type moves. Changes Arceus' type to Ground.",
        "Earth Plate"
    ),

    skyPlate: new Item(
        306,
        "Hold items",
        "Increases power of Flying-type moves. Changes Arceus' type to Flying.",
        "Sky Plate"
    ),

    mindPlate: new Item(
        307,
        "Hold items",
        "Increases power of Psychic-type moves. Changes Arceus' type to Psychic.",
        "Mind Plate"
    ),

    insectPlate: new Item(
        308,
        "Hold items",
        "Increases power of Bug-type moves. Changes Arceus' type to Bug.",
        "Insect Plate"
    ),

    stonePlate: new Item(
        309,
        "Hold items",
        "Increases power of Rock-type moves. Changes Arceus' type to Rock.",
        "Stone Plate"
    ),

    spookyPlate: new Item(
        310,
        "Hold items",
        "Increases power of Ghost-type moves. Changes Arceus' type to Ghost.",
        "Spooky Plate"
    ),

    dracoPlate: new Item(
        311,
        "Hold items",
        "Increases power of Dragon-type moves. Changes Arceus' type to Dragon.",
        "Draco Plate"
    ),

    dreadPlate: new Item(
        312,
        "Hold items",
        "Increases power of Dark-type moves. Changes Arceus' type to Dark.",
        "Dread Plate"
    ),

    ironPlate: new Item(
        313,
        "Hold items",
        "Increases power of Steel-type moves. Changes Arceus' type to Steel.",
        "Iron Plate"
    ),

    oddIncense: new Item(
        314,
        "Hold items",
        "Increases the power of Psychic-type moves. Breeding Mr. Mime produces Mime Jr. when held.",
        "Odd Incense"
    ),

    rockIncense: new Item(
        315,
        "Hold items",
        "Increases the power of Rock-type moves. Breeding Sudowoodo produces Bonsly when held.",
        "Rock Incense"
    ),

    fullIncense: new Item(
        316,
        "Hold items",
        "Holder always attacks last. Breeding Snorlax produces Munchlax when held.",
        "Full Incense"
    ),

    waveIncense: new Item(
        317,
        "Hold items",
        "Increases the power of Water-type moves. Breeding Mantine produces Mantyke when held.",
        "Wave Incense"
    ),

    roseIncense: new Item(
        318,
        "Hold items",
        "Increases the power of Grass-type moves. Breeding Roselia or Roserade produces Budew when held.",
        "Rose Incense"
    ),

    luckIncense: new Item(
        319,
        "Hold items",
        "Doubles prize money if held. Breeding Chansey or Blissey produces Happiny when held.",
        "Luck Incense"
    ),

    pureIncense: new Item(
        320,
        "Hold items",
        "Descreases the likelihood of meeting wild Pokémon. Breeding Chimecho produces Chingling when held.",
        "Pure Incense"
    ),

    protector: new Item(
        321,
        "General items",
        "Evolves Rhydon when traded holding the item.",
        "Protector"
    ),

    electirizer: new Item(
        322,
        "General items",
        "Evolves Electabuzz when traded holding the item.",
        "Electirizer"
    ),

    magmarizer: new Item(
        323,
        "General items",
        "Evolves Magmar when traded holding the item.",
        "Magmarizer"
    ),

    dubiousDisc: new Item(
        324,
        "General items",
        "Evolves Porygon2 when traded holding the item.",
        "Dubious Disc"
    ),

    reaperCloth: new Item(
        325,
        "General items",
        "Evolves Dusclops when traded holding the item.",
        "Reaper Cloth"
    ),

    razorClaw: new Item(
        326,
        "Hold items",
        "Increases critical-hit ratio. Evolves Sneasel when held at night.",
        "Razor Claw"
    ),

    razorFang: new Item(
        327,
        "Hold items",
        "May cause opponent to flinch. Evolves Gligar when held at night.",
        "Razor Fang"
    ),

    tM01: new Item(
        328,
        "Machines",
        "Teaches the move Mega Punch/Dynamic Punch/Focus Punch/Hone Claws/Work Up/Headbutt.",
        "TM01"
    ),

    tM02: new Item(
        329,
        "Machines",
        "Teaches the move Razor Wind/Headbutt/Dragon Claw/Taunt.",
        "TM02"
    ),

    tM03: new Item(
        330,
        "Machines",
        "Teaches the move Swords Dance/Curse/Water Pulse/Psyshock/Helping Hand.",
        "TM03"
    ),

    tM04: new Item(
        331,
        "Machines",
        "Teaches the move Whirlwind/Rollout/Calm Mind/Teleport.",
        "TM04"
    ),

    tM05: new Item(
        332,
        "Machines",
        "Teaches the move Mega Kick/Roar/Rest.",
        "TM05"
    ),

    tM06: new Item(
        333,
        "Machines",
        "Teaches the move Toxic/Light Screen.",
        "TM06"
    ),

    tM07: new Item(
        334,
        "Machines",
        "Teaches the move Horn Drill/Zap Cannon/Hail/Protect.",
        "TM07"
    ),

    tM08: new Item(
        335,
        "Machines",
        "Teaches the move Body Slam/Rock Smash/Bulk Up/Substitute.",
        "TM08"
    ),

    tM09: new Item(
        336,
        "Machines",
        "Teaches the move Take Down/Psych Up/Bullet Seed/Venoshock/Reflect.",
        "TM09"
    ),

    tM10: new Item(
        337,
        "Machines",
        "Teaches the move Double-Edge/Hidden Power/Dig.",
        "TM10"
    ),

    tM11: new Item(
        338,
        "Machines",
        "Teaches the move BubbleBeam/Sunny Day/Will-O-Wisp.",
        "TM11"
    ),

    tM12: new Item(
        339,
        "Machines",
        "Teaches the move Water Gun/Sweet Scent/Taunt/Facade.",
        "TM12"
    ),

    tM13: new Item(
        340,
        "Machines",
        "Teaches the move Snore/Ice Beam/Brick Break.",
        "TM13"
    ),

    tM14: new Item(341, "Machines", "Teaches the move Blizzard/Fly.", "TM14"),

    tM15: new Item(
        342,
        "Machines",
        "Teaches the move Hyper Beam/Seismic Toss.",
        "TM15"
    ),

    tM16: new Item(
        343,
        "Machines",
        "Teaches the move Pay Day/Icy Wind/Light Screen/Thunder Wave.",
        "TM16"
    ),

    tM17: new Item(
        344,
        "Machines",
        "Teaches the move Submission/Protect/Dragon Tail.",
        "TM17"
    ),

    tM18: new Item(
        345,
        "Machines",
        "Teaches the move Counter/Rain Dance/U-turn.",
        "TM18"
    ),

    tM19: new Item(
        346,
        "Machines",
        "Teaches the move Seismic Toss/Giga Drain/Telekinesis/Roost/Iron Tail.",
        "TM19"
    ),

    tM20: new Item(
        347,
        "Machines",
        "Teaches the move Rage/Endure/Safeguard/Dark Pulse.",
        "TM20"
    ),

    tM21: new Item(
        348,
        "Machines",
        "Teaches the move Mega Drain/Frustration/Foul Play.",
        "TM21"
    ),

    tM22: new Item(
        349,
        "Machines",
        "Teaches the move SolarBeam/Rock Slide.",
        "TM22"
    ),

    tM23: new Item(
        350,
        "Machines",
        "Teaches the move Dragon Rage/Iron Tail/Smack Down/Thunder Punch.",
        "TM23"
    ),

    tM24: new Item(
        351,
        "Machines",
        "Teaches the move Thunderbolt/DragonBreath/X-Scissor.",
        "TM24"
    ),

    tM25: new Item(
        352,
        "Machines",
        "Teaches the move Thunder/Waterfall.",
        "TM25"
    ),

    tM26: new Item(
        353,
        "Machines",
        "Teaches the move Earthquake/Poison Jab.",
        "TM26"
    ),

    tM27: new Item(
        354,
        "Machines",
        "Teaches the move Fissure/Return/Toxic.",
        "TM27"
    ),

    tM28: new Item(
        355,
        "Machines",
        "Teaches the move Dig/Leech Life/Tri Attack.",
        "TM28"
    ),

    tM29: new Item(356, "Machines", "Teaches the move Psychic/Scald.", "TM29"),

    tM30: new Item(
        357,
        "Machines",
        "Teaches the move Teleport/Shadow Ball/Bulk Up.",
        "TM30"
    ),

    tM31: new Item(
        358,
        "Machines",
        "Teaches the move Mimic/Mud-Slap/Brick Break/Fire Punch.",
        "TM31"
    ),

    tM32: new Item(
        359,
        "Machines",
        "Teaches the move Double Team/Dazzling Gleam.",
        "TM32"
    ),

    tM33: new Item(
        360,
        "Machines",
        "Teaches the move Ice Punch/Reflect/Calm Mind.",
        "TM33"
    ),

    tM34: new Item(
        361,
        "Machines",
        "Teaches the move Bide/Swagger/Shock Wave/Sludge Wave/Dragon Pulse.",
        "TM34"
    ),

    tM35: new Item(
        362,
        "Machines",
        "Teaches the move Metronome/Sleep Talk/Flamethrower/Ice Punch.",
        "TM35"
    ),

    tM36: new Item(
        363,
        "Machines",
        "Teaches the move Selfdestruct/Sludge Bomb/Thunderbolt.",
        "TM36"
    ),

    tM37: new Item(
        364,
        "Machines",
        "Teaches the move Egg Bomb/Sandstorm/Flamethrower.",
        "TM37"
    ),

    tM38: new Item(
        365,
        "Machines",
        "Teaches the move Fire Blast/Thunder.",
        "TM38"
    ),

    tM39: new Item(
        366,
        "Machines",
        "Teaches the move Swift/Rock Tomb/Outrage.",
        "TM39"
    ),

    tM40: new Item(
        367,
        "Machines",
        "Teaches the move Skull Bash/Defense Curl/Aerial Ace/Psychic.",
        "TM40"
    ),

    tM41: new Item(
        368,
        "Machines",
        "Teaches the move Softboiled/ThunderPunch/Torment/Earthquake.",
        "TM41"
    ),

    tM42: new Item(
        369,
        "Machines",
        "Teaches the move Dream Eater/Facade/Self-Destruct.",
        "TM42"
    ),

    tM43: new Item(
        370,
        "Machines",
        "Teaches the move Sky Attack/Detect/Secret Power/Flame Charge/Shadow Ball.",
        "TM43"
    ),

    tM44: new Item(
        371,
        "Machines",
        "Teaches the move Rest/Play Rough.",
        "TM44"
    ),

    tM45: new Item(
        372,
        "Machines",
        "Teaches the move Thunder Wave/Attract/Solar Beam.",
        "TM45"
    ),

    tM46: new Item(
        373,
        "Machines",
        "Teaches the move Psywave/Thief/Fire Blast.",
        "TM46"
    ),

    tM47: new Item(
        374,
        "Machines",
        "Teaches the move Explosion/Steel Wing/Low Sweep/Surf.",
        "TM47"
    ),

    tM48: new Item(
        375,
        "Machines",
        "Teaches the move Rock Slide/Fire Punch/Skill Swap/Round/Hyper Beam.",
        "TM48"
    ),

    tM49: new Item(
        376,
        "Machines",
        "Teaches the move Tri Attack/Fury Cutter/Snatch/Echoed Voice/Superpower.",
        "TM49"
    ),

    tM50: new Item(
        377,
        "Machines",
        "Teaches the move Substitute/Nightmare/Overheat/Roost.",
        "TM50"
    ),

    tM51: new Item(
        378,
        "Machines",
        "Teaches the move Roost/Ally Switch/Steel Wing/Blizzard.",
        "TM51"
    ),

    tM52: new Item(
        379,
        "Machines",
        "Teaches the move Focus Blast/Sludge Bomb.",
        "TM52"
    ),

    tM53: new Item(
        380,
        "Machines",
        "Teaches the move Energy Ball/Mega Drain.",
        "TM53"
    ),

    tM54: new Item(
        381,
        "Machines",
        "Teaches the move False Swipe/Flash Cannon.",
        "TM54"
    ),

    tM55: new Item(
        382,
        "Machines",
        "Teaches the move Brine/Scald/Ice Beam.",
        "TM55"
    ),

    tM56: new Item(
        383,
        "Machines",
        "Teaches the move Fling/Stealth Rock.",
        "TM56"
    ),

    tM57: new Item(
        384,
        "Machines",
        "Teaches the move Charge Beam/Pay Day.",
        "TM57"
    ),

    tM58: new Item(
        385,
        "Machines",
        "Teaches the move Endure/Sky Drop/Drill Run.",
        "TM58"
    ),

    tM59: new Item(
        386,
        "Machines",
        "Teaches the move Dragon Pulse/Incinerate/Brutal Swing/Dream Eater.",
        "TM59"
    ),

    tM60: new Item(
        387,
        "Machines",
        "Teaches the move Drain Punch/Quash/Megahorn.",
        "TM60"
    ),

    tM61: new Item(388, "Machines", "Teaches the move Will-O-Wisp.", "TM61"),

    tM62: new Item(
        389,
        "Machines",
        "Teaches the move Silver Wind/Acrobatics.",
        "TM62"
    ),

    tM63: new Item(390, "Machines", "Teaches the move Embargo.", "TM63"),

    tM64: new Item(391, "Machines", "Teaches the move Explosion.", "TM64"),

    tM65: new Item(392, "Machines", "Teaches the move Shadow Claw.", "TM65"),

    tM66: new Item(393, "Machines", "Teaches the move Payback.", "TM66"),

    tM67: new Item(
        394,
        "Machines",
        "Teaches the move Recycle/Retaliate/Smart Strike.",
        "TM67"
    ),

    tM68: new Item(395, "Machines", "Teaches the move Giga Impact.", "TM68"),

    tM69: new Item(396, "Machines", "Teaches the move Rock Polish.", "TM69"),

    tM70: new Item(
        397,
        "Machines",
        "Teaches the move Flash/Aurora Veil.",
        "TM70"
    ),

    tM71: new Item(398, "Machines", "Teaches the move Stone Edge.", "TM71"),

    tM72: new Item(
        399,
        "Machines",
        "Teaches the move Avalanche/Volt Switch.",
        "TM72"
    ),

    tM73: new Item(400, "Machines", "Teaches the move Thunder Wave.", "TM73"),

    tM74: new Item(401, "Machines", "Teaches the move Gyro Ball.", "TM74"),

    tM75: new Item(402, "Machines", "Teaches the move Swords Dance.", "TM75"),

    tM76: new Item(
        403,
        "Machines",
        "Teaches the move Stealth Rock/Struggle Bug/Fly.",
        "TM76"
    ),

    tM77: new Item(404, "Machines", "Teaches the move Psych Up.", "TM77"),

    tM78: new Item(
        405,
        "Machines",
        "Teaches the move Captivate/Bulldoze.",
        "TM78"
    ),

    tM79: new Item(
        406,
        "Machines",
        "Teaches the move Dark Pulse/Frost Breath.",
        "TM79"
    ),

    tM80: new Item(407, "Machines", "Teaches the move Rock Slide.", "TM80"),

    tM81: new Item(408, "Machines", "Teaches the move X-Scissor.", "TM81"),

    tM82: new Item(
        409,
        "Machines",
        "Teaches the move Sleep Talk/Dragon Tail.",
        "TM82"
    ),

    tM83: new Item(
        410,
        "Machines",
        "Teaches the move Natural Gift/Work Up/Infestation.",
        "TM83"
    ),

    tM84: new Item(411, "Machines", "Teaches the move Poison Jab.", "TM84"),

    tM85: new Item(412, "Machines", "Teaches the move Dream Eater.", "TM85"),

    tM86: new Item(413, "Machines", "Teaches the move Grass Knot.", "TM86"),

    tM87: new Item(414, "Machines", "Teaches the move Swagger.", "TM87"),

    tM88: new Item(
        415,
        "Machines",
        "Teaches the move Pluck/Sleep Talk.",
        "TM88"
    ),

    tM89: new Item(416, "Machines", "Teaches the move U-turn.", "TM89"),

    tM90: new Item(417, "Machines", "Teaches the move Substitute.", "TM90"),

    tM91: new Item(418, "Machines", "Teaches the move Flash Cannon.", "TM91"),

    tM92: new Item(419, "Machines", "Teaches the move Trick Room.", "TM92"),

    hM01: new Item(420, "Machines", "Teaches the move Cut.", "HM01"),

    hM02: new Item(421, "Machines", "Teaches the move Fly.", "HM02"),

    hM03: new Item(422, "Machines", "Teaches the move Surf.", "HM03"),

    hM04: new Item(423, "Machines", "Teaches the move Strength.", "HM04"),

    hM05: new Item(
        424,
        "Machines",
        "Teaches the move Flash/Defog/Whirlpool/Waterfall.",
        "HM05"
    ),

    hM06: new Item(
        425,
        "Machines",
        "Teaches the move Whirlpool/Rock Smash/Dive.",
        "HM06"
    ),

    explorerKit: new Item(
        428,
        "Key Items",
        "A bag filled with convenient tools for exploring. It provides access to the Underground.",
        "Explorer Kit"
    ),

    lootSack: new Item(
        429,
        "Key Items",
        "A sturdy, spacious bag that is used to carry loot obtained in the coal mine.",
        "Loot Sack"
    ),

    ruleBook: new Item(
        430,
        "Key Items",
        "It lists the rules for holding battles. For linked battles, you may choose which set of rules you wish to use.",
        "Rule Book"
    ),

    pokéRadar: new Item(
        431,
        "Key Items",
        "A tool that can search out Pokémon that are hiding in grass. Its battery is recharged as you walk.",
        "Poké Radar"
    ),

    pointCard: new Item(
        432,
        "Key Items",
        "A card that lists the Battle Points you have earned. ",
        "Point Card"
    ),

    journal: new Item(
        433,
        "Key Items",
        "A notebook that keeps a day-to-day record of your adventure so far. ",
        "Journal"
    ),

    sealCase: new Item(
        434,
        "Key Items",
        "A case for storing Seals that can be applied to the capsule cases of Poké Balls.",
        "Seal Case"
    ),

    fashionCase: new Item(
        435,
        "Key Items",
        "A lovely case to store colorful Props for your Pokémon to wear in a musical.",
        "Fashion Case"
    ),

    sealBag: new Item(
        436,
        "Key Items",
        "A tiny bag that can hold ten Seals for decorating Poké Balls.",
        "Seal Bag"
    ),

    palPad: new Item(
        437,
        "Key Items",
        "A convenient notepad that is used for registering your friends, Friend Codes, and keeping a record of game play.",
        "Pal Pad"
    ),

    worksKey: new Item(
        438,
        "Key Items",
        "A large key for operating the doors of the Valley Windworks in the canyon. It was held by a Team Galactic Grunt.",
        "Works Key"
    ),

    oldCharm: new Item(
        439,
        "Key Items",
        "An ancient good-luck charm made of Pokémon bones to be taken to the elder of Celestic Town.",
        "Old Charm"
    ),

    galacticKey: new Item(
        440,
        "Key Items",
        "A card key for disengaging security systems in the Galactic HQ. Losing it can result in punishment, apparently.",
        "Galactic Key"
    ),

    redChain: new Item(
        441,
        "Key Items",
        "A mythical chain that is said to link the legendary Pokémon that created the Sinnoh region.",
        "Red Chain"
    ),

    townMap: new Item(
        442,
        "Key Items",
        "A very convenient map that can be viewed anytime. It even shows your present location.",
        "Town Map"
    ),

    vsSeeker: new Item(
        443,
        "Key Items",
        "A device that indicates Trainers who want to battle. Its battery charges while you walk.",
        "Vs. Seeker"
    ),

    coinCase: new Item(
        444,
        "Key Items",
        "A case for holding Coins obtained at the Game Corner. It holds up to 50,000 Coins.",
        "Coin Case"
    ),

    oldRod: new Item(
        445,
        "Key Items",
        "An old and beat-up fishing rod. Use it by any body of water to fish for wild aquatic Pokémon.",
        "Old Rod"
    ),

    goodRod: new Item(
        446,
        "Key Items",
        "A new, good-quality fishing rod. Use it by any body of water to fish for wild aquatic Pokémon.",
        "Good Rod"
    ),

    superRod: new Item(
        447,
        "Key Items",
        "An awesome, high-tech fishing rod. Use it by any body of water to fish for wild aquatic Pokémon.",
        "Super Rod"
    ),

    sprayduck: new Item(
        448,
        "Key Items",
        "A watering can shaped like a PSYDUCK. It helps promote healthy growth of Berries planted in soft soil.",
        "Sprayduck"
    ),

    poffinCase: new Item(
        449,
        "Key Items",
        "A case for storing Poffin cooked from Berries. ",
        "Poffin Case"
    ),

    suiteKey: new Item(
        451,
        "Key Items",
        "A key to one of the suites at the luxury hotel by a lake. For some odd reason, it often disappears.",
        "Suite Key"
    ),

    oaksLetter: new Item(
        452,
        "Key Items",
        "A letter from Prof. Oak. Written in it is a request for you to go to Rt. 224.",
        "Oak's Letter"
    ),

    lunarWing: new Item(
        453,
        "Key Items",
        "A feather that glows like the moon. It is said to possess the power to dispel nightmares.",
        "Lunar Wing"
    ),

    memberCard: new Item(
        454,
        "Key Items",
        "A card needed for entering the inn in Canalave City. Oddly, the last date marked on it was 50 years ago.",
        "Member Card"
    ),

    azureFlute: new Item(
        455,
        "Key Items",
        "A flute that puts out echoing sounds that do not seem to be of this world. It is unknown who made it.",
        "Azure Flute"
    ),

    contestPass: new Item(
        457,
        "Key Items",
        "The pass required for entering POKéMON CONTESTS. It has a drawing of an award ribbon on it.",
        "Contest Pass"
    ),

    magmaStone: new Item(
        458,
        "Key Items",
        "A stone formed when boulders melted in intensely hot magma, then hardened. Magma remains sealed inside.",
        "Magma Stone"
    ),

    coupon1: new Item(
        460,
        "Key Items",
        "A coupon to be exchanged for a Pokémon Watch (Pokétch for short). Three coupons are needed.",
        "Coupon 1"
    ),

    coupon2: new Item(
        461,
        "Key Items",
        "A coupon to be exchanged for a Pokémon Watch (Pokétch for short). Three coupons are needed.",
        "Coupon 2"
    ),

    coupon3: new Item(
        462,
        "Key Items",
        "A coupon to be exchanged for a Pokémon Watch (Pokétch for short). Three coupons are needed.",
        "Coupon 3"
    ),

    secretPotion: new Item(
        464,
        "Key Items",
        "A fantastic medicine dispensed by the pharmacy in Cianwood City. It fully heals a Pokémon of any ailment.",
        "Secret Potion"
    ),

    vsRecorder: new Item(
        465,
        "Key Items",
        "An amazing device that can record a battle either between friends or at a special battle facility.",
        "Vs. Recorder"
    ),

    gracidea: new Item(
        466,
        "Key Items",
        "A flower sometimes bundled in bouquets to convey gratitude on special occasions like birthdays.",
        "Gracidea"
    ),

    apricornBox: new Item(
        468,
        "Key Items",
        "A handy box where you can store up to 99 Apricorns of each kind.",
        "Apricorn Box"
    ),

    unownReport: new Item(
        469,
        "Key Items",
        "A report of all the discovered kinds of UNOWN.",
        "Unown Report"
    ),

    berryPots: new Item(
        470,
        "Key Items",
        "Handy containers for cultivating Berries wherever you go.",
        "Berry Pots"
    ),

    dowsingMachine: new Item(
        471,
        "Key Items",
        "Searches for hidden items on the ground.",
        "Dowsing Machine"
    ),

    blueCard: new Item(
        472,
        "Key Items",
        "A card to save points for the Buena's Password show.",
        "Blue Card"
    ),

    slowpokeTail: new Item(
        473,
        "Key Items",
        "A very tasty tail of something. It sells for a high price.",
        "Slowpoke Tail"
    ),

    clearBell: new Item(
        474,
        "Key Items",
        "A very old-fashioned bell that makes a gentle ringing.",
        "Clear Bell"
    ),

    squirtBottle: new Item(
        477,
        "Key Items",
        "A bottle used for watering plants in the Berry Pots.",
        "Squirt Bottle"
    ),

    redScale: new Item(
        478,
        "Key Items",
        "A scale from the red GYARADOS. It glows red like a flame.",
        "Red Scale"
    ),

    lostItem: new Item(
        479,
        "Key Items",
        "The Mime Jr. doll that was lost by the Copycat.",
        "Lost Item"
    ),

    pass: new Item(
        480,
        "Key Items",
        "A ticket required for riding the Magnet Train. It allows you to ride whenever and however much you'd like.",
        "Pass"
    ),

    machinePart: new Item(
        481,
        "Key Items",
        "An important machine part for the Power Plant that was stolen.",
        "Machine Part"
    ),

    silverWing: new Item(
        482,
        "Key Items",
        "A strange, silvery feather that sparkles.",
        "Silver Wing"
    ),

    rainbowWing: new Item(
        483,
        "Key Items",
        "A mystical rainbow feather that sparkles.",
        "Rainbow Wing"
    ),

    mysteryEgg: new Item(
        484,
        "Key Items",
        "A mysterious Egg obtained from Mr. Pokémon. What's in the Egg is unknown.",
        "Mystery Egg"
    ),

    redApricorn: new Item(
        485,
        "General items",
        "A red Apricorn. It assails your nostrils.",
        "Red Apricorn"
    ),

    blueApricorn: new Item(
        486,
        "General items",
        "A blue Apricorn. It smells a bit like grass.",
        "Blue Apricorn"
    ),

    yellowApricorn: new Item(
        487,
        "General items",
        "A yellow Apricorn. It has an invigorating scent.",
        "Yellow Apricorn"
    ),

    greenApricorn: new Item(
        488,
        "General items",
        "A green Apricorn. It has a mysterious, aromatic scent.",
        "Green Apricorn"
    ),

    pinkApricorn: new Item(
        489,
        "General items",
        "A pink Apricorn. It has a nice, sweet scent.",
        "Pink Apricorn"
    ),

    whiteApricorn: new Item(
        490,
        "General items",
        "A white Apricorn. It doesn't smell like anything.",
        "White Apricorn"
    ),

    blackApricorn: new Item(
        491,
        "General items",
        "A black Apricorn It has an indescribable scent.",
        "Black Apricorn"
    ),

    fastBall: new Item(
        492,
        "Pokeballs",
        "A Poké Ball that makes it easier to catch Pokémon which are quick to run away.",
        "Fast Ball"
    ),

    levelBall: new Item(
        493,
        "Pokeballs",
        "A Poké Ball for catching Pokémon that are a lower level than your own.",
        "Level Ball"
    ),

    lureBall: new Item(
        494,
        "Pokeballs",
        "A Poké Ball for catching Pokémon hooked by a Rod when fishing.",
        "Lure Ball"
    ),

    heavyBall: new Item(
        495,
        "Pokeballs",
        "A Poké Ball for catching very heavy Pokémon.",
        "Heavy Ball"
    ),

    loveBall: new Item(
        496,
        "Pokeballs",
        "Poké Ball for catching Pokémon that are the opposite gender of your Pokémon.",
        "Love Ball"
    ),

    friendBall: new Item(
        497,
        "Pokeballs",
        "A Poké Ball that makes caught Pokémon more friendly.",
        "Friend Ball"
    ),

    moonBall: new Item(
        498,
        "Pokeballs",
        "A Poké Ball for catching Pokémon that evolve using the Moon Stone.",
        "Moon Ball"
    ),

    sportBall: new Item(
        499,
        "Pokeballs",
        "A special Poké Ball for the Bug-Catching Contest.",
        "Sport Ball"
    ),

    parkBall: new Item(
        500,
        "Pokeballs",
        "A special Poké Ball for the Pal Park.",
        "Park Ball"
    ),

    photoAlbum: new Item(
        501,
        "Key Items",
        "A nice photo album for storing all the photos taken along your adventure.",
        "Photo Album"
    ),

    gBSounds: new Item(
        502,
        "Key Items",
        "A music player that allows you to listen to nostalgic songs. It's operated with a single switch.",
        "GB Sounds"
    ),

    tidalBell: new Item(
        503,
        "Key Items",
        "A very old-fashioned bell that makes a gentle ringing.",
        "Tidal Bell"
    ),

    rageCandyBar: new Item(
        504,
        "Medicine",
        "Heals all major status conditions.",
        "Rage Candy Bar"
    ),

    dataCard01: new Item(
        505,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many victories you've had.",
        "Data Card 01"
    ),

    dataCard02: new Item(
        506,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many losses you've had.",
        "Data Card 02"
    ),

    dataCard03: new Item(
        507,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times your Pokémon have dashed.",
        "Data Card 03"
    ),

    dataCard04: new Item(
        508,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times your Pokémon have jumped.",
        "Data Card 04"
    ),

    dataCard05: new Item(
        509,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times you've won the Hurdle Dash.",
        "Data Card 05"
    ),

    dataCard06: new Item(
        510,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times you've won the Relay Run.",
        "Data Card 06"
    ),

    dataCard07: new Item(
        511,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times you've won Pennant Capture.",
        "Data Card 07"
    ),

    dataCard08: new Item(
        512,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times you've won Block Smash.",
        "Data Card 08"
    ),

    dataCard09: new Item(
        513,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times you've won Disc Catch.",
        "Data Card 09"
    ),

    dataCard10: new Item(
        514,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times you've won Snow Throw.",
        "Data Card 10"
    ),

    dataCard11: new Item(
        515,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many points your Pokémon scored.",
        "Data Card 11"
    ),

    dataCard12: new Item(
        516,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times your Pokémon have failed.",
        "Data Card 12"
    ),

    dataCard13: new Item(
        517,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times your Pokémon impeded themselves.",
        "Data Card 13"
    ),

    dataCard14: new Item(
        518,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times your Pokémon have tackled.",
        "Data Card 14"
    ),

    dataCard15: new Item(
        519,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times your Pokémon have fallen down.",
        "Data Card 15"
    ),

    dataCard16: new Item(
        520,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times you've won Ring Drop.",
        "Data Card 16"
    ),

    dataCard17: new Item(
        521,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times you've won Lamp Jump.",
        "Data Card 17"
    ),

    dataCard18: new Item(
        522,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times you've won Circle Push.",
        "Data Card 18"
    ),

    dataCard19: new Item(
        523,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many Link Pokéathlon wins you've had.",
        "Data Card 19"
    ),

    dataCard20: new Item(
        524,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many Link Pokéathlon losses you've had.",
        "Data Card 20"
    ),

    dataCard21: new Item(
        525,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times you've won an event.",
        "Data Card 21"
    ),

    dataCard22: new Item(
        526,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times you've lost an event.",
        "Data Card 22"
    ),

    dataCard23: new Item(
        527,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times you've switched Pokémon.",
        "Data Card 23"
    ),

    dataCard24: new Item(
        528,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times you've won Goal Roll.",
        "Data Card 24"
    ),

    dataCard25: new Item(
        529,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times your Pokémon won individual prizes.",
        "Data Card 25"
    ),

    dataCard26: new Item(
        530,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how many times you've instructed your Pokémon.",
        "Data Card 26"
    ),

    dataCard27: new Item(
        531,
        "Key Items",
        "It holds Pokéathlon records. It's a card that shows how much time you've spent in the Pokéathlon.",
        "Data Card 27"
    ),

    jadeOrb: new Item(
        532,
        "Key Items",
        " A shiny green orb that is said to have a legend and has a deep connection with the Hoenn region.",
        "Jade Orb"
    ),

    lockCapsule: new Item(
        533,
        "Key Items",
        "A sturdy Capsule that can only be opened with a special key.",
        "Lock Capsule"
    ),

    redOrb: new Item(
        534,
        "Key Items",
        "A shiny red orb that is said to have a legend and has a deep connection with the Hoenn region.",
        "Red Orb"
    ),

    blueOrb: new Item(
        535,
        "Key Items",
        "A shiny blue orb that is said to have a legend and has a deep connection with the Hoenn region.",
        "Blue Orb"
    ),

    enigmaStone: new Item(
        536,
        "Key Items",
        "A crystal ball that was excavated from the ground. A very beautiful stone that is covered with bits of rock and earth.",
        "Enigma Stone"
    ),

    eviolite: new Item(
        538,
        "Hold items",
        "A mysterious evolutionary lump. When held, it raises the Defense and Sp. Def of a Pokémon that can still evolve.",
        "Eviolite"
    ),

    floatStone: new Item(
        539,
        "Hold items",
        "A very light stone. It reduces the weight of a Pokémon when held.",
        "Float Stone"
    ),

    rockyHelmet: new Item(
        540,
        "Hold items",
        "If the holder of this item takes damage, the attacker will also be damaged upon contact.",
        "Rocky Helmet"
    ),

    airBalloon: new Item(
        541,
        "Hold items",
        "When held by a Pokémon, the Pokémon will float into the air. When the holder is attacked, this item will burst.",
        "Air Balloon"
    ),

    redCard: new Item(
        542,
        "Hold items",
        "A card with a mysterious power. When the holder is struck by a foe, the attacker is removed from battle.",
        "Red Card"
    ),

    ringTarget: new Item(
        543,
        "Hold items",
        "Moves that would otherwise have no effect will land on the Pokémon that holds it.",
        "Ring Target"
    ),

    bindingBand: new Item(
        544,
        "Hold items",
        "A band that increases the power of binding moves when held.",
        "Binding Band"
    ),

    absorbBulb: new Item(
        545,
        "Hold items",
        "A consumable bulb. If the holder is hit by a Water-type move, its Sp. Atk will rise.",
        "Absorb Bulb"
    ),

    cellBattery: new Item(
        546,
        "Hold items",
        "A consumable battery. If the holder is hit by an Electric-type move, its Attack will rise.",
        "Cell Battery"
    ),

    ejectButton: new Item(
        547,
        "Hold items",
        "If the holder is hit by an attack, it will switch with another Pokémon in your party.",
        "Eject Button"
    ),

    fireGem: new Item(
        548,
        "Hold items",
        "Increases the power of a Fire-type move only once.",
        "Fire Gem"
    ),

    waterGem: new Item(
        549,
        "Hold items",
        "Increases the power of a Water-type move only once.",
        "Water Gem"
    ),

    electricGem: new Item(
        550,
        "Hold items",
        "Increases the power of an Electric-type move only once.",
        "Electric Gem"
    ),

    grassGem: new Item(
        551,
        "Hold items",
        "Increases the power of a Grass-type move only once.",
        "Grass Gem"
    ),

    iceGem: new Item(
        552,
        "Hold items",
        "Increases the power of an Ice-type move only once.",
        "Ice Gem"
    ),

    fightingGem: new Item(
        553,
        "Hold items",
        "Increases the power of a Fighting-type move only once.",
        "Fighting Gem"
    ),

    poisonGem: new Item(
        554,
        "Hold items",
        "Increases the power of a Poison-type move only once.",
        "Poison Gem"
    ),

    groundGem: new Item(
        555,
        "Hold items",
        "Increases the power of a Ground-type move only once.",
        "Ground Gem"
    ),

    flyingGem: new Item(
        556,
        "Hold items",
        "Increases the power of a Flying-type move only once.",
        "Flying Gem"
    ),

    psychicGem: new Item(
        557,
        "Hold items",
        "Increases the power of a Psychic-type move only once.",
        "Psychic Gem"
    ),

    rockGem: new Item(
        559,
        "Hold items",
        "Increases the power of a Rock-type move only once.",
        "Rock Gem"
    ),

    ghostGem: new Item(
        560,
        "Hold items",
        "Increases the power of a Ghost-type move only once.",
        "Ghost Gem"
    ),

    dragonGem: new Item(
        561,
        "Hold items",
        "Increases the power of a Dragon-type move only once.",
        "Dragon Gem"
    ),

    darkGem: new Item(
        562,
        "Hold items",
        "Increases the power of a Dark-type move only once.",
        "Dark Gem"
    ),

    steelGem: new Item(
        563,
        "Hold items",
        "Increases the power of a Steel-type move only once.",
        "Steel Gem"
    ),

    normalGem: new Item(
        564,
        "Hold items",
        "Increases the power of a Normal-type move only once.",
        "Normal Gem"
    ),

    coverFossil: new Item(
        572,
        "General items",
        "A fossil of an ancient Pokémon that lived in the sea in ancient times. It appears to be part of its back.",
        "Cover Fossil"
    ),

    plumeFossil: new Item(
        573,
        "General items",
        "A fossil of an ancient Pokémon that flew in the sky in ancient times. It appears to be part of its wing.",
        "Plume Fossil"
    ),

    libertyPass: new Item(
        574,
        "Key Items",
        "A special pass to go to Liberty Garden. Board the ship in Castelia City.",
        "Liberty Pass"
    ),

    passOrb: new Item(
        575,
        "Hold items",
        "A mysterious orb containing the power of the Unova region, to be used when generating Pass Power.",
        "Pass Orb"
    ),

    dreamBall: new Item(
        576,
        "Pokeballs",
        "A special Poké Ball that appears out of nowhere in a bag at the Entree Forest. It can catch any Pokémon.",
        "Dream Ball"
    ),

    pokéToy: new Item(
        577,
        "General items",
        "An item that attracts Pokémon. Use it to flee from any battle with a wild Pokémon.",
        "Poké Toy"
    ),

    propCase: new Item(
        578,
        "Key Items",
        "A lovely case to store colorful Props for your Pokémon to wear in a musical.",
        "Prop Case"
    ),

    dragonSkull: new Item(
        579,
        "Key Items",
        "A skull of a Pokémon which was said to have braved the angry waters to fly around the world.",
        "Dragon Skull"
    ),

    balmMushroom: new Item(
        580,
        "General items",
        "A rare mushroom which gives off a nice fragrance. A maniac will buy it for a high price.",
        "Balm Mushroom"
    ),

    bigNugget: new Item(
        581,
        "General items",
        "A big nugget of pure gold that gives off a lustrous gleam. A maniac will buy it for a high price.",
        "Big Nugget"
    ),

    pearlString: new Item(
        582,
        "General items",
        "Very large pearls that sparkle in a pretty silver color. A maniac will buy them for a high price.",
        "Pearl String"
    ),

    cometShard: new Item(
        583,
        "General items",
        "A shard which fell to the ground when a comet approached. A maniac will buy it for a high price.",
        "Comet Shard"
    ),

    relicCopper: new Item(
        584,
        "General items",
        "A copper coin used in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
        "Relic Copper"
    ),

    relicSilver: new Item(
        585,
        "General items",
        "A silver coin used in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
        "Relic Silver"
    ),

    relicGold: new Item(
        586,
        "General items",
        "A gold coin used in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
        "Relic Gold"
    ),

    relicVase: new Item(
        587,
        "General items",
        "A vase made in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
        "Relic Vase"
    ),

    relicBand: new Item(
        588,
        "General items",
        "A bracelet made in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
        "Relic Band"
    ),

    relicStatue: new Item(
        589,
        "General items",
        "A stone figure made in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
        "Relic Statue"
    ),

    relicCrown: new Item(
        590,
        "General items",
        "A crown made in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
        "Relic Crown"
    ),

    casteliacone: new Item(
        591,
        "Medicine",
        "Heals all major status conditions.",
        "Casteliacone"
    ),

    direHit2: new Item(
        592,
        "Battle items",
        "Raises a Pokémon's critical-hit ratio in battle.",
        "Dire Hit 2"
    ),

    xSpeed2: new Item(
        593,
        "Battle items",
        "Sharply raises Speed of a Pokémon in battle.",
        "X Speed 2"
    ),

    xSpAtk2: new Item(
        594,
        "Battle items",
        "Sharply raises Special Attack of a Pokémon in battle.",
        "X Sp. Atk 2"
    ),

    xSpDef2: new Item(
        595,
        "Battle items",
        "Sharply raises Special Defense of a Pokémon in battle.",
        "X Sp. Def 2"
    ),

    xDefense2: new Item(
        596,
        "Battle items",
        "Sharply raises Defense of a Pokémon in battle.",
        "X Defense 2"
    ),

    xAttack2: new Item(
        597,
        "Battle items",
        "Sharply raises Attack of a Pokémon in battle.",
        "X Attack 2"
    ),

    xAccuracy2: new Item(
        598,
        "Battle items",
        "Sharply raises Accuracy of a Pokémon in battle.",
        "X Accuracy 2"
    ),

    xSpeed3: new Item(
        599,
        "Battle items",
        "Drastically raises Speed of a Pokémon in battle.",
        "X Speed 3"
    ),

    xSpAtk3: new Item(
        600,
        "Battle items",
        "Drastically raises Special Attack of a Pokémon in battle.",
        "X Sp. Atk 3"
    ),

    xSpDef3: new Item(
        601,
        "Battle items",
        "Drastically raises Special Defense of a Pokémon in battle.",
        "X Sp. Def 3"
    ),

    xDefense3: new Item(
        602,
        "Battle items",
        "Drastically raises Defense of a Pokémon in battle.",
        "X Defense 3"
    ),

    xAttack3: new Item(
        603,
        "Battle items",
        "Drastically raises Attack of a Pokémon in battle.",
        "X Attack 3"
    ),

    xAccuracy3: new Item(
        604,
        "Battle items",
        "Drastically raises Accuracy of a Pokémon in battle.",
        "X Accuracy 3"
    ),

    xSpeed6: new Item(
        605,
        "Battle items",
        "Immensely raises Speed of a Pokémon in battle.",
        "X Speed 6"
    ),

    xSpDef6: new Item(
        607,
        "Battle items",
        "Immensely raises Special Defense of a Pokémon in battle.",
        "X Sp. Def 6"
    ),

    xDefense6: new Item(
        608,
        "Battle items",
        "Immensely raises Defense of a Pokémon in battle.",
        "X Defense 6"
    ),

    xAttack6: new Item(
        609,
        "Battle items",
        "Immensely raises Attack of a Pokémon in battle.",
        "X Attack 6"
    ),

    xAccuracy6: new Item(
        610,
        "Battle items",
        "Immensely raises Accuracy of a Pokémon in battle.",
        "X Accuracy 6"
    ),

    abilityUrge: new Item(
        611,
        "Battle items",
        "When used, it activates the Ability of an ally Pokémon.",
        "Ability Urge"
    ),

    itemDrop: new Item(
        612,
        "Battle items",
        "When used, it causes an ally Pokémon to drop a held item.",
        "Item Drop"
    ),

    itemUrge: new Item(
        613,
        "Battle items",
        "When used, it causes an ally Pokémon to use its held item.",
        "Item Urge"
    ),

    resetUrge: new Item(
        614,
        "Battle items",
        "When used, it restores any stat changes of an ally Pokémon.",
        "Reset Urge"
    ),

    direHit3: new Item(
        615,
        "Battle items",
        "Greatly raises a Pokémon's critical-hit ratio in battle.",
        "Dire Hit 3"
    ),

    lightStone: new Item(
        616,
        "Key Items",
        "Reshiram's body was destroyed and changed into this stone. It is said to be waiting for the emergence of a hero.",
        "Light Stone"
    ),

    darkStone: new Item(
        617,
        "Key Items",
        "Zekrom's body was destroyed and changed into this stone. It is said to be waiting for the emergence of a hero.",
        "Dark Stone"
    ),

    tM93: new Item(618, "Machines", "Teaches the move Wild Charge.", "TM93"),

    tM94: new Item(
        619,
        "Machines",
        "Teaches the move Rock Smash/Surf.",
        "TM94"
    ),

    tM95: new Item(620, "Machines", "Teaches the move Snarl.", "TM95"),

    gram1: new Item(
        623,
        "Key Items",
        "An important letter which Wingull delivers.",
        "Gram 1"
    ),

    gram2: new Item(
        624,
        "Key Items",
        "An important letter which Wingull delivers.",
        "Gram 2"
    ),

    gram3: new Item(
        625,
        "Key Items",
        "An important letter which Wingull delivers.",
        "Gram 3"
    ),

    xtransceiver: new Item(
        626,
        "Key Items",
        "A high-tech transceiver with a camera function. It allows up to four-way calls.",
        "Xtransceiver"
    ),

    medalBox: new Item(
        627,
        "Key Items",
        "A box-shaped machine that stores Medals and Medal information.",
        "Medal Box"
    ),

    dNASplicers: new Item(
        629,
        "General items",
        "A splicer that fuses Kyurem and a certain Pokémon. They are said to have been one in the beginning.",
        "DNA Splicers"
    ),

    permit: new Item(
        630,
        "General items",
        "A permit that is needed to enter the Nature Preserve. Not many know about it.",
        "Permit"
    ),

    ovalCharm: new Item(
        631,
        "General items",
        "An oval charm said to increase the chance of Pokémon Eggs being found at the Day Care.",
        "Oval Charm"
    ),

    shinyCharm: new Item(
        632,
        "General items",
        "A shiny charm said to increase the chance of finding a Shiny Pokémon in the wild.",
        "Shiny Charm"
    ),

    plasmaCard: new Item(
        633,
        "Hold items",
        "A card key needed to enter the password inside the Plasma Frigate.",
        "Plasma Card"
    ),

    grubbyHanky: new Item(
        634,
        "Hold items",
        "A handkerchief dropped by a regular at Café Warehouse. It smells faintly like a Pokémon.",
        "Grubby Hanky"
    ),

    colressMachine: new Item(
        635,
        "Hold items",
        "A special device that wrings out the potential of Pokémon. It is an imperfect prototype.",
        "Colress Machine"
    ),

    droppedItem: new Item(
        637,
        "Hold items",
        "The Xtransceiver found at the Nimbasa City amusement park. It seems it belongs to a boy.",
        "Dropped Item"
    ),

    revealGlass: new Item(
        638,
        "General items",
        "A looking glass that reveals the truth. It's a mysterious glass that returns a Pokémon to its original shape.",
        "Reveal Glass"
    ),

    weaknessPolicy: new Item(
        639,
        "Hold items",
        "Sharply raises Attack and Special Attack if hit by a super-effective move.",
        "Weakness Policy"
    ),

    assaultVest: new Item(
        640,
        "Hold items",
        "Raises Special Defense but prevents the use of status moves.",
        "Assault Vest"
    ),

    profsLetter: new Item(
        642,
        "Hold items",
        "A letter that Professor Sycamore wrote to your mother. A faint but pleasant perfume seems to cling to the paper.",
        "Prof's Letter"
    ),

    rollerSkates: new Item(
        643,
        "General items",
        "Attaches roller skates to the bottom of your shoes, allowing you to glide quickly around and perform tricks.",
        "Roller Skates"
    ),

    pixiePlate: new Item(
        644,
        "Hold items",
        "Increases power of Fairy-type moves. Changes Arceus' type to Fairy.",
        "Pixie Plate"
    ),

    abilityCapsule: new Item(
        645,
        "Hold items",
        "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
        "Ability Capsule"
    ),

    whippedDream: new Item(
        646,
        "General items",
        "Evolves Swirlix when traded holding the item.",
        "Whipped Dream"
    ),

    sachet: new Item(
        647,
        "General items",
        "Evolves Spritzee when traded holding the item.",
        "Sachet"
    ),

    luminousMoss: new Item(
        648,
        "Hold items",
        "Raises Special Defense if hit by a Water-type move.",
        "Luminous Moss"
    ),

    snowball: new Item(
        649,
        "Hold items",
        "Raises Attack if hit by an Ice-type move.",
        "Snowball"
    ),

    safetyGoggles: new Item(
        650,
        "Hold items",
        "Prevents damage from weather and powder.",
        "Safety Goggles"
    ),

    pokéFlute: new Item(
        651,
        "Key Items",
        "A flute that is said to instantly awaken any POKéMON. It has a lovely tone.",
        "Poké Flute"
    ),

    richMulch: new Item(
        652,
        "Key Items",
        "Mulch to be used in a Berry field. It increases the Berry harvest without the need for particularly diligent care.",
        "Rich Mulch"
    ),

    surpriseMulch: new Item(
        653,
        "Key Items",
        "Mulch to be used in a Berry field. It causes strange, sudden mutations based on the combination of Berries.",
        "Surprise Mulch"
    ),

    boostMulch: new Item(
        654,
        "Key Items",
        "Mulch to be used in a Berry field. It increases the Berry harvest that can be grown by diligent watering.",
        "Boost Mulch"
    ),

    amazeMulch: new Item(
        655,
        "Key Items",
        "Mulch to be used in a Berry field. An amazing Mulch with the effects of Rich, Surprise, and Boost Mulch.",
        "Amaze Mulch"
    ),

    gengarite: new Item(
        656,
        "Hold items",
        "Enables Gengar to Mega Evolve during battle.",
        "Gengarite"
    ),

    gardevoirite: new Item(
        657,
        "Hold items",
        "Enables Gardevoir to Mega Evolve during battle.",
        "Gardevoirite"
    ),

    ampharosite: new Item(
        658,
        "Hold items",
        "Enables Ampharos to Mega Evolve during battle.",
        "Ampharosite"
    ),

    venusaurite: new Item(
        659,
        "Hold items",
        "Enables Venusaur to Mega Evolve during battle.",
        "Venusaurite"
    ),

    charizarditeX: new Item(
        660,
        "Hold items",
        "Enables Charizard to Mega Evolve during battle.",
        "Charizardite X"
    ),

    blastoisinite: new Item(
        661,
        "Hold items",
        "Enables Blastoise to Mega Evolve during battle.",
        "Blastoisinite"
    ),

    mewtwoniteX: new Item(
        662,
        "Hold items",
        "Enables Mewtwo to Mega Evolve during battle.",
        "Mewtwonite X"
    ),

    mewtwoniteY: new Item(
        663,
        "Hold items",
        "Enables Mewtwo to Mega Evolve during battle.",
        "Mewtwonite Y"
    ),

    blazikenite: new Item(
        664,
        "Hold items",
        "Enables Blaziken to Mega Evolve during battle.",
        "Blazikenite"
    ),

    medichamite: new Item(
        665,
        "Hold items",
        "Enables Medicham to Mega Evolve during battle.",
        "Medichamite"
    ),

    houndoominite: new Item(
        666,
        "Hold items",
        "Enables Houndoom to Mega Evolve during battle.",
        "Houndoominite"
    ),

    aggronite: new Item(
        667,
        "Hold items",
        "Enables Aggron to Mega Evolve during battle.",
        "Aggronite"
    ),

    banettite: new Item(
        668,
        "Hold items",
        "Enables Banette to Mega Evolve during battle.",
        "Banettite"
    ),

    tyranitarite: new Item(
        669,
        "Hold items",
        "Enables Tyranitar to Mega Evolve during battle.",
        "Tyranitarite"
    ),

    scizorite: new Item(
        670,
        "Hold items",
        "Enables Scizor to Mega Evolve during battle.",
        "Scizorite"
    ),

    pinsirite: new Item(
        671,
        "Hold items",
        "Enables Pinsir to Mega Evolve during battle.",
        "Pinsirite"
    ),

    aerodactylite: new Item(
        672,
        "Hold items",
        "Enables Aerodactyl to Mega Evolve during battle.",
        "Aerodactylite"
    ),

    lucarionite: new Item(
        673,
        "Hold items",
        "Enables Lucario to Mega Evolve during battle.",
        "Lucarionite"
    ),

    abomasite: new Item(
        674,
        "Hold items",
        "Enables Abomasnow to Mega Evolve during battle.",
        "Abomasite"
    ),

    kangaskhanite: new Item(
        675,
        "Hold items",
        "Enables Kangaskhan to Mega Evolve during battle.",
        "Kangaskhanite"
    ),

    gyaradosite: new Item(
        676,
        "Hold items",
        "Enables Gyarados to Mega Evolve during battle.",
        "Gyaradosite"
    ),

    absolite: new Item(
        677,
        "Hold items",
        "Enables Absol to Mega Evolve during battle.",
        "Absolite"
    ),

    charizarditeY: new Item(
        678,
        "Hold items",
        "Enables Charizard to Mega Evolve during battle.",
        "Charizardite Y"
    ),

    alakazite: new Item(
        679,
        "Hold items",
        "Enables Alakazam to Mega Evolve during battle.",
        "Alakazite"
    ),

    heracronite: new Item(
        680,
        "Hold items",
        "Enables Heracross to Mega Evolve during battle.",
        "Heracronite"
    ),

    mawilite: new Item(
        681,
        "Hold items",
        "Enables Mawile to Mega Evolve during battle.",
        "Mawilite"
    ),

    manectite: new Item(
        682,
        "Hold items",
        "Enables Manectric to Mega Evolve during battle.",
        "Manectite"
    ),

    garchompite: new Item(
        683,
        "Hold items",
        "Enables Garchomp to Mega Evolve during battle.",
        "Garchompite"
    ),

    latiasite: new Item(
        684,
        "Hold items",
        "Enables Latias to Mega Evolve during battle.",
        "Latiasite"
    ),

    latiosite: new Item(
        685,
        "Hold items",
        "Enables Latios to Mega Evolve during battle.",
        "Latiosite"
    ),

    roseliBerry: new Item(
        686,
        "Berries",
        "If held by a Pokémon, this Berry will lessen the damage taken from one supereffective Fairy-type attack.",
        "Roseli Berry"
    ),

    keeBerry: new Item(
        687,
        "Berries",
        "If held by a Pokémon, this Berry will increase the holder's Defense if it's hit with a physical move.",
        "Kee Berry"
    ),

    marangaBerry: new Item(
        688,
        "Berries",
        "If held by a Pokémon, this Berry will increase the holder's Sp. Def if it's hit with a special move.",
        "Maranga Berry"
    ),

    sprinklotad: new Item(
        689,
        "General items",
        "A watering can shaped like a Lotad. It helps promote the healthy growth of any Berries planted in good, soft soil.",
        "Sprinklotad"
    ),

    tM96: new Item(690, "Machines", "Teaches the move Nature Power.", "TM96"),

    tM97: new Item(691, "Machines", "Teaches the move Dark Pulse.", "TM97"),

    tM98: new Item(
        692,
        "Machines",
        "Teaches the move Power-Up Punch/Waterfall.",
        "TM98"
    ),

    tM99: new Item(693, "Machines", "Teaches the move Dazzling Gleam.", "TM99"),

    tM100: new Item(694, "Machines", "Teaches the move Confide.", "TM100"),

    powerPlantPass: new Item(
        695,
        "Hold items",
        "This pass serves as an ID card for gaining access to the power plant that lies along Route 13.",
        "Power Plant Pass"
    ),

    megaRing: new Item(
        696,
        "Key Items",
        "Enables Pokémon carrying Mega Stones to Mega Evolve in battle.",
        "Mega Ring"
    ),

    intriguingStone: new Item(
        697,
        "Hold items",
        "A rather curious stone that might appear to be valuable to some. It's all in the eye of the beholder.",
        "Intriguing Stone"
    ),

    discountCoupon: new Item(
        699,
        "General items",
        "This special coupon allows you to buy items at a discount when you are shopping at a boutique.",
        "Discount Coupon"
    ),

    elevatorKey: new Item(
        700,
        "Hold items",
        "A card key that activates the elevator in Lysandre Labs. It is emblazoned with Team Flare's logo.",
        "Elevator Key"
    ),

    tMVPass: new Item(
        701,
        "General items",
        "A commuter pass that allows the holder to ride the TMV between Lumiose City and Kiloude City at any time.",
        "TMV Pass"
    ),

    strangeSouvenir: new Item(
        704,
        "General items",
        "An ornament depicting a Pokémon that is venerated as a protector in some region far from Kalos.",
        "Strange Souvenir"
    ),

    lensCase: new Item(
        705,
        "Key Items",
        "A rather chic-looking case for carrying contact lenses.",
        "Lens Case"
    ),

    makeupBag: new Item(
        706,
        "Key Items",
        "A rather chic-looking case for carrying lipsticks.",
        "Makeup Bag"
    ),

    lumioseGalette: new Item(
        708,
        "Medicine",
        "Heals all major status conditions.",
        "Lumiose Galette"
    ),

    shalourSable: new Item(
        709,
        "Medicine",
        "Heals all major status conditions.",
        "Shalour Sable"
    ),

    lookerTicket: new Item(
        712,
        "Hold items",
        "A ticket that was handmade by Looker. It's decorated with a liberal amount of glittery paint.",
        "Looker Ticket"
    ),

    bike: new Item(
        713,
        "Key Items",
        "A folding Bike that enables a rider to get around much faster than with Running Shoes.",
        "Bike"
    ),

    holoCaster: new Item(
        714,
        "Key Items",
        "A device that allows users to receive and view hologram clips at any time. It is also used to chat with others.",
        "Holo Caster"
    ),

    fairyGem: new Item(
        715,
        "General items",
        "Increases the power of a Fairy-type move only once.",
        "Fairy Gem"
    ),

    machBike: new Item(
        718,
        "Key Items",
        "A folding bicycle that is at least twice as fast as walking.",
        "Mach Bike"
    ),

    acroBike: new Item(
        719,
        "Key Items",
        "A folding bicycle that is capable of stunts like jumps and wheelies.",
        "Acro Bike"
    ),

    wailmerPail: new Item(
        720,
        "Key Items",
        "A nifty watering pail. Use it to promote strong growth in BERRIES planted in soft soil.",
        "Wailmer Pail"
    ),

    devonParts: new Item(
        721,
        "Key Items",
        "A case that contains mechanical parts of some sort made by the Devon Corporation.",
        "Devon Parts"
    ),

    sootSack: new Item(
        722,
        "Key Items",
        "A sack used to collect volcanic ash automatically during walks over deep ash.",
        "Soot Sack"
    ),

    basementKey: new Item(
        723,
        "Key Items",
        "A key that opens a door in the Goldenrod Tunnel.",
        "Basement Key"
    ),

    pokéblockKit: new Item(
        724,
        "Key Items",
        "A set containing a Berry Blender for making Pokéblocks and a Pokéblock Case for storing Pokéblocks.",
        "Pokéblock Kit"
    ),

    letter: new Item(
        725,
        "Key Items",
        "An extremely important letter to STEVEN from the PRESIDENT of the DEVON CORPORATION.",
        "Letter"
    ),

    eonTicket: new Item(
        726,
        "Key Items",
        "The ticket required for sailing on a ferry to a distant southern island. It features a drawing of an island.",
        "Eon Ticket"
    ),

    scanner: new Item(
        727,
        "Key Items",
        "A device used to search for life-forms in water. It looks too difficult to use.",
        "Scanner"
    ),

    goGoggles: new Item(
        728,
        "Key Items",
        "A pair of protective goggles. They enable a TRAINER to travel through even desert sandstorms.",
        "Go-Goggles"
    ),

    keyToRoom1: new Item(
        730,
        "Key Items",
        "Unlocks Room 1 in Abandoned Ship/Sea Mauville.",
        "Key to Room 1"
    ),

    keyToRoom2: new Item(
        731,
        "Key Items",
        "Unlocks Room 2 in Abandoned Ship/Sea Mauville.",
        "Key to Room 2"
    ),

    keyToRoom4: new Item(
        732,
        "Key Items",
        "Unlocks Room 4 in Abandoned Ship/Sea Mauville.",
        "Key to Room 4"
    ),

    keyToRoom6: new Item(
        733,
        "Key Items",
        "Unlocks Room 6 in Abandoned Ship/Sea Mauville.",
        "Key to Room 6"
    ),

    storageKey: new Item(
        734,
        "Key Items",
        "The key to Team Galactic's sinister warehouse located at the edge of Veilstone City.",
        "Storage Key"
    ),

    devonScope: new Item(
        735,
        "Key Items",
        "A scope that signals the presence of any unseeable POKéMON. It is made by the DEVON CORP.",
        "Devon Scope"
    ),

    hM07: new Item(737, "Machines", "Teaches the move Waterfall.", "HM07"),

    devonScubaGear: new Item(
        738,
        "Key Items",
        "A device made by Devon Corporation that provides oxygen to users during the use of Dive.",
        "Devon Scuba Gear"
    ),

    contestCostume: new Item(
        740,
        "Key Items",
        "A very cool suit to be worn during the Contest Spectacular.",
        "Contest Costume"
    ),

    magmaSuit: new Item(
        741,
        "Key Items",
        "A suit made with the collective technological know-how of Team Magma. It can withstand any impact.",
        "Magma Suit"
    ),

    aquaSuit: new Item(
        742,
        "Key Items",
        "A suit made with the collective technological know-how of Team Aqua. It can withstand any impact.",
        "Aqua Suit"
    ),

    pairOfTickets: new Item(
        743,
        "Key Items",
        "Tickets for two to the astronomical show being held at the Mossdeep Space Center.",
        "Pair of Tickets"
    ),

    megaBracelet: new Item(
        744,
        "Key Items",
        "This cuff contains an untold power that somehow enables Pokémon carrying a Mega Stone to Mega Evolve in battle.",
        "Mega Bracelet"
    ),

    swampertite: new Item(
        752,
        "Hold items",
        "Enables Swampert to Mega Evolve during battle.",
        "Swampertite"
    ),

    sceptilite: new Item(
        753,
        "Hold items",
        "Enables Sceptile to Mega Evolve during battle.",
        "Sceptilite"
    ),

    sablenite: new Item(
        754,
        "Hold items",
        "Enables Sableye to Mega Evolve during battle.",
        "Sablenite"
    ),

    altarianite: new Item(
        755,
        "Hold items",
        "Enables Altaria to Mega Evolve during battle.",
        "Altarianite"
    ),

    galladite: new Item(
        756,
        "Hold items",
        "Enables Gallade to Mega Evolve during battle.",
        "Galladite"
    ),

    audinite: new Item(
        757,
        "Hold items",
        "Enables Audino to Mega Evolve during battle.",
        "Audinite"
    ),

    metagrossite: new Item(
        758,
        "Hold items",
        "Enables Metagross to Mega Evolve during battle.",
        "Metagrossite"
    ),

    sharpedonite: new Item(
        759,
        "Hold items",
        "Enables Sharpedo to Mega Evolve during battle.",
        "Sharpedonite"
    ),

    slowbronite: new Item(
        760,
        "Hold items",
        "Enables Slowbro to Mega Evolve during battle.",
        "Slowbronite"
    ),

    steelixite: new Item(
        761,
        "Hold items",
        "Enables Steelix to Mega Evolve during battle.",
        "Steelixite"
    ),

    pidgeotite: new Item(
        762,
        "Hold items",
        "Enables Pidgeot to Mega Evolve during battle.",
        "Pidgeotite"
    ),

    glalitite: new Item(
        763,
        "Hold items",
        "Enables Glalie to Mega Evolve during battle.",
        "Glalitite"
    ),

    diancite: new Item(
        764,
        "Hold items",
        "Enables Diancie to Mega Evolve during battle.",
        "Diancite"
    ),

    prisonBottle: new Item(
        765,
        "Hold items",
        "Transforms Hoopa Confined to Hoopa Unbound.",
        "Prison Bottle"
    ),

    cameruptite: new Item(
        767,
        "Hold items",
        "Enables Camerupt to Mega Evolve during battle.",
        "Cameruptite"
    ),

    lopunnite: new Item(
        768,
        "Hold items",
        "Enables Lopunny to Mega Evolve during battle.",
        "Lopunnite"
    ),

    salamencite: new Item(
        769,
        "Hold items",
        "Enables Salamence to Mega Evolve during battle.",
        "Salamencite"
    ),

    beedrillite: new Item(
        770,
        "Hold items",
        "Enables Beedrill to Mega Evolve during battle.",
        "Beedrillite"
    ),

    meteorite: new Item(
        772,
        "Key Items",
        "A meteorite that fell from space onto MT. MOON long ago. It is very lumpy and hard.",
        "Meteorite"
    ),

    keyStone: new Item(
        773,
        "Key Items",
        "A stone filled with an unexplained power. It makes Pokémon that battle with a Mega Stone Mega Evolve.",
        "Key Stone"
    ),

    meteoriteShard: new Item(
        774,
        "Key Items",
        "One of the fragments of a Meteorite from Granite Cave. It's faintly warm to the touch.",
        "Meteorite Shard"
    ),

    eonFlute: new Item(
        775,
        "Key Items",
        "A flute that can be used to summon Latios or Latias no matter where you are.",
        "Eon Flute"
    ),

    bottleCap: new Item(
        795,
        "General items",
        "Maximizes one IV stat in Hyper Training.",
        "Bottle Cap"
    ),

    goldBottleCap: new Item(
        796,
        "General items",
        "Maximizes all of a Pokémon's IV stats in Hyper Training.",
        "Gold Bottle Cap"
    ),

    zRing: new Item(
        797,
        "Key Items",
        "A mysterious ring that enables Pokémon to use Z-Power. It requires both the willpower and the physical power of the Trainer wearing it.",
        "Z-Ring"
    ),

    normaliumZ: new Item(
        807,
        "Hold items",
        "Allows the use of Breakneck Blitz, the Normal type Z-Move.",
        "Normalium Z"
    ),

    firiumZ: new Item(
        808,
        "Hold items",
        "Allows the use of Inferno Overdrive, the Fire type Z-Move.",
        "Firium Z"
    ),

    wateriumZ: new Item(
        809,
        "Hold items",
        "Allows the use of Hydro Vortex, the Water type Z-Move.",
        "Waterium Z"
    ),

    electriumZ: new Item(
        810,
        "Hold items",
        "Allows the use of Gigavolt Havoc, the Electric type Z-Move.",
        "Electrium Z"
    ),

    grassiumZ: new Item(
        811,
        "Hold items",
        "Allows the use of Bloom Doom, the Grass type Z-Move.",
        "Grassium Z"
    ),

    iciumZ: new Item(
        812,
        "Hold items",
        "Allows the use of Subzero Slammer, the Ice type Z-Move.",
        "Icium Z"
    ),

    fightiniumZ: new Item(
        813,
        "Hold items",
        "Allows the use of All-Out Pummeling, the Fighting type Z-Move.",
        "Fightinium Z"
    ),

    poisoniumZ: new Item(
        814,
        "Hold items",
        "Allows the use of Acid Downpour, the Poison type Z-Move.",
        "Poisonium Z"
    ),

    groundiumZ: new Item(
        815,
        "Hold items",
        "Allows the use of Tectonic Rage, the Ground type Z-Move.",
        "Groundium Z"
    ),

    flyiniumZ: new Item(
        816,
        "Hold items",
        "Allows the use of Supersonic Skystrike, the Flying type Z-Move.",
        "Flyinium Z"
    ),

    psychiumZ: new Item(
        817,
        "Hold items",
        "Allows the use of Shattered Psyche, the Psychic type Z-Move.",
        "Psychium Z"
    ),

    buginiumZ: new Item(
        818,
        "Hold items",
        "Allows the use of Savage Spin-Out, the Bug type Z-Move.",
        "Buginium Z"
    ),

    rockiumZ: new Item(
        819,
        "Hold items",
        "Allows the use of Continental Crush, the Rock type Z-Move.",
        "Rockium Z"
    ),

    ghostiumZ: new Item(
        820,
        "Hold items",
        "Allows the use of Never-Ending Nightmare, the Ghost type Z-Move.",
        "Ghostium Z"
    ),

    dragoniumZ: new Item(
        821,
        "Hold items",
        "Allows the use of Devastating Drake, the Dragon type Z-Move.",
        "Dragonium Z"
    ),

    darkiniumZ: new Item(
        822,
        "Hold items",
        "Allows the use of Black Hole Eclipse, the Dark type Z-Move.",
        "Darkinium Z"
    ),

    steeliumZ: new Item(
        823,
        "Hold items",
        "Allows the use of Corkscrew Crash, the Steel type Z-Move.",
        "Steelium Z"
    ),

    fairiumZ: new Item(
        824,
        "Hold items",
        "Allows the use of Twinkle Tackle, the Fairy type Z-Move.",
        "Fairium Z"
    ),

    pikaniumZ: new Item(
        825,
        "Hold items",
        "Allows Pikachu to upgrade Volt Tackle to a Z-Move, Catastropika.",
        "Pikanium Z"
    ),

    decidiumZ: new Item(
        826,
        "Hold items",
        "Allows Decidueye to upgrade Spirit Shackle to a Z-Move, Sinister Arrow Raid.",
        "Decidium Z"
    ),

    inciniumZ: new Item(
        827,
        "Hold items",
        "Allows Incineroar to upgrade Darkest Lariat to a Z-Move, Malicious Moonsault.",
        "Incinium Z"
    ),

    primariumZ: new Item(
        828,
        "Hold items",
        "Allows Primarina to upgrade Sparkling Aria to a Z-Move, Oceanic Operetta.",
        "Primarium Z"
    ),

    tapuniumZ: new Item(
        829,
        "Hold items",
        "Allows the Tapus to upgrade Nature's Madness to a Z-Move, Guardian of Alola.",
        "Tapunium Z"
    ),

    marshadiumZ: new Item(
        830,
        "Hold items",
        "Allows Marshadow to upgrade Spectral Thief to a Z-Move, Soul-Stealing 7-Star Strike.",
        "Marshadium Z"
    ),

    aloraichiumZ: new Item(
        831,
        "Hold items",
        "Allows Alolan Raichu to upgrade Thunderbolt to a Z-Move, Stoked Sparksurfer.",
        "Aloraichium Z"
    ),

    snorliumZ: new Item(
        832,
        "Hold items",
        "Allows Snorlax to upgrade Giga Impact to a Z-Move, Pulverizing Pancake.",
        "Snorlium Z"
    ),

    eeviumZ: new Item(
        833,
        "Hold items",
        "Allows Eevee to upgrade Last Resort to a Z-Move, Extreme Evoboost.",
        "Eevium Z"
    ),

    mewniumZ: new Item(
        834,
        "Hold items",
        "Allows Mew to upgrade Psychic to a Z-Move, Genesis Supernova.",
        "Mewnium Z"
    ),

    pikashuniumZ: new Item(
        836,
        "Hold items",
        "Allows Pikachu in a cap to upgrade Thunderbolt to a Z-Move, 10,000,000 Volt Thunderbolt.",
        "Pikashunium Z"
    ),

    forageBag: new Item(
        841,
        "Key Items",
        "A bag to carry ingredients gathered during Mallow's trial in the jungle.",
        "Forage Bag"
    ),

    professorsMask: new Item(
        843,
        "Key Items",
        "The mask that belongs to The Masked Royal. This pro wrestler apparently sews his mask on a machine himself.",
        "Professor's Mask"
    ),

    festivalTicket: new Item(
        844,
        "General items",
        "A ticket that allows you to host a mission in Festival Plaza.",
        "Festival Ticket"
    ),

    sparklingStone: new Item(
        845,
        "Key Items",
        "A stone entrusted by a Pokémon that has been venerated as a guardian deity in the Alola region. There is said to be some secret in how it sparkles.",
        "Sparkling Stone"
    ),

    adrenalineOrb: new Item(
        846,
        "Hold items",
        "Using it makes wild Pokémon more likely to call for help. If held by a Pokémon, it boosts Speed when intimidated. It can be used only once.",
        "Adrenaline Orb"
    ),

    zygardeCube: new Item(
        847,
        "Key Items",
        "An item to store Zygarde Cores and Cells. You can also use it to teach Zygarde moves.",
        "Zygarde Cube"
    ),

    iceStone: new Item(
        849,
        "General items",
        "Evolves certain species of Pokémon.",
        "Ice Stone"
    ),

    ridePager: new Item(
        850,
        "Key Items",
        "By entering certain numbers on this pager, you can summon Ride Pokémon in an instant.",
        "Ride Pager"
    ),

    beastBall: new Item(
        851,
        "Pokeballs",
        "A special Poké Ball designed to catch Ultra Beasts. It has a low success rate for catching others.",
        "Beast Ball"
    ),

    bigMalasada: new Item(
        852,
        "Medicine",
        "Heals all major status conditions.",
        "Big Malasada"
    ),

    redNectar: new Item(
        853,
        "Hold items",
        "A flower nectar obtained at Ula'ula Meadow. It changes the form of certain species of Pokémon.",
        "Red Nectar"
    ),

    yellowNectar: new Item(
        854,
        "Hold items",
        "A flower nectar obtained at Melemele Meadow. It changes the form of certain species of Pokémon.",
        "Yellow Nectar"
    ),

    pinkNectar: new Item(
        855,
        "Hold items",
        "The flower nectar obtained at the flowering shrubs on Royal Avenue. It changes the form of certain species of Pokémon.",
        "Pink Nectar"
    ),

    purpleNectar: new Item(
        856,
        "Hold items",
        "A flower nectar obtained at Poni Meadow. It changes the form of certain species of Pokémon.",
        "Purple Nectar"
    ),

    sunFlute: new Item(
        857,
        "Key Items",
        "It is said that the tones it produces were offered up as an expression of gratitude to the Legendary Pokémon of the sun.",
        "Sun Flute"
    ),

    moonFlute: new Item(
        858,
        "Key Items",
        "It is said that the tones it produces were offered up as an expression of gratitude to the Legendary Pokémon of the moon.",
        "Moon Flute"
    ),

    enigmaticCard: new Item(
        860,
        "Key Items",
        "A mysterious card. Written on it is a request for you to go to a guest room in an Akala motel on Route 8.",
        "Enigmatic Card"
    ),

    silverRazzBerry: new Item(
        861,
        "Berries",
        "Makes a Pokémon easier to catch in Pokémon Let's Go.",
        "Silver Razz Berry"
    ),

    goldenRazzBerry: new Item(
        862,
        "Berries",
        "Makes a Pokémon easier to catch in Pokémon Let's Go.",
        "Golden Razz Berry"
    ),

    silverNanabBerry: new Item(
        863,
        "Berries",
        "Greatly calms a Pokémon in battle, in Let's Go Pikachu/Eevee.",
        "Silver Nanab Berry"
    ),

    goldenNanabBerry: new Item(
        864,
        "Berries",
        "Drastically calms a Pokémon in battle, in Let's Go Pikachu/Eevee.",
        "Golden Nanab Berry"
    ),

    silverPinapBerry: new Item(
        865,
        "Berries",
        "Greatly increases chance of getting items when a Pokémon is caught, in Pokémon Let's Go.",
        "Silver Pinap Berry"
    ),

    goldenPinapBerry: new Item(
        866,
        "Berries",
        "Drastically increases chance of getting items when a Pokémon is caught, in Pokémon Let's Go.",
        "Golden Pinap Berry"
    ),

    secretKey: new Item(
        872,
        "Key Items",
        "A high-tech key that has to be used at a specific location. It emits a special electric signal to open a door.",
        "Secret Key"
    ),

    ssTicket: new Item(
        873,
        "Key Items",
        "The ticket required for sailing on the ferry S.S. Aqua. It has a drawing of a ship on it.",
        "S.S. Ticket"
    ),

    silphScope: new Item(
        874,
        "Key Items",
        "A scope that makes unseeable POKéMON visible. It is made by SILPH CO.",
        "Silph Scope"
    ),

    parcel: new Item(
        875,
        "Key Items",
        "A parcel entrusted in your care. You are supposed to deliver it to your childhood friend who left Twinleaf Town.",
        "Parcel"
    ),

    cardKey: new Item(
        876,
        "Key Items",
        "A card key that opens a shutter in the Radio Tower.",
        "Card Key"
    ),

    goldTeeth: new Item(
        877,
        "Key Items",
        "A set of false teeth lost by the SAFARI ZONE'S WARDEN. It makes his smile sparkle.",
        "Gold Teeth"
    ),

    liftKey: new Item(
        878,
        "Key Items",
        "A key that operates the elevator in TEAM ROCKET's HIDEOUT. It bears the TEAM ROCKET logo.",
        "Lift Key"
    ),

    terrainExtender: new Item(
        879,
        "Hold items",
        "An item to be held by a Pokémon. It extends the duration of the terrain caused by the holder's move or Ability.",
        "Terrain Extender"
    ),

    protectivePads: new Item(
        880,
        "Hold items",
        "An item to be held by a Pokémon. These pads protect the holder from effects caused by making direct contact with the target.",
        "Protective Pads"
    ),

    electricSeed: new Item(
        881,
        "Hold items",
        "An item to be held by a Pokémon. It boosts Defense on Electric Terrain. It can only be used once.",
        "Electric Seed"
    ),

    psychicSeed: new Item(
        882,
        "Hold items",
        "An item to be held by a Pokémon. It boosts Sp. Def on Psychic Terrain. It can only be used once.",
        "Psychic Seed"
    ),

    mistySeed: new Item(
        883,
        "Hold items",
        "An item to be held by a Pokémon. It boosts Sp. Def on Misty Terrain. It can only be used once.",
        "Misty Seed"
    ),

    grassySeed: new Item(
        884,
        "Hold items",
        "An item to be held by a Pokémon. It boosts Defense on Grassy Terrain. It can only be used once.",
        "Grassy Seed"
    ),

    stretchySpring: new Item(885, "General items", "", "Stretchy Spring"),

    chalkyStone: new Item(
        886,
        "General items",
        "A small whitish stone picked up at the edge of the road.",
        "Chalky Stone"
    ),

    marble: new Item(887, "General items", "", "Marble"),

    loneEarring: new Item(888, "General items", "", "Lone Earring"),

    beachGlass: new Item(
        889,
        "General items",
        "A piece of colored glass. Waves have rounded its edges. It's slightly rough to the touch.",
        "Beach Glass"
    ),

    goldLeaf: new Item(890, "General items", "", "Gold Leaf"),

    silverLeaf: new Item(891, "General items", "", "Silver Leaf"),

    polishedMudBall: new Item(892, "General items", "", "Polished Mud Ball"),

    tropicalShell: new Item(893, "General items", "", "Tropical Shell"),

    leafLetter: new Item(
        895,
        "General items",
        "A letter written on a leaf. Something is written using Eevee's footprints.",
        "Leaf Letter"
    ),

    smallBouquet: new Item(896, "General items", "", "Small Bouquet"),

    lure: new Item(
        900,
        "General items",
        "Attracts Pokémon in the wild.",
        "Lure"
    ),

    superLure: new Item(
        901,
        "General items",
        "Attracts Pokémon in the wild.",
        "Super Lure"
    ),

    maxLure: new Item(
        902,
        "General items",
        "Attracts Pokémon in the wild.",
        "Max Lure"
    ),

    pewterCrunchies: new Item(
        903,
        "Medicine",
        "Heals all major status conditions.",
        "Pewter Crunchies"
    ),

    fightingMemory: new Item(
        904,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Fighting type.",
        "Fighting Memory"
    ),

    flyingMemory: new Item(
        905,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Flying type.",
        "Flying Memory"
    ),

    poisonMemory: new Item(
        906,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Poison type.",
        "Poison Memory"
    ),

    groundMemory: new Item(
        907,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Ground type.",
        "Ground Memory"
    ),

    rockMemory: new Item(
        908,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Rock type.",
        "Rock Memory"
    ),

    bugMemory: new Item(
        909,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Bug type.",
        "Bug Memory"
    ),

    ghostMemory: new Item(
        910,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Ghost type.",
        "Ghost Memory"
    ),

    steelMemory: new Item(
        911,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Steel type.",
        "Steel Memory"
    ),

    fireMemory: new Item(
        912,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Fire type.",
        "Fire Memory"
    ),

    waterMemory: new Item(
        913,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Water type.",
        "Water Memory"
    ),

    grassMemory: new Item(
        914,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Grass type.",
        "Grass Memory"
    ),

    electricMemory: new Item(
        915,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Electric type.",
        "Electric Memory"
    ),

    psychicMemory: new Item(
        916,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Psychic type.",
        "Psychic Memory"
    ),

    iceMemory: new Item(
        917,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Ice type.",
        "Ice Memory"
    ),

    dragonMemory: new Item(
        918,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Dragon type.",
        "Dragon Memory"
    ),

    darkMemory: new Item(
        919,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Dark type.",
        "Dark Memory"
    ),

    fairyMemory: new Item(
        920,
        "Hold items",
        "Changes Silvally and its move Multi-Attack to Fairy type.",
        "Fairy Memory"
    ),

    solganiumZ: new Item(
        927,
        "Hold items",
        "Allows Solgaleo to upgrade Sunsteel Strike to a Z-Move, Searing Sunraze Smash.",
        "Solganium Z"
    ),

    lunaliumZ: new Item(
        928,
        "Hold items",
        "Allows Lunala to upgrade Moongeist Beam to a Z-Move, Menacing Moonraze Maelstrom.",
        "Lunalium Z"
    ),

    ultranecroziumZ: new Item(
        929,
        "Hold items",
        "Allows Ultra Necrozma to upgrade Photon Geyser to a Z-Move, Light That Burns the Sky.",
        "Ultranecrozium Z"
    ),

    mimikiumZ: new Item(
        930,
        "Hold items",
        "Allows Mimikyu to upgrade Play Rough to a Z-Move, Let's Snuggle Forever.",
        "Mimikium Z"
    ),

    lycaniumZ: new Item(
        931,
        "Hold items",
        "Allows Lycanroc to upgrade Stone Edge to a Z-Move, Splintered Stormshards.",
        "Lycanium Z"
    ),

    kommoniumZ: new Item(
        932,
        "Hold items",
        "Allows Kommo-o to upgrade Clanging Scales to a Z-Move, Clangorous Soulblaze.",
        "Kommonium Z"
    ),

    pinkPetal: new Item(
        934,
        "Key Items",
        "Petal received from Mina during Mina's trial.",
        "Pink Petal"
    ),

    orangePetal: new Item(
        935,
        "Key Items",
        "Petal received from Ilima during Mina's trial.",
        "Orange Petal"
    ),

    bluePetal: new Item(
        936,
        "Key Items",
        "Petal received from Lana during Mina's trial.",
        "Blue Petal"
    ),

    redPetal: new Item(
        937,
        "Key Items",
        "Petal received from Kiawe during Mina's trial.",
        "Red Petal"
    ),

    greenPetal: new Item(
        938,
        "Key Items",
        "Petal received from Mallow during Mina's trial.",
        "Green Petal"
    ),

    yellowPetal: new Item(
        939,
        "Key Items",
        "Petal received from Sophocles during Mina's trial.",
        "Yellow Petal"
    ),

    purplePetal: new Item(
        940,
        "Key Items",
        "Petal received from Nanu during Mina's trial.",
        "Purple Petal"
    ),

    rainbowFlower: new Item(
        941,
        "Key Items",
        "Flower made of the petals received from captains.",
        "Rainbow Flower"
    ),

    surgeBadge: new Item(
        942,
        "Key Items",
        "Novelty badge from the Kantonian Gym.",
        "Surge Badge"
    ),

    nSolarizer: new Item(
        945,
        "Key Items",
        "A machine to fuse/separate Necrozma and Solgaleo.",
        "N-Solarizer"
    ),

    nLunarizer: new Item(
        946,
        "Key Items",
        " A machine to fuse/separate Necrozma and Lunala.",
        "N-Lunarizer"
    ),

    leftPokéBall: new Item(
        948,
        "Key Items",
        "A Poké Ball with a Pokémon that lost its Trainer inside.",
        "Left Poké Ball"
    ),

    rotoHatch: new Item(
        949,
        "Battle items",
        "Helps Eggs hatch faster.",
        "Roto Hatch"
    ),

    rotoBargain: new Item(
        950,
        "Battle items",
        "Reduces the prices of products at Poké Marts by half.",
        "Roto Bargain"
    ),

    rotoPrizeMoney: new Item(
        951,
        "Battle items",
        "Triples the prize money you receive after battle.",
        "Roto Prize Money"
    ),

    rotoExpPoints: new Item(
        952,
        "Battle items",
        "Increases the Exp. Points your Pokémon receive after battle a little.",
        "Roto Exp. Points"
    ),

    rotoFriendship: new Item(
        953,
        "Battle items",
        "Helps Pokémon in your party grow friendly faster.",
        "Roto Friendship"
    ),

    rotoEncounter: new Item(
        954,
        "Battle items",
        "Increases the chance of encountering high-level wild Pokémon a lot for a certain period of time.",
        "Roto Encounter"
    ),

    rotoStealth: new Item(
        955,
        "Battle items",
        "Prevents you from encountering wild Pokémon for a certain period of time.",
        "Roto Stealth"
    ),

    rotoHPRestore: new Item(
        956,
        "Battle items",
        "Fully restores the HP of your battling Pokémon.",
        "Roto HP Restore"
    ),

    rotoPPRestore: new Item(
        957,
        "Battle items",
        "Fully restores the PP of your battling Pokémon.",
        "Roto PP Restore"
    ),

    rotoBoost: new Item(
        958,
        "Battle items",
        "Raises all stats of your battling Pokémon.",
        "Roto Boost"
    ),

    rotoCatch: new Item(
        959,
        "Battle items",
        "Increases the chance to catch Pokémon a lot.",
        "Roto Catch"
    ),

    healthCandy: new Item(
        960,
        "Medicine",
        "Increases a Pokémon's HP stat by 1.",
        "Health Candy"
    ),

    mightyCandy: new Item(
        961,
        "Medicine",
        "Increases a Pokémon's Attack stat by 1.",
        "Mighty Candy"
    ),

    toughCandy: new Item(
        962,
        "Medicine",
        "Increases a Pokémon's Defense stat by 1.",
        "Tough Candy"
    ),

    smartCandy: new Item(
        963,
        "Medicine",
        "Increases a Pokémon's Special Attack stat by 1.",
        "Smart Candy"
    ),

    courageCandy: new Item(
        964,
        "Medicine",
        "Increases a Pokémon's Special Defense stat by 1.",
        "Courage Candy"
    ),

    quickCandy: new Item(
        965,
        "Medicine",
        "Increases a Pokémon's Speed stat by 1.",
        "Quick Candy"
    ),

    healthCandyL: new Item(
        966,
        "Medicine",
        "Increases a Pokémon's HP stat.",
        "Health Candy L"
    ),

    mightyCandyL: new Item(
        967,
        "Medicine",
        "Increases a Pokémon's Attack stat.",
        "Mighty Candy L"
    ),

    toughCandyL: new Item(
        968,
        "Medicine",
        "Increases a Pokémon's Defense stat.",
        "Tough Candy L"
    ),

    smartCandyL: new Item(
        969,
        "Medicine",
        "Increases a Pokémon's Special Attack stat.",
        "Smart Candy L"
    ),

    courageCandyL: new Item(
        970,
        "Medicine",
        "Increases a Pokémon's Special Defense stat.",
        "Courage Candy L"
    ),

    quickCandyL: new Item(
        971,
        "Medicine",
        "Increases a Pokémon's Speed stat.",
        "Quick Candy L"
    ),

    healthCandyXL: new Item(
        972,
        "Medicine",
        "Increases a Pokémon's HP stat.",
        "Health Candy XL"
    ),

    mightyCandyXL: new Item(
        973,
        "Medicine",
        "Increases a Pokémon's Attack stat.",
        "Mighty Candy XL"
    ),

    toughCandyXL: new Item(
        974,
        "Medicine",
        "Increases a Pokémon's Defense stat.",
        "Tough Candy XL"
    ),

    smartCandyXL: new Item(
        975,
        "Medicine",
        "Increases a Pokémon's Special Attack stat.",
        "Smart Candy XL"
    ),

    courageCandyXL: new Item(
        976,
        "Medicine",
        "Increases a Pokémon's Special Defense stat.",
        "Courage Candy XL"
    ),

    quickCandyXL: new Item(
        977,
        "Medicine",
        "Increases a Pokémon's Speed stat.",
        "Quick Candy XL"
    ),

    pokémonBoxLink: new Item(1075, "Key Items", "", "Pokémon Box Link"),

    wishingStar: new Item(
        1076,
        "Key Items",
        "A stone found in the Galar region with a mysterious power. It’s said that your dreams come true if you find one.",
        "Wishing Star"
    ),

    dynamaxBand: new Item(1077, "Key Items", "", "Dynamax Band"),

    fishingRod: new Item(
        1080,
        "Key Items",
        "A Fishing Rod made by Captain Lana. Cast a line over piles of underwater rocks to fish for wild aquatic Pokémon.",
        "Fishing Rod"
    ),

    sausages: new Item(
        1084,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. These sausages should be boiled before eating.",
        "Sausages"
    ),

    bobsFoodTin: new Item(
        1085,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. The tinned food that Bob sells is curiously popular in Galar.",
        "Bob's Food Tin"
    ),

    bachsFoodTin: new Item(
        1086,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. The tinned food that Bach sells is curiously popular in Galar.",
        "Bach's Food Tin"
    ),

    tinOfBeans: new Item(
        1087,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. When simmered, the beans suffuse a dish with their mild flavor.",
        "Tin of Beans"
    ),

    bread: new Item(
        1088,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. An indispensable tool for mopping up that extra curry left on your plate.",
        "Bread"
    ),

    pasta: new Item(
        1089,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. These flour noodles make for a surprisingly good match with curry.",
        "Pasta"
    ),

    mixedMushrooms: new Item(
        1090,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. The chewy texture of the mushrooms transforms any dish they’re added to.",
        "Mixed Mushrooms"
    ),

    smokePokeTail: new Item(
        1091,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. When a Slowpoke’s tail falls off, it grows back quickly.",
        "Smoke-Poke Tail"
    ),

    largeLeek: new Item(
        1092,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. Whether this is the kind of vegetable stalk that Farfetch’d like is unknown.",
        "Large Leek"
    ),

    fancyApple: new Item(
        1093,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. An apple chosen above others. It has spectacular form and a brilliant sheen.",
        "Fancy Apple"
    ),

    brittleBones: new Item(
        1094,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. The taste boiled off from the bones is sure to give a dish a light umami taste.",
        "Brittle Bones"
    ),

    packOfPotatoes: new Item(
        1095,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. Potatoes help mellow out a spicy taste, to make a dish more mild.",
        "Pack of Potatoes"
    ),

    pungentRoot: new Item(
        1096,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. Though carelessly picked, these herbs can add a fragrant accent to a dish.",
        "Pungent Root"
    ),

    saladMix: new Item(
        1097,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. The assortment of vegetables looks quite appealing and healthy.",
        "Salad Mix"
    ),

    friedFood: new Item(
        1098,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. It’s been a while since it was fried, so it’s gotten greasy.",
        "Fried Food"
    ),

    boiledEgg: new Item(
        1099,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. Even just one boiled egg can really enhance a dish.",
        "Boiled Egg"
    ),

    campingGear: new Item(1100, "Key Items", "", "Camping Gear"),

    rustedSword: new Item(
        1103,
        "Key Items",
        "It is said that a hero used this sword to halt a terrible disaster in ancient times. But it’s grown rusty and worn.",
        "Rusted Sword"
    ),

    rustedShield: new Item(
        1104,
        "Key Items",
        "It is said that a hero used this shield to halt a terrible disaster in ancient times. But it’s grown rusty and worn.",
        "Rusted Shield"
    ),

    fossilizedBird: new Item(
        1105,
        "General items",
        "The fossil of an ancient Pokémon that once soared through the sky. What it looked like is a mystery.",
        "Fossilized Bird"
    ),

    fossilizedFish: new Item(
        1106,
        "General items",
        "The fossil of an ancient Pokémon that once lived in the sea. What it looked like is a mystery.",
        "Fossilized Fish"
    ),

    fossilizedDrake: new Item(
        1107,
        "General items",
        "The fossil of an ancient Pokémon that once roamed the land. What it looked like is a mystery.",
        "Fossilized Drake"
    ),

    fossilizedDino: new Item(
        1108,
        "General items",
        "The fossil of an ancient Pokémon that once lived in the sea. What it looked like is a mystery.",
        "Fossilized Dino"
    ),

    strawberrySweet: new Item(
        1109,
        "Hold items",
        "Evolves Milcery into Strawberry Flavor Alcremie.",
        "Strawberry Sweet"
    ),

    loveSweet: new Item(
        1110,
        "Hold items",
        "Evolves Milcery into Heart Flavor Alcremie.",
        "Love Sweet"
    ),

    berrySweet: new Item(
        1111,
        "Hold items",
        "Evolves Milcery into Blueberry Flavor Alcremie.",
        "Berry Sweet"
    ),

    cloverSweet: new Item(
        1112,
        "Hold items",
        "Evolves Milcery into Clover Flavor Alcremie.",
        "Clover Sweet"
    ),

    flowerSweet: new Item(
        1113,
        "Hold items",
        "Evolves Milcery into Flower Flavor Alcremie.",
        "Flower Sweet"
    ),

    starSweet: new Item(
        1114,
        "Hold items",
        "Evolves Milcery into Star Flavor Alcremie.",
        "Star Sweet"
    ),

    ribbonSweet: new Item(
        1115,
        "Hold items",
        "Evolves Milcery into Ribbon Flavor Alcremie.",
        "Ribbon Sweet"
    ),

    sweetApple: new Item(
        1116,
        "Hold items",
        "Evolves Applin into Appletun.",
        "Sweet Apple"
    ),

    tartApple: new Item(
        1117,
        "Hold items",
        "Evolves Applin into Flapple.",
        "Tart Apple"
    ),

    throatSpray: new Item(
        1118,
        "Hold items",
        "Raises Sp. Atk when a sound-based move is used.",
        "Throat Spray"
    ),

    ejectPack: new Item(
        1119,
        "Hold items",
        "The Pokémon switches out if its stats are lowered.",
        "Eject Pack"
    ),

    heavyDutyBoots: new Item(
        1120,
        "Hold items",
        "Protects the holder from traps set on the battlefield.",
        "Heavy-Duty Boots"
    ),

    blunderPolicy: new Item(
        1121,
        "Hold items",
        "Raises Speed sharply if its attack misses.",
        "Blunder Policy"
    ),

    roomService: new Item(
        1122,
        "Hold items",
        "Lowers the Pokémon's speed during Trick Room.",
        "Room Service"
    ),

    utilityUmbrella: new Item(
        1123,
        "Hold items",
        "An item to be held by a Pokémon. This sturdy umbrella protects the holder from the effects of weather.",
        "Utility Umbrella"
    ),

    expCandyXS: new Item(1124, "Medicine", "", "Exp. Candy XS"),

    expCandyS: new Item(1125, "Medicine", "", "Exp. Candy S"),

    expCandyM: new Item(1126, "Medicine", "", "Exp. Candy M"),

    expCandyL: new Item(1127, "Medicine", "", "Exp. Candy L"),

    expCandyXL: new Item(
        1128,
        "Medicine",
        "Increases the Pokémon's Exp points by 30,000.",
        "Exp. Candy XL"
    ),

    dynamaxCandy: new Item(
        1129,
        "Medicine",
        "Raises Dynamax Level.",
        "Dynamax Candy"
    ),

    tR00: new Item(1130, "Machines", "Teaches the move Swords Dance.", "TR00"),

    tR01: new Item(1131, "Machines", "", "TR01"),

    tR02: new Item(1132, "Machines", "", "TR02"),

    tR03: new Item(1133, "Machines", "", "TR03"),

    tR04: new Item(1134, "Machines", "", "TR04"),

    tR05: new Item(1135, "Machines", "", "TR05"),

    tR06: new Item(1136, "Machines", "", "TR06"),

    tR07: new Item(1137, "Machines", "", "TR07"),

    tR08: new Item(1138, "Machines", "", "TR08"),

    tR09: new Item(1139, "Machines", "", "TR09"),

    tR10: new Item(1140, "Machines", "", "TR10"),

    tR11: new Item(1141, "Machines", "", "TR11"),

    tR12: new Item(1142, "Machines", "", "TR12"),

    tR13: new Item(1143, "Machines", "", "TR13"),

    tR14: new Item(1144, "Machines", "", "TR14"),

    tR15: new Item(1145, "Machines", "", "TR15"),

    tR16: new Item(1146, "Machines", "", "TR16"),

    tR17: new Item(1147, "Machines", "", "TR17"),

    tR18: new Item(1148, "Machines", "", "TR18"),

    tR19: new Item(1149, "Machines", "", "TR19"),

    tR20: new Item(1150, "Machines", "", "TR20"),

    tR21: new Item(1151, "Machines", "", "TR21"),

    tR22: new Item(1152, "Machines", "", "TR22"),

    tR23: new Item(1153, "Machines", "", "TR23"),

    tR24: new Item(1154, "Machines", "", "TR24"),

    tR25: new Item(1155, "Machines", "", "TR25"),

    tR26: new Item(1156, "Machines", "", "TR26"),

    tR27: new Item(1157, "Machines", "", "TR27"),

    tR28: new Item(1158, "Machines", "", "TR28"),

    tR29: new Item(1159, "Machines", "", "TR29"),

    tR30: new Item(1160, "Machines", "", "TR30"),

    tR31: new Item(1161, "Machines", "", "TR31"),

    tR32: new Item(1162, "Machines", "", "TR32"),

    tR33: new Item(1163, "Machines", "", "TR33"),

    tR34: new Item(1164, "Machines", "", "TR34"),

    tR35: new Item(1165, "Machines", "", "TR35"),

    tR36: new Item(1166, "Machines", "", "TR36"),

    tR37: new Item(1167, "Machines", "", "TR37"),

    tR38: new Item(1168, "Machines", "", "TR38"),

    tR39: new Item(1169, "Machines", "", "TR39"),

    tR40: new Item(1170, "Machines", "", "TR40"),

    tR41: new Item(1171, "Machines", "", "TR41"),

    tR42: new Item(1172, "Machines", "", "TR42"),

    tR43: new Item(1173, "Machines", "", "TR43"),

    tR44: new Item(1174, "Machines", "", "TR44"),

    tR45: new Item(1175, "Machines", "", "TR45"),

    tR46: new Item(1176, "Machines", "", "TR46"),

    tR47: new Item(1177, "Machines", "", "TR47"),

    tR48: new Item(1178, "Machines", "", "TR48"),

    tR49: new Item(1179, "Machines", "", "TR49"),

    tR50: new Item(1180, "Machines", "", "TR50"),

    tR51: new Item(1181, "Machines", "Teaches the move Dragon Dance.", "TR51"),

    tR52: new Item(1182, "Machines", "", "TR52"),

    tR53: new Item(1183, "Machines", "", "TR53"),

    tR54: new Item(1184, "Machines", "", "TR54"),

    tR55: new Item(1185, "Machines", "", "TR55"),

    tR56: new Item(1186, "Machines", "", "TR56"),

    tR57: new Item(1187, "Machines", "", "TR57"),

    tR58: new Item(1188, "Machines", "", "TR58"),

    tR59: new Item(1189, "Machines", "", "TR59"),

    tR60: new Item(1190, "Machines", "", "TR60"),

    tR61: new Item(1191, "Machines", "", "TR61"),

    tR62: new Item(1192, "Machines", "", "TR62"),

    tR63: new Item(1193, "Machines", "", "TR63"),

    tR64: new Item(1194, "Machines", "", "TR64"),

    tR65: new Item(1195, "Machines", "", "TR65"),

    tR66: new Item(1196, "Machines", "", "TR66"),

    tR67: new Item(1197, "Machines", "", "TR67"),

    tR68: new Item(1198, "Machines", "", "TR68"),

    tR69: new Item(1199, "Machines", "", "TR69"),

    tR70: new Item(1200, "Machines", "", "TR70"),

    tR71: new Item(1201, "Machines", "", "TR71"),

    tR72: new Item(1202, "Machines", "", "TR72"),

    tR73: new Item(1203, "Machines", "", "TR73"),

    tR74: new Item(1204, "Machines", "", "TR74"),

    tR75: new Item(1205, "Machines", "", "TR75"),

    tR76: new Item(1206, "Machines", "", "TR76"),

    tR77: new Item(1207, "Machines", "", "TR77"),

    tR78: new Item(1208, "Machines", "", "TR78"),

    tR79: new Item(1209, "Machines", "", "TR79"),

    tR80: new Item(1210, "Machines", "", "TR80"),

    tR81: new Item(1211, "Machines", "Teaches the move Foul Play.", "TR81"),

    tR82: new Item(1212, "Machines", "", "TR82"),

    tR83: new Item(1213, "Machines", "", "TR83"),

    tR84: new Item(1214, "Machines", "Teaches the move Scald.", "TR84"),

    tR85: new Item(1215, "Machines", "", "TR85"),

    tR86: new Item(1216, "Machines", "", "TR86"),

    tR87: new Item(1217, "Machines", "", "TR87"),

    tR88: new Item(1218, "Machines", "", "TR88"),

    tR89: new Item(1219, "Machines", "", "TR89"),

    tR90: new Item(1220, "Machines", "", "TR90"),

    tR91: new Item(1221, "Machines", "", "TR91"),

    tR92: new Item(1222, "Machines", "", "TR92"),

    tR93: new Item(1223, "Machines", "", "TR93"),

    tR94: new Item(1224, "Machines", "", "TR94"),

    tR95: new Item(1225, "Machines", "", "TR95"),

    tR97: new Item(1227, "Machines", "", "TR97"),

    tR98: new Item(1228, "Machines", "", "TR98"),

    tR99: new Item(1229, "Machines", "", "TR99"),

    tM00: new Item(1230, "Machines", "Teaches a move.", "TM00"),

    lonelyMint: new Item(
        1231,
        "Battle items",
        "Changes the Pokémon's stats to match the Lonely nature.",
        "Lonely Mint"
    ),

    adamantMint: new Item(
        1232,
        "Battle items",
        "Changes the Pokémon's stats to match the Adamant nature.",
        "Adamant Mint"
    ),

    naughtyMint: new Item(
        1233,
        "Battle items",
        "Changes the Pokémon's stats to match the Naughty nature.",
        "Naughty Mint"
    ),

    braveMint: new Item(
        1234,
        "Battle items",
        "Changes the Pokémon's stats to match the Brave nature.",
        "Brave Mint"
    ),

    boldMint: new Item(
        1235,
        "Battle items",
        "Changes the Pokémon's stats to match the Bold nature.",
        "Bold Mint"
    ),

    impishMint: new Item(
        1236,
        "Battle items",
        "Changes the Pokémon's stats to match the Impish nature.",
        "Impish Mint"
    ),

    laxMint: new Item(
        1237,
        "Battle items",
        "Changes the Pokémon's stats to match the Lax nature.",
        "Lax Mint"
    ),

    relaxedMint: new Item(
        1238,
        "Battle items",
        "Changes the Pokémon's stats to match the Relaxed nature.",
        "Relaxed Mint"
    ),

    modestMint: new Item(
        1239,
        "Battle items",
        "Changes the Pokémon's stats to match the Modest nature.",
        "Modest Mint"
    ),

    mildMint: new Item(
        1240,
        "Battle items",
        "Changes the Pokémon's stats to match the Mild nature.",
        "Mild Mint"
    ),

    rashMint: new Item(
        1241,
        "Battle items",
        "Changes the Pokémon's stats to match the Rash nature.",
        "Rash Mint"
    ),

    quietMint: new Item(
        1242,
        "Battle items",
        "Changes the Pokémon's stats to match the Quiet nature.",
        "Quiet Mint"
    ),

    calmMint: new Item(
        1243,
        "Battle items",
        "Changes the Pokémon's stats to match the Calm nature.",
        "Calm Mint"
    ),

    gentleMint: new Item(
        1244,
        "Battle items",
        "Changes the Pokémon's stats to match the Gentle nature.",
        "Gentle Mint"
    ),

    carefulMint: new Item(
        1245,
        "Battle items",
        "Changes the Pokémon's stats to match the Careful nature.",
        "Careful Mint"
    ),

    sassyMint: new Item(
        1246,
        "Battle items",
        "Changes the Pokémon's stats to match the Sassy nature.",
        "Sassy Mint"
    ),

    timidMint: new Item(
        1247,
        "Battle items",
        "Changes the Pokémon's stats to match the Timid nature.",
        "Timid Mint"
    ),

    hastyMint: new Item(
        1248,
        "Battle items",
        "Changes the Pokémon's stats to match the Hasty nature.",
        "Hasty Mint"
    ),

    jollyMint: new Item(
        1249,
        "Battle items",
        "Changes the Pokémon's stats to match the Jolly nature.",
        "Jolly Mint"
    ),

    naiveMint: new Item(
        1250,
        "Battle items",
        "Changes the Pokémon's stats to match the Naive nature.",
        "Naive Mint"
    ),

    seriousMint: new Item(
        1251,
        "Battle items",
        "Changes the Pokémon's stats to match a neutral nature.",
        "Serious Mint"
    ),

    wishingPiece: new Item(
        1252,
        "General items",
        "Activates a Pokémon Den for a Max Raid Battle.",
        "Wishing Piece"
    ),

    crackedPot: new Item(
        1253,
        "Hold items",
        "Evolves Sinistea into Polteageist.",
        "Cracked Pot"
    ),

    chippedPot: new Item(
        1254,
        "Hold items",
        "Evolves Sinistea into Polteageist.",
        "Chipped Pot"
    ),

    hiTechEarbuds: new Item(
        1255,
        "Hold items",
        "Strange earbuds that allow you to freely control the volume of various sounds.",
        "Hi-tech Earbuds"
    ),

    fruitBunch: new Item(
        1256,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. The syrupy fruits give off a strong tropical feel.",
        "Fruit Bunch"
    ),

    moomooCheese: new Item(
        1257,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. Melted cheese can really give a curry some richness.",
        "Moomoo Cheese"
    ),

    spiceMix: new Item(
        1258,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. There are over fifty spices contained within this ingredient’s hot flavor.",
        "Spice Mix"
    ),

    freshCream: new Item(
        1259,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. Add some whipped cream to a spicy curry to give it some sweetness.",
        "Fresh Cream"
    ),

    packagedCurry: new Item(
        1260,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. Using packaged curry helps make sure there are no slipups when cooking.",
        "Packaged Curry"
    ),

    coconutMilk: new Item(
        1261,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. The refined sweetness of this coconut milk makes it quite popular.",
        "Coconut Milk"
    ),

    instantNoodles: new Item(
        1262,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. It has a junk-food sort of taste, but it goes well with curry.",
        "Instant Noodles"
    ),

    precookedBurger: new Item(
        1263,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. If you’re unsure about what to cook, you can’t go wrong with some burger.",
        "Precooked Burger"
    ),

    gigantamix: new Item(
        1264,
        "General items",
        "One of the many ingredients that can be used for cooking at your camp. A mysterious spice. Even a tiny sprinkle is sure to make a curry gigantic.",
        "Gigantamix"
    ),

    wishingChip: new Item(
        1265,
        "Key Items",
        "Toss a number of them into a Pokémon Den for the chance to attract a wild Dynamax Pokémon.",
        "Wishing Chip"
    ),

    rotomBike: new Item(
        1266,
        "Key Items",
        "This bike can be combined with the Pokémon Rotom to not only do a turbo boost but also run on the water.",
        "Rotom Bike"
    ),

    catchingCharm: new Item(
        1267,
        "Key Items",
        "Holding it is said to increase the chance of getting a critical catch. Curiously, the charm doesn’t shake much.",
        "Catching Charm"
    ),

    oldLetter: new Item(
        1269,
        "Key Items",
        "A letter entrusted to you by a girl, to be delivered to a boy. Strangely, it looks old to you.",
        "Old Letter"
    ),

    bandAutograph: new Item(
        1270,
        "Key Items",
        "It’s signed by all members of the Galar region’s most charismatic band, the Maximizers.",
        "Band Autograph"
    ),

    soniasBook: new Item(
        1271,
        "Key Items",
        "Professor Sonia’s published writings. Her new discoveries about the Galar region’s legends are recorded in this enjoyable read.",
        "Sonia's Book"
    ),

    rotomCatalog: new Item(
        1278,
        "Key Items",
        "A catalog of devices that Rotom like. Use the catalog to have Rotom hop in and out of the various devices listed within.",
        "Rotom Catalog"
    ),
};

export default items