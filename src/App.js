import logo from "./logo.svg";
import "./App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route exact path="/" Component={Homepage}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
