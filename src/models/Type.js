import React from "react"

class Type {
    constructor (id, name, eff, inEff, noEff, icon, banner) {
        this.id = id
        this.name = name
        this.eff = eff
        this.inEff = inEff
        this.noEff = noEff
        this.icon = icon
        this.banner = banner
    }

    displayIcon(className) {
        return (
            <img className={className} src={this.icon} alt={`Icon for the ${this.name}-type.`}/>
        )
    }
    displayBanner(className) {
        return (
            <img className={className} src={this.banner} alt={`Banner for the ${this.name}-type.`}/>
        )
    }
}

export default Type