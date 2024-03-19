import React from "react";

class Type {
    constructor(id, name, eff, inEff, noEff, color, icon, banner) {
        this.id = id;
        this.name = name;
        this.eff = eff;
        this.inEff = inEff;
        this.noEff = noEff;
        this.color = color;
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
        let color = "white";
        let opacity = "100%";
        if (this.id === 0) {
            opacity = "0%";
            color = "black";
        }
        return (
            <div
                style={{
                    backgroundColor: this.color,
                    opacity: opacity,
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
                        opacity: opacity,
                        ...textStyleObj,
                        fontSize: "90%",
                        color: color,
                        fontWeight: "bold",
                    }}
                >
                    {this.name}
                </div>
            </div>
        );
    }

    lightColor() {
        switch (this.id) {
            case 1:
                return "#e6e8e7";
            case 2:
                return "#fcdfc2";
            case 3:
                return "#dcebfa";
            case 4:
                return "#dbc2ed";
            case 5:
                return "#e0c8b6";
            case 6:
                return "#e8e2be";
            case 7:
                return "#d0d6a5";
            case 8:
                return "#d1b2d1";
            case 9:
                return "#c5dde6";
            case 10:
                return "#f0b9b9";
            case 11:
                return "#bfd7f5";
            case 12:
                return "#b5dbab";
            case 13:
                return "#f7ebc1";
            case 14:
                return "#f7cddb";
            case 15:
                return "#d2f4fc";
            case 16:
                return "#cfd4fa";
            case 17:
                return "#c2b8b6";
            case 18:
                return "#fcd9fc";
        }
    }
}

export default Type;
