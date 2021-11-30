import { react } from "@babel/types";
import React, { Component } from "react";
import NavBar from "./components/navbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
