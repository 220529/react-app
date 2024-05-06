import React, { useMemo } from "react";
import cx from "classnames";
import { ComponentNodeProps } from "@/types/component";
import Component from "@/components/component";
import EditorWrapper from "@/components/editor-wrapper";
import style from "./style.module.less";

export default React.memo((e: any) => {
  const { content, isEditor } = e;
  const { setting, components } = content;
  const { props } = setting || {};
  const classNames = cx({
    [style.basic]: true,
    [style.work]: !isEditor,
    [style.editor]: isEditor,
  });
  const mainStyle = useMemo(() => {
    const { backgroundImage, backgroundRepeat, backgroundSize, backgroundColor } = props || {};
    // 设定背景图片比底色优先级高
    return backgroundImage
      ? { backgroundImage: `url(${backgroundImage})`, backgroundRepeat, backgroundSize }
      : { backgroundColor };
  }, [props]);
  return (
    <div className={classNames} id="editor-main" style={mainStyle}>
      {components?.map((item: ComponentNodeProps) => {
        return isEditor ? (
          <EditorWrapper key={item.id} property={item}>
            <Component tag={item.name} property={item} />
          </EditorWrapper>
        ) : (
          <Component tag={item.name} property={item} key={item.id} />
        );
      })}
    </div>
  );
});
