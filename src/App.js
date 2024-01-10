import logo from "./logo.svg";
import "./assets/styles/App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import B2DEPokedex from "./components/B2DE/Pokedex"
import NavPage from "./components/B2DE/NavPage";
import TopBar from "./components/TopBar";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <TopBar/>
                <Routes>
                    <Route exact path="/b2deDex" Component={B2DEPokedex} />
                    <Route exact path="/b2de" Component={NavPage} />
                    <Route exact path="/" Component={Homepage} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
