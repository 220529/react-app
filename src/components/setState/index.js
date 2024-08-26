import React from "react";

class Example extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 };
  }

  componentDidMount() {
    // 测试 setTimeout
    setTimeout(() => {
      this.setState({ val: this.state.val + 1 });
      console.log("setTimeout:", this.state.val);
    }, 0);

    // 测试 setInterval
    // setInterval(() => {
    //   this.setState({ val: this.state.val + 1 });
    //   console.log("setInterval:", this.state.val);
    // }, 1000);

    // 测试自定义 DOM 事件
    document.getElementById("customEventButton").addEventListener("click", () => {
      this.setState({ val: this.state.val + 1 });
      console.log("DOM Event:", this.state.val);
    });

    // 测试 Promise then
    Promise.resolve().then(() => {
      this.setState({ val: this.state.val + 1 });
      console.log("Promise:", this.state.val);
    });

    // 测试 AJAX 回调
    fetch("/api/cats")
      .then(response => response.json())
      .then(data => {
        this.setState({ val: this.state.val + 1 });
        console.log("AJAX:", this.state.val);
      });
  }

  // add = () => {
  //   setTimeout(() => {
  //     this.setState({ val: this.state.val + 1 });
  //     this.setState({ val: this.state.val + 1 });
  //     console.log("setTimeout.1", this.state.val);
  //     this.setState({ val: this.state.val + 1 });
  //     this.setState({ val: this.state.val + 1 });
  //     console.log("setTimeout.2", this.state.val);
  //   })
  // }

  render() {
    return (
      <div>
        <p>{this.state.val}</p>
        <button id="customEventButton">Click me</button>
        <button onClick={this.add}>add me</button>
      </div>
    );
  }
}

export default Example;
