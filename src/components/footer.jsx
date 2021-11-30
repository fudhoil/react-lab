import React, { Component } from "react";

const footer = (
  <footer className="footer bg-secondary">
    <div className="container">
      <p>Haloo</p>
    </div>
  </footer>
);

class Footer extends React.Component {
  render() {
    return <div>{footer}</div>;
  }
}

export default Footer;
