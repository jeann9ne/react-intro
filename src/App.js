import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
  
    <div class="navbar">
      <ul>
         <li>Today</li>
        <li>Calendar
          <ul>
             <li>Weekly</li>
             <li>Monthly</li>
          </ul>
        </li>
        <li>Goals</li>
        <li>Archive</li>
        <li>Settings</li>
      </ul>
       <input type="text" placeholder="Search"></input>
     </div>

     <div class="to-do-list">
       <h1>Today</h1>
       <form action = ''>
         <fieldset>
          <input type = "checkbox"
              id = "chkDone"
              value = "thingOne" />
              <p>Just an example</p>
          <input type = "checkbox"
              id = "chkDone"
              value = "thingTwo" />
              <p>Just an example</p>
         </fieldset>
       </form>
     </div>
    </div>
  );
}

export default App;
