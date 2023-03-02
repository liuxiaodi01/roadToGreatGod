import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className={`card ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
