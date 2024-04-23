import React, { useState, useEffect } from "react";
import MyComponent from "@/components/marquee/MyComponent";
import "./index.less";

export const barrageUrls = [
  "https://lagou-zhaopin-fe.lagou.com/fed/lg-app-fed/2023-draw/4/33.png",
  "https://lagou-zhaopin-fe.lagou.com/fed/lg-app-fed/2023-draw/4/33.png",
];

export default React.memo(props => {
  return (
    <div className="barrage" onClick={props.jump}>
      <div className="barrage-item">
        <div className="barrage-content barrage-top">
          <MyComponent />
          <MyComponent />
          <MyComponent />
          <MyComponent />
          <MyComponent />
          <MyComponent />
        </div>
      </div>
    </div>
  );
});
