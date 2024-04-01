import React from "react";
import style from "./style.module.less";

export default React.memo(() => {
  return <div className={style.container}>
    <span className={style.title}>title</span>
  </div>;
})
