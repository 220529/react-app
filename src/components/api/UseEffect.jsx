import React, { useState, useEffect } from "react";

function SimpleEffectDemo() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // 1. 组件挂载和卸载时的效果
  useEffect(() => {
    console.log("组件已挂载 - 只在第一次渲染时执行");

    return () => {
      console.log("组件即将卸载 - 清理工作在这里进行");
    };
  }, []);

  // 2. 依赖项变化时的效果
  useEffect(() => {
    console.log(`count 值变化为: ${count}`);

    // 这里可以添加 count 变化时需要执行的逻辑
    document.title = `计数: ${count}`;
  }, [count]);

  // 3. 定时器示例
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("定时器已清除");
    };
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          margin: "20px 0",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      >
        <h3>计数器</h3>
        <p>当前计数: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          style={{ padding: "5px 10px", marginRight: "10px" }}
        >
          增加
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ padding: "5px 10px" }}
        >
          减少
        </button>
      </div>

      <div
        style={{
          margin: "20px 0",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      >
        <h3>定时器</h3>
        <p>当前时间: {time}</p>
      </div>
    </div>
  );
}

export default SimpleEffectDemo;
