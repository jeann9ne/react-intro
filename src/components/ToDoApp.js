import React from 'react';
// import './App.css';
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoDetail from "./ToDoDetail";
import {withRouter, Route, Switch} from "react-router-dom";
import shortid from 'shortid';

const TODO_KEY = "list"
class ToDoApp extends React.Component {
  state= {
    toDoList: [{
      id: shortid.generate(),
      title: "gotta do this",
      description: "what exactly needs to get done.",
      completed: false
      },
      {
       id: shortid.generate(),
       title: "better do that",
       description: "another thing that needs done",
       completed: false
      },
      {
        id: shortid.generate(), 
        title: "don't forget this",
        description: "the thing I need to remember",
        completed: false
      },
      {
        id: shortid.generate(),
        title: "gotta do this",
        description: "this is really important",
        completed: false
      }],
  
  }

componentDidMount() {
   const toDoString = localStorage.getItem(TODO_KEY)
   if (toDoString){
     this.setState({toDoList: JSON.parse(toDoString) })
   }
  }
  
  componentDidUpdate(prevState) {
    if (prevState.toDoList !== this.state.toDoList){
      localStorage.setItem(TODO_KEY, JSON.stringify(this.state.toDoList));

    }
  }

  handleInputChange = (event) =>{
    this.setState({toDo: event.target.value });
  };

  handleAddNewToDo = () =>{
    let newToDoObj = {
      title: this.state.toDo,
    };
    this.setState((state)=>({
      toDoList: [...state.toDoList, newToDoObj],
      toDo: "",
    }));
  };

  handleChangeToDo = (id) => {
    this.setState((state)=>{
      const newList = state.toDoList.map((item) => {
      if (item.id === id) {
        return {...item, completed: item.completed === true ? false : true}

      } else {
        return item;
      }

    });
    return {
      toDoList: newList,
    };
  });
};

render() {
  return (
    
    <Switch>
      <Route path="/toDoList/:toDoId">
        <ToDoDetail toDoList={this.state.toDoList} />
      </Route>console.log(id)
    <div className="body">
     <div className="to-do-list">
      <Header title="Today" />
      <div className="to-do-input">
          <input 
          type="text" 
          value= {this.state.toDo} 
          onChange={this.handleInputChange} >
          </input>
          <button onClick={this.handleAddNewToDo}>New Item</button>
         
      </div>
      <Route>  
        <div>
          <ul>
          <ToDoList toDoList={this.state.toDoList} handleChangeToDo={this.handleChangeToDo}/>
          </ul>  
        </div>
        </Route>
    </div>
    </div>
    </Switch>
  );
}

};
export default withRouter(ToDoApp);
