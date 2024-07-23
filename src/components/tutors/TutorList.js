import React from "react";
import { romhackList } from "../Homepage";
import Help from "../../models/Help";
import { useParams } from "react-router-dom";
import TopBar from "../navigation/TopBar";
import { Grid } from "@mui/material";

const TutorList = (props) => {
    let { id } = useParams();
    id = parseInt(id);
    const selectedRomhack = Help.findInArray(id, romhackList);

    const tutorList = selectedRomhack.tutors.map((tutor, index) => {
        return (
            <Grid item xs={12} md={6} className="justify-center" key={index}>
                {tutor.makeDisplay(selectedRomhack, index, "lightgray")}
            </Grid>
        );
    });

    return (
        <div>
            <TopBar />
            <div className="content-container">
                <div className="location-body-container">
                    <Grid
                        style={{ marginTop: "1rem" }}
                        container
                        rowSpacing={3}
                    >
                        {tutorList}
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default TutorList;
