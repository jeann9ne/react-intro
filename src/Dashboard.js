import React from "react";
import "./App.css";
import Clock from "./components/clock/Clock";

function App() {
    return (
        <div classname="App">
        <h1 className="dash-welcome">Welcome</h1>
        <div className="clock">
            <Clock />
        </div>
        </div>
    );
}

export default App;

