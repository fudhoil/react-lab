import { react } from "@babel/types";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Cards from "./components/cards";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default App;
