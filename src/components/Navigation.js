import React from "react";
import {NavLink} from "react-router-dom";


function Navigation(props){
    return(
        <div className="navbar">
        <img className="user-img" src={props.userInfo.avatar} alt="user"></img>
        <p>{props.userInfo.name}</p>
        <ul className="list">
           <NavLink exact to="/">
             <li> 
               <i className="fas fa-home"></i> 
               Dashboard
              </li>
           </NavLink>
           <NavLink to="/todolist">
               <li>
                <i className="fas fa-sun"></i>
                Today
               </li>
           </NavLink>
          <li> <i className="fas fa-calendar"></i> Calendar
            <ul className="navlist">
               <li> <i className="fas fa-calendar-week"></i> Weekly</li>
               <li> <i className="fas fa-calendar-alt"></i> Monthly</li>
            </ul>
          </li>
          <li> <i className="fas fa-bullseye"></i> Goals</li>
          <li> <i className="fas fa-archive"></i> Archive</li>
          <li> <i className="fas fa-cog"></i> Settings</li>
        </ul>
         <input className="search-bar" type="text" placeholder="Search"></input>
       </div>
    )
}


export default Navigation;