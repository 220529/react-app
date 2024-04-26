import React, { useEffect } from "react";
import { ComponentProps } from "@/types/component";
import Component from "@/components/component";
import EditorWrapper from "@/components/editor-wrapper";
import style from "./style.module.less";

export default React.memo((props: any) => {
  const { page } = props;
  return (
    <div className={style.main} id="editor-main">
      {page.components?.map((item: ComponentProps) => {
        return (
          <EditorWrapper key={item.id} property={item}>
            <Component tag={item.name} property={item} />
          </EditorWrapper>
        );
      })}
    </div>
  );
});
