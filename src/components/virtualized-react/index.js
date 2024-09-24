import React from "react";
import MyVirtualizedList from "./MyVirtualizedList";

const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

function App() {
  return (
    <div>
      {/* <h1>虚拟化列表示例</h1> */}
      <MyVirtualizedList items={items} />
    </div>
  );
}

export default App;
