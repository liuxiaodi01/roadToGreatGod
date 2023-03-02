import "./learm-log.css";
import { Component } from "react";
class LearnLog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="learn-log">
        <div className="date">
          <p className="month">{this.props.month}</p>
          <h2 className="day">{this.props.day}</h2>
        </div>
        <div className="container">
          <p className="title">{this.props.title}</p>
          <p className="time">{this.props.time}</p>
        </div>
      </div>
    );
  }
}
export default LearnLog;
