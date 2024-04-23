import React, { useRef, useEffect } from "react";
import "./Marquee.css"; // 样式文件

const Marquee = ({ children }) => {
  const containerRef = useRef(null);
  const cloneRef = useRef(null);

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const cloneWidth = cloneRef.current.offsetWidth;

    // 计算滚动速度，每毫秒移动1像素
    const speed = 0.05;

    let start = null;
    let requestId;

    const step = timestamp => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      // 计算滚动距离
      const distance = elapsed * speed;

      containerRef.current.style.transform = `translateX(-${distance}px)`;
      cloneRef.current.style.transform = `translateX(-${distance}px)`;

      // 当第一个元素完全滚出视野时，重置位置
      if (distance >= containerWidth) {
        start = timestamp;
      }

      // 循环动画
      requestId = requestAnimationFrame(step);
    };

    // 启动动画
    requestId = requestAnimationFrame(step);

    // 清除动画
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div className="marquee-container" ref={containerRef}>
      {children}
      <div className="marquee-clone" ref={cloneRef}>
        {children}
      </div>
    </div>
  );
};

export default Marquee;
