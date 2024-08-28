import React from "react";
import styles from "./index.module.less"; // 引入 LESS 模块

const CssModules: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>学历</div>
      <div className={styles.right}>最近投递</div>
    </div>
  );
};

export default CssModules;
