import { Grid } from "@mui/material";
import Help from "./Help";

class Shop {
    constructor(id, name, bp, contents) {
        this.id = id;
        this.name = name;
        this.bp = bp;
        this.contents = contents;
    }

    static makeSingle(shopObj, items) {
        const newContents = shopObj.contents.map((shopItem) => {
            return Help.findInArray(shopItem, items);
        });
        return new Shop(shopObj.id, shopObj.name, shopObj.bp, newContents);
    }

    static makeArray(shopObjArray, items) {
        return shopObjArray.map((shopObj) => {
            return Shop.makeSingle(shopObj, items);
        });
    }

    locationDisplay(unitIndex) {
        const contents = this.contents.map((shopItem, index) => {
            let price = shopItem.priceP;
            let currency = "p";
            if (this.bp) {
                price = shopItem.priceBp;
                currency = "BP";
            }
            
            let color = "lightcyan";
            if (index % 2) {
                color = "white";
            }

            let containerClass = "center list-divider"
            // if (index === 0) {
            //     containerClass += " no-border round-top";
            //     if (index === this.contents.length - 1) {
            //         containerClass += "-bottom";
            //     }
            if (index === this.contents.length - 1) {
                containerClass += " round-bottom";
            }
            return (
                <div className={containerClass} style={{backgroundColor: color}} key={index}>
                    <div className="width-80 justify-between align-center">
                        <Grid container>
                            <Grid item xs>
                                <h3>{shopItem.name}</h3>
                            </Grid>
                            <Grid item xs={3}>
                                <h3>
                                    {price}
                                    {currency}
                                </h3>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            );
        });
        return (
            <div className="location-content-container" key={unitIndex}>
                <h2 style={{marginLeft: "1rem"}}>{this.name}</h2>
                {contents}
            </div>
        );
    }
}

export default Shop;
