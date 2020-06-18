import React from "react";
import ToDoDetail from "./ToDoDetail";
import {Switch, Route, withRouter} from "react-router-dom";


function ToDoList(props) {
    return(
      <Switch>
        <Route path="/toDoList/:toDoId">
          <ToDoDetail toDoList={props.toDoList} />
        </Route>
        <Route path="/toDoList">
        <ul className="list">
                {props.toDoList.map((toDoItem, index) => (
                <li key={index}>
                  <input 
                    type="checkbox"
                    id="chkDone"
                    value="thingOne"
                    onChange={() => {
                      props.handleChangeToDo(toDoItem.id)
                    }}
                    defaultChecked={toDoItem.completed}>
                </input>
                  {toDoItem.title} 
                  </li>
                  ))}
                  </ul>
        </Route>
      </Switch>
    )
}

export default withRouter(ToDoList);