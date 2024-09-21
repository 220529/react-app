import React from "react";
import VirtualList from "./VirtualList";
import Item from "./ListItem";
import faker from "faker";
import "./index.css";

const data = [];
for (let id = 0; id < 1000; id++) {
  data.push({
    id,
    value: faker.lorem.sentences(), // 长文本
  });
}

const App = () => {
  return (
    <div id="app">
      <VirtualList listData={data} estimatedItemSize={100}>
        {({ item }) => <Item item={item} />}
      </VirtualList>
    </div>
  );
};

export default App;
