import { Grid } from "@mui/material";

const DexDisplay = ({ selectedRomhack, dexType, setSelectedMonId }) => {
    const dexList =
        dexType === 0
            ? selectedRomhack.regionalDex.dexArray
            : selectedRomhack.nationalDex.dexArray;
    // console.log("dexlist", dexList);
    const pokedex = dexList.map((entry, index) => {
        if (entry.id > 0) {
            const handleSelect = () => {
                setSelectedMonId(entry.id);
            };
            const mon = entry.forms[0];

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
                            <h3>#{entry.id}:</h3>
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
        }
    });
    return (
        <div>
            {pokedex}
        </div>
    );
};

export default DexDisplay;
