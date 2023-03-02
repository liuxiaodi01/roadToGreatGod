import React, { Component, Fragment } from "react";
import Card from "../../../UI/Card/Card";
import "./MyDate.css";
class MyDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: this.props.date.toLocaleString("zh-CN", { month: "long" }),
      day: this.props.date.getDay(),
    };
    console.log(this.props.date);
  }
  render() {
    return (
      <Card className="date">
        <p className="month">{this.state.month}</p>
        <h2 className="day">{this.state.day}</h2>
      </Card>
    );
  }
}

export default MyDate;
