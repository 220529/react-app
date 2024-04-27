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
  const moveRef = useRef<{ x: number; y: number; moving: boolean }>({ x: 0, y: 0, moving: false });
  // 计算拖拽的偏移量
  const caculateMove = (e: MouseEvent) => {
    const parent = ref.current?.parentNode as HTMLElement;
    if (parent) {
      // offsetParent：返回一个指向最近的定位元素或者body，注意：是否有定位的父级元素!!!
      // offsetLeft：返回当前元素左上角相对于 offsetParent 节点的左边界偏移的像素值
      // 当前元素的各个父级没有定位，那么就是相对于body了
      return {
        left: e.clientX - parent.offsetLeft - moveRef.current.x,
        top: e.clientY - parent.offsetTop - moveRef.current.y + window.scrollY,
      };
    }
  };
  const onMouseMove = (e: any) => {
    moveRef.current.moving = true;
    // 在鼠标移动时处理逻辑
    const caculate = caculateMove(e);
    if (ref.current && caculate) {
      ref.current.style.top = caculate.top + "px";
      ref.current.style.left = caculate.left + "px";
    }
  };

  const onMouseUp = (e: any) => {
    if (moveRef.current.moving) {
      const caculate = caculateMove(e);
      if (caculate) {
        dispatch(
          updateComponent({
            property: {
              top: caculate.top + "px",
              left: caculate.left + "px",
            },
          })
        );
      }
    }
    moveRef.current.moving = false;
    // 在鼠标抬起时处理逻辑
    document.removeEventListener("mousemove", onMouseMove);
    setTimeout(() => {
      document.removeEventListener("mouseup", onMouseUp);
    }, 10);
  };

  const onMouseDown = (e: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect(); // 元素相对于可视视口
    if (rect) {
      moveRef.current.x = e.clientX - rect.left;
      moveRef.current.y = e.clientY - rect.top;
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const resizeRef = useRef<{
    top: number;
    right: number;
    bottom: number;
    left: number;
    direction: string; // 方向
  }>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    direction: "",
  });
  const caculateResize = (e: any) => {
    const parent = ref.current?.parentNode as HTMLElement;
    if (parent) {
      const { clientX, clientY } = e;
      switch (resizeRef.current.direction) {
        case "top-left":
          console.log("top-left...");
          break;
        case "top-right":
          return {
            top: clientY - parent.offsetTop,
            width: clientX - resizeRef.current.left,
            height: resizeRef.current.bottom - clientY,
          };
        case "bottom-right":
          return {
            width: clientX - resizeRef.current.left,
            height: clientY - resizeRef.current.top,
          };
        case "bottom-left":
          console.log("bottom-left...");
          break;
        default:
          break;
      }
    }
  };
  const onResizeMove = (e: any) => {
    const caculate = caculateResize(e);
    console.log("caculate", caculate);
    if (ref.current && caculate) {
      ref.current.style.width = caculate.width + "px";
      ref.current.style.height = caculate.height + "px";
    }
  };

  const onResizeUp = (e: any) => {
    // 在鼠标抬起时处理逻辑
    document.removeEventListener("mousemove", onResizeMove);
    setTimeout(() => {
      document.removeEventListener("mouseup", onResizeUp);
    }, 10);
  };

  const onResize = (e: MouseEvent, direction: string) => {
    e.stopPropagation();
    const rect = ref.current?.getBoundingClientRect(); // 元素相对于可视视口
    if (rect) {
      resizeRef.current.top = rect.top;
      resizeRef.current.right = rect.right;
      resizeRef.current.bottom = rect.bottom;
      resizeRef.current.left = rect.left;
      resizeRef.current.direction = direction;
    }
    document.addEventListener("mousemove", onResizeMove);
    document.addEventListener("mouseup", onResizeUp);
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
      <div className={style.resize}>
        <div className={style.topLeft} onMouseDown={e => onResize(e, "top-left")} />
        <div className={style.topRight} onMouseDown={e => onResize(e, "top-right")} />
        <div className={style.bottomLeft} onMouseDown={e => onResize(e, "bottom-left")} />
        <div className={style.bottomRight} onMouseDown={e => onResize(e, "bottom-right")} />
      </div>
    </div>
  );
};

export default React.memo(App);
