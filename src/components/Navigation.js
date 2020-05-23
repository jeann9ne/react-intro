import React from "react"

function Navigation(){
    return(
        <div className="navbar">
        <img className="user-img" src={this.state.userInfo.avatar} alt="user"></img>
        <p>{this.state.userInfo.name}</p>
        <ul className="list">
           <li> <i className="fas fa-home"></i> Today</li>
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


export default Navigation