import { v4 as uuidv4 } from "uuid";
import { ComponentNodeProps } from "@/types/component";

export const uuid = () => {
  return uuidv4();
};

/**
 * 将像素单位的距离转换为视窗宽度单位
 * @param components 组件对象数组
 */
export const pxTovw = (components: ComponentNodeProps[]): void => {
  const reg = /^(\d+(\.\d+)?)px$/; // 匹配像素单位的正则表达式

  // 遍历组件对象数组
  components?.forEach((component: ComponentNodeProps) => {
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

/**
 * 获取图片的尺寸信息
 * @param url 图片的 URL 地址或者 File 对象
 * @returns 返回一个 Promise，包含图片的宽度和高度信息
 */
export const loadImageDimensions = (
  url: string | File
): Promise<{ width: number; height: number }> => {
  return new Promise<{ width: number; height: number }>((resolve, reject) => {
    // 创建一个新的图片对象
    const img = new Image();

    // 设置图片的 src 属性
    img.src = typeof url === "string" ? url : URL.createObjectURL(url);

    // 监听图片加载完成事件
    img.addEventListener("load", () => {
      // 获取图片的自然宽度和高度
      const { naturalWidth: width, naturalHeight: height } = img;
      // 解析 Promise 并返回图片的尺寸信息
      resolve({ width, height });
    });

    // 监听图片加载错误事件
    img.addEventListener("error", () => {
      // 图片加载出错时，拒绝 Promise 并抛出错误信息
      reject(new Error("There was some problem with the image."));
    });
  });
};
