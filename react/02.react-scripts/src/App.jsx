import React, { Component } from "react";
import Logs from "./components/Logs/Logs";
import "./App.css";
import LogsForm from "./components/LogsForm/LogsForm";
class App extends Component {
  state = {
    logsData: [
      {
        title: "react",
        time: "80分钟",
        date: new Date(2005, 10, 23),
        id: 1,
      },
      {
        title: "vue",
        time: "45分钟",
        date: new Date(2023, 2, 30),
        id: 3,
      },
      {
        title: "webpack",
        time: "22分钟",
        date: new Date(2022, 3, 15),
        id: 5,
      },
    ],
  };
  addHandler = (logs) => {
    const newLogs = { id: Date.now() + "", ...logs };
    this.setState(
      (state) => (state = { ...state, logsData: [newLogs, ...state.logsData] })
    );
  };
  deleteHandler = (id) => {
    const logsData = this.state.logsData.filter((v) => v.id !== id);
    this.setState((state) => (state = { ...state, logsData }));
  };
  render() {
    return (
      <div className="app">
        <LogsForm addHandler={this.addHandler}></LogsForm>
        <Logs
          logsData={this.state.logsData}
          deleteHandler={this.deleteHandler}
        ></Logs>
      </div>
    );
  }
}

export default App;
