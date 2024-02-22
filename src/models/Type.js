import React from "react";

class Type {
    constructor(id, name, eff, inEff, noEff, color, icon, banner) {
        this.id = id;
        this.name = name;
        this.eff = eff;
        this.inEff = inEff;
        this.noEff = noEff;
        this.color = color
        this.icon = icon;
        this.banner = banner;
    }

    static makeSingle(typeObj) {
        return new Type(
            typeObj.id,
            typeObj.name,
            typeObj.eff,
            typeObj.inEff,
            typeObj.noEff,
            typeObj.color,
            typeObj.icon,
            typeObj.banner
        );
    }

    static makeArray(objArray) {
        return objArray.map((typeObj) => {
            return Type.makeSingle(typeObj);
        });
    }

    displayIcon(className) {
        return (
            <img
                className={className}
                src={this.icon}
                alt={`Icon for the ${this.name}-type.`}
            />
        );
    }

    displayBanner(bannerStyleObj, textStyleObj) {
        return (
            <div
                style={{
                    backgroundColor: this.color,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "30px",
                    width: "100px",
                    borderRadius: "5px",
                    border: "3px solid black",
                    ...bannerStyleObj,
                }}
            >
                <div
                    style={{
                        ...textStyleObj,
                        fontSize: "90%",
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    {this.name}
                </div>
            </div>
        );
    }
}

export default Type;
