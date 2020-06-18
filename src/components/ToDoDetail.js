import React, { Component } from "react";
import { Link } from "react-router-dom";

class ToDoDetail extends Component {
    state = {
        toDoList: {},

    };
    render() {
        return (
            <div>
                <h3>{this.statetoDoList.title}</h3>
                <div>Details: ${this.state.toDoList.description}</div>
                <p>{this.state.toDoList.completed}</p>
                <Link className="detail-go-back-link" to="/todoapp">
                    Go Back
                </Link>
            </div>
        );
    }
}

export default ToDoDetail;