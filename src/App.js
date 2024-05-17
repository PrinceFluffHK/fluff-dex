import "./assets/styles/App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Pokedex from "./components/pokedex/Pokedex";
import PokemonDisplay from "./components/pokemon/PokemonDisplay";
import MovePage from "./components/moves/MovePage";
import MoveList from "./components/moves/MoveList";
import TrainerList from "./components/trainers/TrainerList";
import TrainerDisplay from "./components/trainers/TrainerDisplay";
import ShopList from "./components/items/ShopList";

function App() {
    return (
        <div className="content-background">
            <HashRouter>
                <Routes>
                    <Route exact path="/" Component={Homepage} />
                    <Route path="/:id/pokedex/:dexType" Component={Pokedex} />
                    <Route exact path="/:id/moves" Component={MoveList} />
                    <Route
                        exact
                        path="/:id/pokemon/:entryId/:formIndex"
                        Component={PokemonDisplay}
                    />
                    <Route
                        exact
                        path="/:id/moves/:moveId"
                        Component={MovePage}
                    />
                    <Route exact path="/:id/trainers" Component={TrainerList} />
                    <Route
                        exact
                        path="/:id/trainers/:trainerId"
                        Component={TrainerDisplay}
                    />
                    <Route exact path="/:id/shops" Component={ShopList} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
