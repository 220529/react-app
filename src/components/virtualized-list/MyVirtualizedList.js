import React from "react";
import { List, AutoSizer } from "react-virtualized";
import "./MyVirtualizedList.css"; // 引入样式文件

const MyVirtualizedList = ({ items }) => {
  const rowRenderer = ({ key, index, style }) => {
    return (
      <div key={key} style={style} className="list-item">
        {items[index]}
      </div>
    );
  };

  return (
    <div className="list-container">
      <AutoSizer>
        {({ height, width }) => (
          <List
            width={width || 300} // 默认宽度
            height={height || 500} // 默认高度
            rowHeight={50}
            rowCount={items.length}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default MyVirtualizedList;
