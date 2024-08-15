import React from "react";
import styles from "./index.module.less"; // 引入 LESS 模块

const CssModules: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.header}>hello, css module!</span>
    </div>
  );
};

export default CssModules;
