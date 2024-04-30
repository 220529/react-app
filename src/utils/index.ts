import { v4 as uuidv4 } from "uuid";
import { ComponentProps } from "@/types/component";

export const uuid = () => {
  return uuidv4();
};

/**
 * 将像素单位的距离转换为视窗宽度单位
 * @param components 组件对象数组
 */
export const pxTovw = (components: ComponentProps[]): void => {
  const reg = /^(\d+(\.\d+)?)px$/; // 匹配像素单位的正则表达式

  // 遍历组件对象数组
  components?.forEach((component: ComponentProps) => {
    const { props } = component;
    if (props) {
      // 遍历组件的属性
      Object.keys(props).forEach(key => {
        const val = props[key];

        // 检查属性值是否为字符串
        if (typeof val !== "string") {
          return;
        }

        // 检查属性值是否以像素单位结尾
        if (!reg.test(val)) {
          return;
        }

        // 提取像素值并转换为浮点数
        const numStr = val.match(reg)?.[1] || "0";
        const num = parseFloat(numStr);

        // 计算视窗宽度单位的值
        const vwNum = (num / 375) * 100; // 假设画布宽度为 375px
        props[key] = `${vwNum.toFixed(2)}vw`; // 重新赋值为视窗宽度单位
      });
    }
  });
};
