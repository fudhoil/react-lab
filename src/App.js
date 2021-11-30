import { react } from "@babel/types";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
