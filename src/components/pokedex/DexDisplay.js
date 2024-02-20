import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const DexDisplay = ({ selectedRomhack, dexType }) => {
    const dexList =
        dexType === 0
            ? selectedRomhack.regionalDex.dexArray
            : selectedRomhack.nationalDex.dexArray;
            
    const pokedex = dexList.map((entry, index) => {
        if (entry.id > 0) {
            const mon = entry.forms[0];

            let bgColor = "white";
            if (index % 2) {
                bgColor = "lightcyan";
            }

            return (
                <Link
                    className="dex-padding"
                    to={`${entry.id}/0`}
                    key={index}
                    style={{ backgroundColor: bgColor }}
                >
                    <Grid container spacing={0}>
                        <Grid item xs={3} className="align-center">
                            <h3>#{entry.id}:</h3>
                        </Grid>
                        <Grid item xs={6} className="align-center">
                            <h3>{mon.name}</h3>
                        </Grid>
                        <Grid
                            item
                            xs={3}
                            className="align-center justify-right"
                        >
                            <img
                                className="dex-sprite"
                                src={mon.spriteUrl}
                                alt={`Sprite of ${mon.name}`}
                            />
                        </Grid>
                    </Grid>
                </Link>
            );
        }
    });
    return (
        <div>
            {pokedex}
        </div>
    );
};

export default DexDisplay;
