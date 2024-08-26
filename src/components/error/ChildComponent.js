import React from "react";

function ChildComponent() {
  // 这里我们故意触发一个错误
  throw new Error("This is an intentional error in ChildComponent!");

  return <div>This is the Child Component</div>;
}

export default ChildComponent;
