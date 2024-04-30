import React from "react";
import { ComponentProps } from "@/types/component";
import Component from "@/components/component";
import EditorWrapper from "@/components/editor-wrapper";
import style from "./style.module.less";

export default React.memo((props: any) => {
  const { content } = props;
  return (
    <div className={style.main} id="editor-main">
      {content.components?.map((item: ComponentProps) => {
        return (
          <EditorWrapper key={item.id} property={item}>
            <Component tag={item.name} property={item} />
          </EditorWrapper>
        );
      })}
    </div>
  );
});
