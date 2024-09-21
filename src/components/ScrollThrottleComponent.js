import React, { useState, useEffect, useRef } from "react";

// 实现节流函数
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func(...args);
  };
}

const ScrollAreaThrottleComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      console.log("throttle...");
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollTop);
      }
    }, 300); // 每300ms处理一次滚动事件

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    // 清除事件监听器
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div>
      <h1>特定区域滚动节流测试</h1>
      <p>当前滚动位置: {scrollPosition}px</p>
      <div
        ref={scrollRef}
        style={{
          width: "300px",
          height: "300px",
          overflowY: "scroll",
          border: "1px solid #ccc",
        }}
      >
        <div style={{ height: "50000px", padding: "10px" }}>
          {/* 内容高度增加到5000px */}
          <p>滚动这个区域，观察滚动位置的更新频率。</p>
          <p>这里有足够的内容来进行滚动测试。快速滚动可以观察节流的效果。</p>
          <p>内容很多，这里只是占位的文本。</p>
          <p>内容很多，这里只是占位的文本。</p>
          <p>内容很多，这里只是占位的文本。</p>
          <p>内容很多，这里只是占位的文本。</p>
          <p>内容很多，这里只是占位的文本。</p>
          <p>内容很多，这里只是占位的文本。</p>
          <p>内容很多，这里只是占位的文本。</p>
          <p>更多内容……</p>
          <p>更多内容……</p>
          <p>更多内容……</p>
          <p>更多内容……</p>
          <p>更多内容……</p>
          <p>更多内容……</p>
          <p>更多内容……</p>
          <p>更多内容……</p>
          <p>更多内容……</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollAreaThrottleComponent;
