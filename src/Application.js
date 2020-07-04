import React, { Component } from "react";
import "./index.css";

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="main">
        <h1>You clicked the button {count} times.</h1>
        <button onClick={() => this.handleClick()}>Increase Me</button>
        <button onClick={() => this.handleDecrease()}>Decrease Me</button>
      </div>
    );
  }
}
