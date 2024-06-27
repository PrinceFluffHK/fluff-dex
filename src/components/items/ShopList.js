import React from "react";
import { useParams } from "react-router-dom";
import TopBar from "../navigation/TopBar";
import { Grid } from "@mui/material";
import { romhackList } from "../Homepage";
import Help from "../../models/Help";
import ShopListItem from "./ShopListItem";

const ShopList = (props) => {
    let { id } = useParams()
    id = parseInt(id)
    const selectedRomhack = Help.findInArray(id, romhackList)
    const shops = selectedRomhack.shops.map((shop, index) => {
        return <ShopListItem shop={shop} key={index}/>
    })

    return (
        <div>
            <TopBar />
            <div className="content-container">
                <div className="body-container">
                    <Grid container>
                        {shops}
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default ShopList;
