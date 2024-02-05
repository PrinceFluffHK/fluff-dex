import "./assets/styles/App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import TopBar from "./components/TopBar";
import * as romhacks from "./data/romhacks"

function App() {
    
    return (
        <div className="">
            <HashRouter>
                <TopBar/>
                <Routes>
                    {romhacks.b2de.routes()}
                    <Route exact path="/" Component={Homepage} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
