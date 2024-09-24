import { List, AutoSizer } from "react-virtualized";
import { items } from "@/constants/virtualized";
import style from "./style.module.less";

function App() {
  const rowRenderer = ({ key, index, style }) => {
    const item = items[index];
    return (
      <div key={key} style={style} className={style.item}>
        <span>{item.id}: </span>
        <span>{item.value}</span>
      </div>
    );
  };
  return (
    <div className={style.container}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            width={width} // 默认宽度
            height={height} // 默认高度
            rowHeight={50}
            rowCount={items.length}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </div>
  );
}

export default App;
