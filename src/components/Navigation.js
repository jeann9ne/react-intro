import React from "react";
import {NavLink} from "react-router-dom";




function Navigation(props){

    return(
        <div style={styles.navbar}>
        <img style={styles.userImg} src={props.userInfo.avatar} alt="user"></img>
        <p>{props.userInfo.name}</p>
        <ul style={styles.list}>
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
         <input className={styles.searchBar} type="text" placeholder="Search"></input>
       </div>
    )
}

const styles = {
  navbar:{
    gridColumnStart: "1",
    fontFamily: "'Dosis', sans-serif",
    fontSize: "1em",
    backgroundColor: "var(--accent-main)",
    listStyle: "none", 
    float: "left",
    height: "100%",
    width: "100%", 
    padding: "10px",
    textAlign: "center",
  },

  userImg:{
    borderRadius: "50%",
    width: "90px",
  },

  list: {
    listStyle: "none",
    textAlign: "left",
  },

  searchBar: {
    gridColumnStart: "1",
    borderRadius: "30px",
    marginLeft: "10px",
  },
}
  
  



export default Navigation;