import { mapValues, without } from "lodash-es";

export interface CommonComponentProps {
  // actions
  actionType: string;
  url: string;
  // size
  height: string;
  width: string;
  // 内边距
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  // border type
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  // shadow and opacity
  boxShadow: string;
  opacity: string;
  // position and x,y
  position: string;
  left: string;
  top: string;
  right: string;
}

export const defaultCommonComponentProps: CommonComponentProps = {
  // actions
  actionType: "",
  url: "",
  // size
  height: "",
  width: "373px",
  paddingLeft: "0px",
  paddingRight: "0px",
  paddingTop: "0px",
  paddingBottom: "0px",
  // border type
  borderStyle: "none",
  borderColor: "#000",
  borderWidth: "0",
  borderRadius: "0",
  // shadow and opacity
  boxShadow: "0 0 0 #000000",
  opacity: "1",
  // position and x,y
  // position: "relative",
  position: "absolute",
  left: "0",
  top: "0",
  right: "0",
};

export interface TextComponentProps extends CommonComponentProps {
  text: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  lineHeight: string;
  textAlign: string;
  color: string;
  backgroundColor: string;
}

export const defaultTextComponentProps: TextComponentProps = {
  // basic props - font styles
  text: "正文内容",
  fontSize: "14px",
  fontFamily: "",
  fontWeight: "normal",
  fontStyle: "normal",
  textDecoration: "none",
  lineHeight: "1",
  textAlign: "left",
  color: "#000000",
  backgroundColor: "",
  ...defaultCommonComponentProps,
};

export interface ImageComponentProps extends CommonComponentProps {
  src: string;
}

export type AllComponentProps = TextComponentProps & ImageComponentProps;

export interface ComponentProps {
  id: string; // uuid v4 生成
  //   name: string;
  name: "l-text" | "l-image";
  props: Partial<AllComponentProps>; // 元素属性
  layerName: string;
}

export const mapToComponentProps = <T extends object>(props: T) => {
  return mapValues(props, item => {
    return {
      type: (item as any).constructor,
      default: item,
    };
  });
};

export const textStyleNames = without(
  Object.keys(defaultTextComponentProps),
  "actionType",
  "url",
  "text"
);

export interface UpdateComponentProps {
  key: keyof AllComponentProps;
  value: string;
}
