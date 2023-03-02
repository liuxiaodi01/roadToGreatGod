import { Component, Fragment } from "react";

class App extends Component {
  clickHandler(event) {
    // react对事件对象进行包装了一成，不需要考虑浏览器兼容性问题
    event.preventDefault();
    event.stopPropagation();
    alert("我是app中的clickHandle");
  }
  render() {
    return (
      <Fragment>
        <button onClick={() => alert("点我一下")}>点我一下</button>
        <button onClick={this.clickHandler}>哈哈哈</button>
        <a href="https://baidu.com" onClick={this.clickHandler}>
          超链接默认行为
        </a>
      </Fragment>
    );
  }
}
export default App;
