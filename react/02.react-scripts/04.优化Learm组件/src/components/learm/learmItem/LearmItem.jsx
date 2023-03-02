import React, { Component } from "react";
import MyDate from "./myDate/MyDate";
import "./LearmItem.css";
class LearmItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="learn-log">
        <MyDate date={this.props.date}></MyDate>
        <div className="container">
          <p className="title">{this.props.title}</p>
          <p className="time">{this.props.time}</p>
        </div>
      </div>
    );
  }
}

export default LearmItem;
