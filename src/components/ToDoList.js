import React from "react";


function ToDoList(props) {
    return(
        <ul toDoList={props.toDoList}className="list">
                {this.toDoList.map((toDoItem, index) => 
                (<li key={index}>
                  <input 
                  defaultChecked={props.toDoItem.completed} 
                  onChange={() => props.toggle(props.toDoItem)} type="checkbox" id="chkDone" value="thingOne" />
                  {toDoItem.title} </li>))}</ul>
    )
}

export default ToDoList