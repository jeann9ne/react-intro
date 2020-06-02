import React from "react";


function ToDoList(props) {
    const handleChangeToDo = () => props.onChange(props.item.id)
    return(
        <ul className="list">
                {props.toDoList.map((toDoItem, index) => (<li key={index}>
                  <input 
                  defaultChecked={toDoItem.completed} 
                  onChange={handleChangeToDo} type="checkbox" id="chkDone" value="thingOne" />
                  {toDoItem.title} </li>))}</ul>
    )
}

export default ToDoList