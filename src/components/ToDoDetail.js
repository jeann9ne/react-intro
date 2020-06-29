import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";


class ToDoDetail extends Component {
    state = {
        toDoList: this.getToDoFromList(),

    };

    handleChange=(event)=>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]:value});
    }

    componentDidUpdate(prevProps){
        if (this.props !== prevProps){
            this.setState ({ toDoList: this.getToDoFromList() });
        }
    }

    getToDoFromList() {
        const toDoId = parseInt(this.props.match.params.toDoId)
        return this.props.toDoList.find(item=> item.id ===toDoId) || {};
    };

    render() {
        return (
         <div className="details-title">
           <h3>{this.state.toDoList.title}</h3>
             <h2>Details</h2>
            <div>
            <textarea
            className="details-textarea"
            value={this.state.toDoList.description} 
            onChange={this.handleChange}
            name="description" 
            cols="70"
            rows="10"
            ></textarea>
             <button className="details-submit">Submit</button>
            </div>
            <p>{this.state.toDoList.completed}</p>
                <Link className="detail-go-back-link" to="/todolist">
                    Go Back
                </Link>
            </div>
        );
    }
}

export default withRouter(ToDoDetail);