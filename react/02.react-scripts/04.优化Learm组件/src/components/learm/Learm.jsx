import { Component } from "react";
import "./Learm.css";
import LearmItem from "./learmItem/LearmItem";
class Learm extends Component {
  constructor(props) {
    super(props);
  }
  //   抽离出来 设置每一项
  setLearmItem() {
    return this.props.list.map((v) => (
      <LearmItem {...v} key={v.title}></LearmItem>
    ));
  }
  render() {
    return <div className="leran">{this.setLearmItem()}</div>;
  }
}

export default Learm;
