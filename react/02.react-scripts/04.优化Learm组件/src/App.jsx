import { Component, Fragment } from "react";
import Learm from "./components/learm/Learm";
const list = [
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
];
class App extends Component {
  render() {
    return <Learm list={list}></Learm>;
  }
}
export default App;
