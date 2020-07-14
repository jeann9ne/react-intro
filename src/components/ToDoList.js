import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";


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
                    <ToDoItem 
                    onClick={()=> props.history.push("/toDoList/" + toDoList.id)}>
                      {toDoList.title} 
                    </ToDoItem>
         
                  </li>
                  ))}
                  </ul>
          
    )
}

const ToDoItem = styled.div`
border-radius: 50%;
`;


export default withRouter(ToDoList);