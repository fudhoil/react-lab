import React, { Component } from "react";
import Counters from "./components/counters";

class Main extends React.Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleIncrement}
          className="btn btn-primary btn-md"
        >
          next
        </button>
      </div>
    );
  }
}

export default Main;
