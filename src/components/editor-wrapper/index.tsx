import React, { MouseEvent, useRef, useMemo, useState } from "react";
import cx from "classnames";
import { pick } from "lodash-es";
import { useEditorStore } from "@/hooks/store";
import { selectComponent, updateComponent } from "@/store/editorSlice";
import { ComponentProps } from "@/types/component";
import style from "./style.module.less";

interface ComponentWrapperProps {
  property: ComponentProps;
  children?: React.ReactNode;
}

const App: React.FC<ComponentWrapperProps> = ({ property, children }) => {
  const { id } = property;
  const ref = useRef<HTMLDivElement>(null);
  const { dispatch, editor } = useEditorStore();
  const active = useMemo(() => editor.currentId === id, [editor.currentId, id]);
  const select = () => {
    dispatch(selectComponent(property.id));
  };

  const styles = useMemo(
    () =>
      pick(property.props, ["position", "top", "left", "width", "height"]) as React.CSSProperties,
    [property.props]
  );

  // 鼠标按下时的坐标
  const mouseRef = useRef<{ x: number; y: number; moving: boolean }>({ x: 0, y: 0, moving: false });
  // 计算拖拽的偏移量
  const caculatePosition = (e: MouseEvent) => {
    const parent = document.getElementById("editor-main") as HTMLElement;
    // const parent = ref.current.parentNode;
    // offsetParent：返回一个指向最近的定位元素或者body，注意：是否有定位的父级元素!!!
    // offsetLeft：返回当前元素左上角相对于 offsetParent 节点的左边界偏移的像素值
    // 当前元素的各个父级没有定位，那么就是相对于body了
    return {
      left: e.clientX - parent.offsetLeft - mouseRef.current.x,
      top: e.clientY - parent.offsetTop - mouseRef.current.y,
    };
  };
  const onMouseMove = (e: any) => {
    mouseRef.current.moving = true;
    // 在鼠标移动时处理逻辑
    const { left, top } = caculatePosition(e);
    if (ref.current) {
      ref.current.style.top = top + "px";
      ref.current.style.left = left + "px";
    }
  };

  const onMouseUp = (e: any) => {
    if (mouseRef.current.moving) {
      const { left, top } = caculatePosition(e);
      dispatch(
        updateComponent({
          property: {
            top: top + "px",
            left: left + "px",
          },
        })
      );
    }
    mouseRef.current.moving = false;
    // 在鼠标抬起时处理逻辑
    document.removeEventListener("mousemove", onMouseMove);
    setTimeout(() => {
      document.removeEventListener("mouseup", onMouseUp);
    }, 10);
  };

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect(); // 元素相对于可视视口
    if (rect) {
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div
      className={cx(style.wrapper, { [style.active]: active })}
      style={styles}
      onClick={select}
      onMouseDown={onMouseDown}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default React.memo(App);
