import React from "react";
import "./App.css";
import Clock from "./components/clock/Clock";
// import ToDoApp from "./components/ToDoApp";
import {withRouter} from "react-router-dom";

function Dashboard() {
    return (
        <div className="App">
    
        <h1 className="dash-welcome">Welcome</h1>
        <div >
            <Clock />
        </div> 
        <div>
         
        </div>
    
        </div>
       
    );
}

export default withRouter(Dashboard);

