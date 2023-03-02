import { Component } from "react";
import LearnLog from "./components/LearnLog";

const list = [
  {
    title: "react",
    time: "80分钟",
    day: "25",
    month: "三月",
    id: 1,
  },
  {
    title: "vue",
    time: "45分钟",
    day: "31",
    month: "三月",
    id: 3,
  },
  {
    title: "webpack",
    time: "22分钟",
    day: "15",
    month: "四月",
    id: 5,
  },
];
class App extends Component {
  render() {
    return (
      <div className="leran">
        {list.map((v) => (
          <LearnLog {...v} key={v.id}></LearnLog>
        ))}
      </div>
    );
  }
}
export default App;
