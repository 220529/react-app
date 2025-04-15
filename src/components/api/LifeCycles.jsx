import React, { useState, useEffect, useRef } from "react";

function HookLifecycleDemo() {
  const [count, setCount] = useState(0);
  const [showChild, setShowChild] = useState(true);
  const isMounted = useRef(false);

  // 相当于 componentDidMount 和 componentWillUnmount
  useEffect(() => {
    console.log("1. useEffect - 组件挂载 (componentDidMount)");

    return () => {
      console.log("1. useEffect cleanup - 组件卸载 (componentWillUnmount)");
    };
  }, []);

  // 相当于 componentDidUpdate
  useEffect(() => {
    if (isMounted.current) {
      console.log("2. useEffect - 组件更新 (componentDidUpdate)");
    } else {
      isMounted.current = true;
    }
  });

  // 只在 count 变化时执行
  useEffect(() => {
    if (isMounted.current) {
      console.log("3. useEffect - count 变化", count);
    }
  }, [count]);

  // 相当于 shouldComponentUpdate
  const shouldUpdate = useRef(true);
  if (!shouldUpdate.current) {
    console.log("跳过渲染 (shouldComponentUpdate)");
  }

  console.log("render - 渲染阶段");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <div
        style={{ margin: "20px 0", padding: "15px", border: "1px solid #ddd" }}
      >
        <p>当前计数: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>增加计数</button>
        <button onClick={() => (shouldUpdate.current = !shouldUpdate.current)}>
          {shouldUpdate.current ? "禁用更新" : "启用更新"}
        </button>
      </div>

      <div
        style={{ margin: "20px 0", padding: "15px", border: "1px solid #ddd" }}
      >
        <button onClick={() => setShowChild((s) => !s)}>
          {showChild ? "卸载子组件" : "挂载子组件"}
        </button>
        {showChild && <ChildComponent />}
      </div>
    </div>
  );
}

function ChildComponent() {
  useEffect(() => {
    console.log("子组件挂载");
    return () => console.log("子组件卸载");
  }, []);

  return <div style={{ marginTop: "10px", color: "green" }}>子组件内容</div>;
}

export default HookLifecycleDemo;
