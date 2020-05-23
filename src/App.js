import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList"
import userImage from './userIcon.png';

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
};

render() {
  return (
    <div className="body">
      <Navigation userInfo={userInfo}/>
     <div className="to-do-list">
      <Header title="Today" />
      <ToDoList toDoList={toDoList}/>
     </div>
    </div>
  );
}

export default App;
