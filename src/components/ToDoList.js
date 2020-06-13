import React from "react";


function ToDoList(props) {
    return(
        <ul className="list">
                {props.toDoList.map((toDoItem, index) => (<li key={index}>
                  <input 
                    type="checkbox"
                    id="chkDone"
                    value="thingOne"
                    onChange={() => {
                      props.handleChangeToDo(toDoItem.id)
                    }}
                    defaultChecked={toDoItem.completed}
                    >
                </input>
                  {toDoItem.title} </li>))}</ul>
    )
}

export default ToDoList