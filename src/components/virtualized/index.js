import React, { useEffect, useState, useRef, useMemo } from "react";
import faker from "faker";
import { throttle } from "lodash-es";
import style from "./style.module.less";

const length = 1000;
const itemheight = 50;

const items = [];
for (let id = 0; id < length; id++) {
  items.push({
    id,
    value: faker.lorem.sentences(), // 长文本
  });
}

function App() {
  const ref = useRef();
  const sliderRef = useRef();
  const contentRef = useRef();

  const [visible, setVisible] = useState({
    start: 0, // 开始索引
    end: 0, // 结束索引
    count: 0, // 可视区能放多少个
    height: 0, // 可视区高度
    translateY: 0, // 可视区偏移量
  });

  useEffect(() => {
    const el = ref.current;
    const count = Math.ceil(el.clientHeight / itemheight);
    setVisible({
      ...visible,
      end: count,
      count,
      height: el.clientHeight,
    });
  }, []);

  const renderList = useMemo(() => {
    return items.slice(visible.start, visible.end);
  }, [visible]);

  const translateSize = useMemo(
    () => `translate3d(0,${visible.translateY}px,0)`,
    [visible.translateY]
  );

  const scroll = throttle(e => {
    const scrollTop = e.target.scrollTop;
    const start = Math.floor(scrollTop / itemheight);
    setVisible({
      ...visible,
      start,
      end: start + visible.count,
      translateY: scrollTop - (scrollTop % itemheight),
    });
  }, 50);
  const handler = e => {
    console.log("handler...");
  };
  return (
    <div>
      <h1>虚拟化列表示例</h1>
      <div className={style.container} onScroll={scroll} ref={ref}>
        <div
          className={style.slider}
          ref={sliderRef}
          style={{ height: itemheight * items.length + "px" }}
        />
        <ul className={style.content} ref={contentRef} style={{ transform: translateSize }}>
          {renderList.map((item, index) => (
            <li
              key={index}
              className={style.item}
              style={{ height: itemheight + "px" }}
              onClick={() => handler(item)}
            >
              <span>{item.id}: </span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
