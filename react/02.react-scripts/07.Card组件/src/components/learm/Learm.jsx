import { Component } from "react";
import "./Learm.css";
import LearmItem from "./learmItem/LearmItem";
import Card from "../UI/Card/Card";
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
class Learm extends Component {
  constructor(props) {
    super(props);
  }
  //   抽离出来 设置每一项
  setLearmItem() {
    return list.map((v) => <LearmItem {...v} key={v.title}></LearmItem>);
  }
  render() {
    return <Card className="leran">{this.setLearmItem()}</Card>;
  }
}

export default Learm;
