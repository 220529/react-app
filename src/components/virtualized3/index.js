import React, { useEffect, useState, useRef, useMemo } from "react";
import faker from "faker";
import style from "./style.module.less";

const length = 1000;
const itemHeight = 80;

const items = [];
for (let id = 0; id < length; id++) {
  items.push({
    id,
    value: id,
    value: faker.lorem.sentences(), // 长文本
  });
}

const bufferScale = {
  top: 0.5,
  bottom: 0.2,
};

let count = 10; // 可显示的列表项数
let scrollTop = 0;
let offsetTop = 0;

const throttle = (handler, time) => {
  let oldTime = 0;
  return function () {
    const nowTime = Date.now();
    if (nowTime - oldTime > time) {
      oldTime = nowTime;
      handler.call(this, ...arguments);
    }
  };
};

function App() {
  const ref = useRef();
  const sliderRef = useRef();
  const contentRef = useRef();
  // const [translateY, setTranslateY] = useState(0);
  const [offset, setOffset] = useState({ start: 0, end: 10 });

  const [positions, setPositions] = useState([]);

  const offsetBuffer = useMemo(() => {
    // return {start: 0, end: 0}
    return {
      start: Math.floor(Math.min(offset.start, bufferScale.top * count)),
      end: Math.floor(Math.min(length - offset.end, bufferScale.bottom * count)),
    };
  }, [offset, count]);

  const scroll = throttle(e => {
    scrollTop = e.target.scrollTop;
    // offsetTop = scrollTop % itemHeight;

    const leaveSize = Math.floor(scrollTop / itemHeight);
    const bottomSize = leaveSize + count;
    setOffset({ start: leaveSize, end: bottomSize });

    if (leaveSize > 0) {
      // setTranslateY(scrollTop - offsetTop);
      // setTranslateY(scrollTop - offsetTop - realStart * itemHeight);
    } else {
      // setTranslateY(0);
    }
  }, 50);

  const translateY = useMemo(() => {
    if (offsetBuffer > 0) {
    }
    // offsetTop = scrollTop % itemHeight;
    // return scrollTop - offsetTop - offset.start * itemHeight;
    return 0;
  }, [offset, offsetBuffer]);

  const handler = e => {
    console.log("handler...");
  };
  const renderList = useMemo(() => {
    return items.slice(offset.start - offsetBuffer.start, offset.end + offsetBuffer.end);
  }, [offset, offsetBuffer]);
  useEffect(() => {
    const clientHeight = ref.current.clientHeight;
    count = Math.ceil(clientHeight / itemHeight);
  }, []);

  useEffect(() => {}, []);
  return (
    <div>
      offsetTop:{offsetTop} offset: {JSON.stringify(offset)}
      offsetBuffer: {JSON.stringify(offsetBuffer)}
      <div className={style.wrapper} onScroll={scroll} ref={ref}>
        <div
          className={style.faker}
          ref={sliderRef}
          style={{ height: itemHeight * items.length + "px" }}
        />
        <ul
          className={style.content}
          ref={contentRef}
          style={{ transform: `translate3d(0, ${translateY}px, 0)` }}
        >
          {renderList.map((item, index) => (
            <li
              key={index}
              className={style.item}
              style={{ height: itemHeight + "px" }}
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
