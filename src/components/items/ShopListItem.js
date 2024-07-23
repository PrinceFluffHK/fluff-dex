import React, { useState } from "react";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const ShopListItem = ({ shop }) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        if (open) {
            return setOpen(false);
        }
        return setOpen(true);
    };

    const contentsClass = open ? "" : "invis";

    const ShopHeader = (props) => {
        return (
            <div className="center">
                <div
                    className="width-80 justify-between align-center"
                    onClick={handleClick}
                >
                    <h3>{shop.name}</h3>
                    <FontAwesomeIcon icon={faBars} color="black" />
                </div>
            </div>
        );
    };

    const contents = shop.contents.map((item, index) => {
        const price = shop.bp ? item.priceBp : item.priceP;
        return (
            <div className="center" key={index}>
                <div className="width-80 justify-between align-center">
                    <Grid container>
                        <Grid item xs={1}>
                            {index + 1}
                        </Grid>
                        <Grid item xs>
                            {item.name}
                        </Grid>
                        <Grid item xs={3}>
                            {price}
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    });

    return (
        <Grid item sm={12} md={6} lg={4}>
            <ShopHeader />
            <div className={contentsClass}>{contents}</div>
        </Grid>
    );
};

export default ShopListItem;
