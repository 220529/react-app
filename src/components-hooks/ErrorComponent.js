import React, { useState, useEffect } from "react";

function ErrorComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("ErrorComponent", count);
    
    // 错误的副作用：每次 useEffect 执行时都更新 count
    // setCount(count + 1);
  }, [count]); // 依赖项数组包含 count，会导致无限循环

  return (
    <div>
      <p>You clicked {count} times</p>
    </div>
  );
}

export default ErrorComponent;
