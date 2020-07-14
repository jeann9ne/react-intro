import React, { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state= {
            date: new Date ()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date ()
        });
    }
    render () {
        return (
            <div className={styles.clock}>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

const styles = {
    clock:{
        fontSize: "1em",
        fontFamily: "'Dosis', sans-serif",
        position: "absolute",
        top: "45%",
        left: "50%",
    },
  }

export default Clock;