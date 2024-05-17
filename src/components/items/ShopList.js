import { React, useParams } from "react";
import TopBar from "../navigation/TopBar";
import { Grid } from "@mui/material";

const ShopList = (props) => {
    let { id } = useParams;

    const shops = (props) => {
        // const shops 
    };

    return (
        <div>
            <TopBar />
            <div className="content-container">
                <div className="body-container">
                    <Grid container>
                        
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default ShopList;
