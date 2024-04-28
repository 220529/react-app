import React from "react";
import { useUserStore } from "@/hooks/store";
import style from "./style.module.less";

export default React.memo(() => {
  const { userInfo } = useUserStore();
  return <div className={style.header}>header {userInfo.username}</div>;
});
