import { react } from "@babel/types";
import React, { Component } from "react";
import NavBar from "./components/navbar";

const texts = ["Text 1", "Text 2", "Text 3", "Text 4"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedText: "",
    };
  }

  handleClick = (i) => {
    this.setState({ clickedText: texts[i] });
    i++;
  };

  render() {
    const { clickedText } = this.state;
    return (
      <div>
        {texts.map((text, i) => (
          <button key={i} onClick={() => this.handleClick(i)}>
            Click me {i + 1}
          </button>
        ))}
        {clickedText && <p>I clicked on button with text: {clickedText}</p>}
      </div>
    );
  }
}

export default App;
