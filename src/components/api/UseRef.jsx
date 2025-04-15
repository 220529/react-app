import React, { useRef, useEffect } from "react";

function UseRef() {
  const ref = useRef(null); // 初始值

  // const numRef = useRef(0)
  // numRef.current

  useEffect(() => {
    console.log(ref.current); // DOM 节点
  }, []);

  return (
    <div>
      <span ref={ref}>ref</span>
    </div>
  );
}

export default UseRef;
