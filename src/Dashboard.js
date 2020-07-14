import React from "react";
import "./App.css";
import Clock from "./components/clock/Clock";
// import ToDoApp from "./components/ToDoApp";
import {withRouter} from "react-router-dom";

function Dashboard() {
    return (
        <div className="App">
    
        <h1 className={styles.dashWelcome}>Welcome</h1>
        <div >
            <Clock />
        </div> 
        <div>
         
        </div>
    
        </div>
       
    );
}

const styles = {
    dashWelcome: {
        fontSize: "4em",
        fontFamily: "'Dosis', sans-serif",
        position: "absolute",
        top: "10%",
        left: "40%",
    },
}

export default withRouter(Dashboard);

