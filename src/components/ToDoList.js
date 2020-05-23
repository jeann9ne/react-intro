import React from "react";

function ToDoList() {
    return(
        <ul className="list">
                {this.state.toDoList.map((toDoItem, index) => (<li key={index}>
                  <input type="checkbox" id="chkDone" value="thingOne" />
                  {toDoItem.title} </li>))}</ul>
    )
}

export default ToDoList