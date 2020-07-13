import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";


class ToDoDetail extends Component {
    state = {
        ...this.getToDoFromList(),

    };

    handleChange=(event)=>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]:value});
    }

    componentDidUpdate(prevProps){
        if (this.props !== prevProps){
            this.setState ({ ...this.getToDoFromList() });
        }
    }

    getToDoFromList() {
        const toDoId = this.props.match.params.toDoId
        return this.props.toDoList.find(item=> item.id ===toDoId) || {};
    };

    handleAddDescription = () =>{
        let newToDoObj = {
          title: this.state.toDo,
        };
        this.setState((state)=>({
          toDoList: [...state.toDoList, newToDoObj],
          toDo: "",
        }));
      };

    render() {
        return (
         <div className="details-title">
           <h3>{this.state.title}</h3>
             <h2>Details</h2>
            <div>
            <textarea
            className="details-textarea"
            value={this.state.description} 
            onChange={this.handleChange}
            name="description" 
            cols="70"
            rows="10"
            ></textarea>
            </div>
            <p>{this.state.completed}</p>
                <Link className="detail-go-back-link" to="/todolist">
                    Go Back
                </Link>
            </div>
        );
    }
}

export default withRouter(ToDoDetail);