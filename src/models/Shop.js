import React, { useState } from "react"
import { Grid } from "@mui/material";
import Help from "./Help"

class Shop {
    constructor(id, name, bp, contents) {
        this.id = id
        this.name = name
        this.bp = bp
        this.contents = contents
    }

    // listItem() {
    //     const [open, setOpen] = useState(false)
    //     const handleClick = () => {
    //         if (open) {
    //             return setOpen(false)
    //         }
    //         return setOpen(true)
    //     }


    //     return (
    //         <Grid item lg={4}>

    //         </Grid>
    //     )
    // }

    static makeSingle(shopObj, items) {
        const newContents = shopObj.contents.map(shopItem => {
            return Help.findInArray(shopItem, items)
        })
        return new Shop(shopObj.id, shopObj.name, shopObj.bp, newContents)
    }

    static makeArray(shopObjArray, items) {
        return shopObjArray.map(shopObj => {
            console.log(shopObj, items)
            return Shop.makeSingle(shopObj, items)
        })
    }
}

export default Shop