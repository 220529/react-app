// 共同的样式属性接口
interface BasicNodeProps {
  // 尺寸
  height?: string;
  width?: string;
  // 内边距
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  // 边框
  borderStyle?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  // 阴影和不透明度
  boxShadow?: string;
  opacity?: string;
  // 定位
  position?: string;
  left?: string;
  top?: string;
  right?: string;
}

// 元素节点属性接口
export interface ElementNodeProps extends BasicNodeProps {
  // 动作
  actionType?: string;
  url?: string;
}

// 共同样式属性的默认值
const defaultBasicNodeProps: BasicNodeProps = {
  width: "373px",
  height: "",
  paddingLeft: "0px",
  paddingRight: "0px",
  paddingTop: "0px",
  paddingBottom: "0px",
  borderStyle: "none",
  borderColor: "#000",
  borderWidth: "0",
  borderRadius: "0",
  boxShadow: "0 0 0 #000000",
  opacity: "1",
  position: "absolute",
  left: "0",
  top: "0",
  right: "0",
};

// 文本节点属性接口，扩展自元素节点属性
export interface TextNodeProps extends ElementNodeProps {
  text?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontStyle?: string;
  textDecoration?: string;
  lineHeight?: string;
  textAlign?: string;
  color?: string;
  backgroundColor?: string;
}

// 文本节点属性的默认值
export const defaultTextNodeProps: TextNodeProps = {
  ...defaultBasicNodeProps,
  text: "正文内容",
  fontSize: "14px",
  fontWeight: "normal",
  fontStyle: "normal",
  textDecoration: "none",
  lineHeight: "1",
  textAlign: "left",
  color: "#000000",
  backgroundColor: "",
};

// 图片节点属性接口，扩展自元素节点属性
export interface ImgNodeProps extends ElementNodeProps {
  src: string;
}

// 图片节点属性的默认值
export const defaultImgNodeProps: ImgNodeProps = {
  ...defaultBasicNodeProps,
  src: "",
};

// 所有元素节点属性类型，组合了文本和图片节点属性
export type AllElementNodeProps = TextNodeProps & ImgNodeProps & { [key: string]: any };

// 组件节点属性接口
export interface ComponentNodeProps {
  id: string;
  name: "l-text" | "l-image";
  props: AllElementNodeProps;
  layerName: string;
}

// 将属性映射到组件属性
export const mapToComponentProps = <T extends object>(props: T) => {
  return Object.entries(props).reduce(
    (acc, [key, value]) => {
      acc[key] = { type: value?.constructor, default: value };
      return acc;
    },
    {} as Record<string, any>
  );
};

// 文本节点的样式字段
export const textNodeStyleFields = Object.keys(defaultTextNodeProps).filter(
  field => !["actionType", "url", "text"].includes(field)
);

// 图片节点的样式字段
export const imgNodeStyleFields = Object.keys(defaultImgNodeProps).filter(field => field !== "src");

export interface PageSettingProps {
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  backgroundSize?: string;
}

export interface SettingProps {
  title: string;
  desc: string;
  props: PageSettingProps;
}
