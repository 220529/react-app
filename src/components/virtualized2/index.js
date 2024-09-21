import React, { useEffect, useRef, useState } from "react";
import faker from "faker";
import "./index.css"; // 引入 CSS 样式

const VirtualList = () => {
  const containerRef = useRef(null);
  const [listData, setListData] = useState([]);
  const [phantomHeight, setPhantomHeight] = useState(0);
  const [itemPositions, setItemPositions] = useState([]);
  const [visibleInfo, setVisibleInfo] = useState({ startIndex: 0, endIndex: 0, count: 0 });
  const [startOffset, setStartOffset] = useState(0);

  const estimateHeight = 100;

  useEffect(() => {
    // 初始化列表数据
    const data = Array.from({ length: 1000 }, (_, index) => ({
      index,
      text: faker.lorem.sentences(),
    }));
    setListData(data);
  }, []);

  useEffect(() => {
    const height = containerRef.current.clientHeight;
    console.log("containerRef", containerRef.current.clientHeight);

    const count = Math.ceil(height / estimateHeight);
    setVisibleInfo({ startIndex: 0, endIndex: count, count });
    setPhantomHeight(listData.length * estimateHeight);
    setItemPositions(
      listData.map((_, index) => ({
        index,
        top: index * estimateHeight,
        bottom: (index + 1) * estimateHeight,
        height: estimateHeight,
      }))
    );
  }, [listData]);

  const visibleData = listData.slice(
    Math.max(visibleInfo.startIndex - 1, 0),
    Math.min(visibleInfo.endIndex + 1, listData.length)
  );

  const handleScroll = e => {
    const scrollTop = e.target.scrollTop;
    const startIndex = getStartIndex(scrollTop);
    const count = Math.ceil(containerRef.current.clientHeight / estimateHeight);
    setVisibleInfo({ startIndex, endIndex: startIndex + count, count });
    updateStartOffset();
  };

  const getStartIndex = scrollTop => {
    let start = 0;
    let end = listData.length - 1;
    let tempIndex = null;

    while (start <= end) {
      const midIndex = Math.floor((end + start) / 2);
      const midBottom = itemPositions[midIndex].bottom;

      if (midBottom === scrollTop) {
        tempIndex = midIndex + 1;
        return tempIndex;
      } else if (midBottom < scrollTop) {
        start = midIndex + 1;
      } else if (midBottom > scrollTop) {
        tempIndex = tempIndex === null || tempIndex > midIndex ? midIndex : tempIndex;
        end = midIndex - 1;
      }
    }

    return tempIndex;
  };

  const updateStartOffset = () => {
    const realStart = visibleInfo.startIndex - 1;
    setStartOffset(realStart >= 0 ? itemPositions[realStart].top : 0);
  };

  return (
    <div ref={containerRef} className="container" onScroll={handleScroll}>
      <div className="phantom" style={{ height: phantomHeight + "px" }}></div>
      <div className="content" style={{ transform: `translate3d(0, ${startOffset}px, 0)` }}>
        {visibleData.map(item => (
          <div key={item.index} className="content-item">
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualList;
