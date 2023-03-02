/**
 * 在类组件和函数组件中写法
 *  */

import React, { Component, useRef, createRef } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  h2Ref = null;
  /* React.createRef() */
  h3Ref = createRef();
  clickHandler = () => {
    //1. 字符串方式获取 弃用了
    const { h1Ref } = this.refs;
    console.log(h1Ref, "h1Ref");
    // 2.通过箭头函数方式获取
    console.log(this.h2Ref, "h2Ref");
    // 3.React.createRef
    console.log(this.h3Ref.current, "h3Ref");
  };
  render() {
    return (
      <div>
        {/* 第一种 ref 获取方式 弃用了*/}
        <h2 ref="h1Ref">我是h1Ref标签</h2>
        {/* 第二种 ref 箭头函数方式获取赋值 */}
        <h2 ref={(e) => (this.h2Ref = e)}>我是h2Ref标签</h2>
        {/* 第三种 createRef */}
        <h2 ref={this.h3Ref}>我是h3Ref标签</h2>
        <button onClick={this.clickHandler}>获取ref</button>
      </div>
    );
  }
}
function App2() {
  // 第1种
  let h2Ref = null;
  // 第2种
  const h3Ref = createRef();
  //  此下2种都可实现
  // const h3Ref = useRef(null);
  // const h3Ref = { current: null };
  const clickHandler = () => {
    console.log(h2Ref, h3Ref.current);
  };
  return (
    <div>
      {/* 第1种 ref 箭头函数方式获取 */}
      <h2 ref={(e) => (h2Ref = e)}>我是h2Ref标签</h2>
      {/* 第2种   */}
      <h2 ref={h3Ref}>我是h3Ref标签</h2>
      <button onClick={clickHandler}>获取ref</button>
    </div>
  );
}
export default App2;
