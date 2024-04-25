import React from "react";
import { useAppDispatch } from "@/hooks/store";
import { selectComponent } from "@/store/editorSlice";
import style from "./style.module.less";

export default React.memo((props: any) => {
  const dispatch = useAppDispatch();
  const select = () => {
    dispatch(selectComponent(props.property.id));
  };
  return (
    <div className={style.wrapper} onClick={select}>
      {props.children}
    </div>
  );
});
