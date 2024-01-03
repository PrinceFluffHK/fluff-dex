import React from "react";

class Romhack {
    constructor (name, pokedexId, trainersId, thumbnailUrl,) {
        this.name = name
        this.pokedexId = pokedexId
        this.trainersId = trainersId
        this.thumbnailUrl = thumbnailUrl
    }

    homeCard = () => {
        return(
            <div>
                hello from {this.name}!
            </div>
        )
    }
}

export default Romhack