import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import userImage from './userIcon.png';

const TODO_KEY = "list"
class App extends React.Component {
  state= {
    toDoList: [{
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
      }],
    
      userInfo: {
        name: "Morpheus",
        avatar: userImage
      }
  }

componentDidMount() {
   const toDoString = localStorage.getItem(TODO_KEY)
   if (toDoString){
     this.setState({toDoList: JSON.parse(toDoString) })
   }
  }
  
  componentDidUpdate(prevProps, prevState) {
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
    <div className="body">
      <Navigation userInfo={this.state.userInfo}/>
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
      <ToDoList 
      toDoList={this.state.toDoList}
      handleChangeToDo={this.handleChangeToDo} />

     </div>
    </div>
  );
}

};
export default App;
