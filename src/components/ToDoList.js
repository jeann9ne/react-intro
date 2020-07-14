import React from "react";
import { withRouter } from "react-router-dom";
// import ToDoDetail from "./ToDoDetail";


function ToDoList(props) {
    return(
           
        <ul className="list">
          
                {props.toDoList.map((toDoList, index) => (
                <li key={index}>
                  <input 
                    type="checkbox"
                    id="chkDone"
                    value="thingOne"
                    onChange={() => {
                      props.handleChangeToDo(toDoList.id)
                    }}
                    defaultChecked={toDoList.completed} >  
                    </input>     
                    <div
                    className="to-do-item" 
                    onClick={()=> props.history.push("/toDoList/" + toDoList.id)}>
                      {toDoList.title} 
                    </div>
         
                  </li>
                  ))}
                  </ul>
          
    )
}


export default withRouter(ToDoList);