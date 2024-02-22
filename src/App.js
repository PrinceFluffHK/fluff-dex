import "./assets/styles/App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Pokedex from "./components/pokedex/Pokedex";
import PokemonDisplay from "./components/pokemon/PokemonDisplay";

function App() {
    return (
        <div className="background">
            <div className="content-background">
                <HashRouter>
                    <Routes>
                        <Route exact path="/" Component={Homepage} />
                        <Route exact path="/:id/pokedex" Component={Pokedex} />
                        <Route
                            exact
                            path="/:id/pokedex/:selectedEntryId/:selectedFormIndex"
                            Component={PokemonDisplay}
                        />
                    </Routes>
                </HashRouter>
            </div>
        </div>
    );
}

export default App;
