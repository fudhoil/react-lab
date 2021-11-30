import React, { Component } from "react";
import Card from "./card";

class Cards extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <Card />
            </div>
            <div className="col-6">
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
