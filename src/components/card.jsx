import React, { Component } from "react";

import image from "../product-display.jpg";

class Card extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <img src={image} alt="" className="img-fluid" />
          <div className="card-body">
            <h5>Oke</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
