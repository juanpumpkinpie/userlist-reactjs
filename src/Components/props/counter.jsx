import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  handleUp = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        Counter: <span>{this.state.counter}</span>
        <button onClick={this.handleUp}>Up</button>
      </div>
    );
  }
}
