import "./assets/styles/App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import TopBar from "./components/TopBar";
import Pokedex from "./components/pokedex/Pokedex";
import NavPage from "./components/NavPage";

function App() {

    return (
        <div className="">
            <HashRouter>
                <TopBar />
                <Routes>
                    <Route exact path="/:id/pokedex" Component={Pokedex} />
                    <Route exact path="/" Component={Homepage} />
                    <Route exact path="/:id" Component={NavPage} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
