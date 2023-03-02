import React, { Component } from "react";
import Card from "../UI/Card/Card";
import "./LogsForm.css";
class LogsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "2023-4-22",
      title: "您好",
      time: "12",
    };
  }
  addHandler = () => {
    const newLogs = {
      ...this.state,
      date: new Date(this.state.date),
    };
    this.props.addHandler(newLogs);
  };
  render() {
    return (
      <Card className="logs-form">
        <form>
          <div className="logs-item-title">学习计划</div>
          <div className="logs-form-item">
            <label htmlFor="date">日期</label>
            <input
              type="date"
              id="date"
              value={this.state.date}
              onChange={(e) => {
                this.setState(
                  (state) => (state = { ...state, date: e.target.value })
                );
              }}
            />
          </div>
          <div className="logs-form-item">
            <label htmlFor="title">内容</label>
            <input
              type="text"
              id="title"
              value={this.state.title}
              onChange={(e) =>
                this.setState(
                  (state) => (state = { ...state, title: e.target.value })
                )
              }
            />
          </div>
          <div className="logs-form-item">
            <label htmlFor="time">时长</label>
            <input
              type="number"
              name=""
              id="time"
              value={this.state.time}
              onChange={(e) =>
                this.setState(
                  (state) => (state = { ...state, time: e.target.value })
                )
              }
            />
          </div>
          <div className="logs-form-item">
            <button type="button" onClick={this.addHandler}>
              添加
            </button>
          </div>
        </form>
      </Card>
    );
  }
}

export default LogsForm;
