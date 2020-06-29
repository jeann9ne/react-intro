import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import ToDoApp from "./components/ToDoApp";
import Dashboard from "./Dashboard";
import {withRouter, Switch, Route} from "react-router-dom";
import userImage from './userIcon.png';

class App extends React.Component {
  state= {
      userInfo: {
        name: "Morpheus",
        avatar: userImage
      }
  }

render() {
  return (
   
    <div className="body">
        <Navigation userInfo={this.state.userInfo}/>
      <Switch>
      <Route path="/toDoList">
          <ToDoApp />
      </Route>
      <Route exact path="/">
        <Dashboard />
      </Route>
    </Switch>
    

     </div>
  );
}

};
export default withRouter(App);
