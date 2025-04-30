import React from "react";

export default function SubAppJumpTest() {
  const handleClick = () => {
    console.log("react 按钮被点击了！");
    window.$wujie.props.jump({ path: "/react19", query: { react19: "/api" } });
  };

  return <button onClick={handleClick}>点击打印日志</button>;
}
