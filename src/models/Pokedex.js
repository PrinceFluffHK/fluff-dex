import React from "react";
import DexEntry from "./DexEntry";
import Help from "./Help";
import { Grid } from "@mui/material";

class Pokedex {
    constructor(dexArray) {
        this.dexArray = dexArray;
    }

    static makeRegionalDex(orderArray, dexObjArray, speciesArray) {
        const orderedDex = orderArray.map((monId) => {
            return Help.findInArray(monId, dexObjArray);
        });
        return new Pokedex(
            orderedDex.map((dexEntry, index) => {
                return DexEntry.makeSingle(dexEntry, speciesArray, index);
            })
        );
    }

    static makeNationalDex(dexObjArray, speciesArray, gen) {
        const trimmedDex = dexObjArray.filter((dexEntry) => {
            return Help.getDexSize(gen) >= dexEntry.forms[0];
        });
        return new Pokedex(
            trimmedDex.map((dexEntry, index) => {
                return DexEntry.makeSingle(dexEntry, speciesArray, index);
            })
        );
    }

    static filterByGen(dexArray, gen) {
        return dexArray.filter((dexEntry) => {
            return dexEntry.forms[0].gen <= gen;
        });
    }

    listView(setSelectedId) {
        const pokedex = this.dexArray.map((dexEntry, index) => {
            const handleSelect = () => {
                setSelectedId(dexEntry.id);
            };

            const mon = dexEntry.forms[0];

            let bgColor = "white";
            if (index % 2) {
                bgColor = "#00ebc7";
            }

            return (
                <div
                    className="dex-padding"
                    key={index}
                    onClick={handleSelect}
                    style={{ backgroundColor: bgColor }}
                >
                    <Grid container spacing={0}>
                        <Grid item xs={3} className="flex align-center">
                            <h3>#{dexEntry.id}:</h3>
                        </Grid>
                        <Grid item xs={6} className="flex align-center">
                            <h3>{mon.name}</h3>
                        </Grid>
                        <Grid
                            item
                            xs={3}
                            className="flex align-center justify-right"
                        >
                            <img
                                className="dex-sprite"
                                src={mon.spriteUrl}
                                alt={`Sprite of ${mon.name}`}
                            />
                        </Grid>
                    </Grid>
                </div>
            );
        });
        return <div>{pokedex}</div>;
    }
}

export default Pokedex;
