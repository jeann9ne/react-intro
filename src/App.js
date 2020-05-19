import React from 'react';
import './App.css';
import userImage from './userIcon.png';

const toDoList= [{
  id: 1,
  title: "gotta do this",
  description: "what exactly needs to get done.",
  completed: false
  },
  {
   id: 2,
   title: "better do that",
   description: "another thing that needs done",
   completed: false
  },
  {
    id: 3, 
    title: "don't forget this",
    description: "the thing I need to remember",
    completed: false
  },
  {
    id: 4,
    title: "gotta do this",
    description: "this is really important",
    completed: false
  }]

  const userInfo= {
    name: "Morpheus",
    avatar: userImage
  }

function App() {
  return (
    <div class="body">
  
    <div class="navbar">
      <img class="user-img" src={userInfo.avatar} alt="user"></img>
      <p>{userInfo.name}</p>
      <ul class="navlist">
         <li> <i class="fas fa-home"></i> Today</li>
        <li> <i class="fas fa-calendar"></i> Calendar
          <ul class="navlist">
             <li> <i class="fas fa-calendar-week"></i> Weekly</li>
             <li> <i class="fas fa-calendar-alt"></i> Monthly</li>
          </ul>
        </li>
        <li> <i class="fas fa-bullseye"></i> Goals</li>
        <li> <i class="fas fa-archive"></i> Archive</li>
        <li> <i class="fas fa-cog"></i> Settings</li>
      </ul>
       <input class="search-bar" type="text" placeholder="Search"></input>
     </div>

     <div class="to-do-list">
       <h1>Today</h1>
              <ul class="navlist">
                {toDoList.map (toDoItem => (<li> <input 
              type = "checkbox"
              id = "chkDone"
              value = "thingOne" /> 
              {toDoItem.title} </li>))}</ul>
     </div>
    </div>
  );
}

export default App;
