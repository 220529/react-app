import React from "react";
import LText from "@/components/l-text";
import { TextComponentProps } from "@/types/component";
import { defaultTextComponents as templates } from "@/constants/components";
import { useEditorStore } from "@/hooks/store";
import { createComponent } from "@/store/editorSlice";
import style from "./style.module.less";

/**
 * 左侧边栏，功能：添加组件
 */
export default React.memo(() => {
  const { dispatch } = useEditorStore();
  const addComponent = (template: TextComponentProps) => {
    dispatch(
      createComponent({
        name: "l-text",
        props: template,
      })
    );
  };
  return (
    <div className={style.sidebar}>
      {templates.map(template => {
        return (
          <div className={style.warpper} onClick={() => addComponent(template)} key={template.text}>
            <LText property={{ props: template }} />
          </div>
        );
      })}
    </div>
  );
});
