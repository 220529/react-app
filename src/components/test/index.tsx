import React, { useEffect } from "react";
import style from "./style.module.less";

export default React.memo(() => {
  useEffect(() => {
    const a = 1;
  }, []);
  return (
    <div className={style.container}>
      <span className={style.title}>title</span>
    </div>
  );
});
