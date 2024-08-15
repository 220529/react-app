import React from "react";
import styles from "./index.module.less"; // 引入 LESS 模块

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
      <div className={styles.exit}>退出当前账号</div>
    </div>
  );
};

export default CssModules;
