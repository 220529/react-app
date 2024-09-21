import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // 为按钮绑定一个原生点击事件
    document.getElementById("btn").addEventListener("click", () => {
      console.log("原生事件");
    });
  }, []);

  const handleClick = e => {
    console.log("React 合成事件", e);
  };

  return (
    <button id="btn" onClick={handleClick}>
      点击我
    </button>
  );
}

export default App;
