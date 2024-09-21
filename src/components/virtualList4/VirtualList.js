import React, { useState, useEffect, useRef } from "react";

const VirtualList = ({ listData = [], estimatedItemSize, bufferScale = 1, height = "100%" }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const listRef = useRef(null);
  const phantomRef = useRef(null);
  const contentRef = useRef(null);
  const itemsRef = useRef([]);

  const initPositions = () => {
    return listData.map((_, index) => ({
      index,
      height: estimatedItemSize,
      top: index * estimatedItemSize,
      bottom: (index + 1) * estimatedItemSize,
    }));
  };

  const [positions, setPositions] = useState(initPositions);

  const visibleCount = Math.ceil(screenHeight / estimatedItemSize);

  const aboveCount = Math.min(start, bufferScale * visibleCount);
  const belowCount = Math.min(listData.length - end, bufferScale * visibleCount);

  const visibleData = listData.slice(start - aboveCount, end + belowCount);

  useEffect(() => {
    setScreenHeight(listRef.current.clientHeight);
    setEnd(visibleCount);
  }, [visibleCount]);

  useEffect(() => {
    if (itemsRef.current.length) {
      updateItemsSize();
      const height = positions[positions.length - 1].bottom;
      phantomRef.current.style.height = `${height}px`;
      setStartOffset();
    }
  }, [visibleData, positions]);

  const binarySearch = (list, value) => {
    let start = 0;
    let end = list.length - 1;
    let tempIndex = null;

    while (start <= end) {
      let midIndex = Math.floor((start + end) / 2);
      let midValue = list[midIndex].bottom;
      if (midValue === value) {
        return midIndex + 1;
      } else if (midValue < value) {
        start = midIndex + 1;
      } else {
        if (tempIndex === null || tempIndex > midIndex) {
          tempIndex = midIndex;
        }
        end = end - 1;
      }
    }
    return tempIndex;
  };

  const getStartIndex = (scrollTop = 0) => {
    return binarySearch(positions, scrollTop);
  };

  const updateItemsSize = () => {
    itemsRef.current.forEach((node, index) => {
      const rect = node.getBoundingClientRect();
      const height = rect.height;
      const oldHeight = positions[index].height;
      const dValue = oldHeight - height;

      if (dValue) {
        const newPositions = [...positions];
        newPositions[index].bottom = newPositions[index].bottom - dValue;
        newPositions[index].height = height;
        for (let k = index + 1; k < newPositions.length; k++) {
          newPositions[k].top = newPositions[k - 1].bottom;
          newPositions[k].bottom = newPositions[k].bottom - dValue;
        }
        setPositions(newPositions);
      }
    });
  };

  const setStartOffset = () => {
    let startOffset;
    if (start >= 1) {
      const size =
        positions[start].top -
        (positions[start - aboveCount] ? positions[start - aboveCount].top : 0);
      startOffset = positions[start - 1].bottom - size;
    } else {
      startOffset = 0;
    }
    contentRef.current.style.transform = `translate3d(0, ${startOffset}px, 0)`;
  };

  const handleScroll = () => {
    const scrollTop = listRef.current.scrollTop;
    const newStart = getStartIndex(scrollTop);
    setStart(newStart);
    setEnd(newStart + visibleCount);
    setStartOffset();
  };

  return (
    <div
      ref={listRef}
      style={{ height }}
      className="infinite-list-container"
      onScroll={handleScroll}
    >
      <div ref={phantomRef} className="infinite-list-phantom"></div>
      <div ref={contentRef} className="infinite-list">
        {visibleData.map((item, index) => (
          <div
            className="infinite-list-item"
            key={item._index}
            ref={el => (itemsRef.current[index] = el)}
          >
            {item.item.id} - {item.item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualList;
