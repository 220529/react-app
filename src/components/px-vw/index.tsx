import React from "react";
import styles from "./index.module.less"; // 引入 LESS 模块

function pxToVw(px: number, designWidth = 750) {
  return (px / designWidth) * 100 + "vw";
}

const CssModules: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <span className={styles.text}>消息通知</span>
        <img
          className={styles.right}
          src="https://lagou-zhaopin-fe.lagou.com/activities/20240815/1723708196198.png"
        />
      </div>
      <div style={{ fontSize: pxToVw(parseInt("32PX")) }}>我是style</div>
      <div className={styles.exit}>退出当前账号</div>
    </div>
  );
};

export default CssModules;
