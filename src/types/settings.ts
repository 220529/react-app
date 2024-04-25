import { AllComponentProps } from "@/types/component";

export interface GroupProps {
  text: string;
  fields: string[];
}
export const defaultEditGroups: GroupProps[] = [
  {
    text: "尺寸",
    fields: ["height", "width", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom"],
  },
  {
    text: "边框",
    fields: ["borderStyle", "borderColor", "borderWidth", "borderRadius"],
  },
  {
    text: "阴影与透明度",
    fields: ["opacity", "boxShadow"],
  },
  {
    text: "位置",
    fields: ["left", "top"],
  },
  {
    text: "事件功能",
    fields: ["actionType", "url"],
  },
];

export const defaultEditGroupsKeys: string[] = defaultEditGroups.reduce((prev, current) => {
  return [...prev, ...current.fields];
}, [] as string[]);

export interface FormItemProps {
  text?: string; // 表单描述，如：文本
  value: string; // 表单的值
  valueName: string; // 表单的key
  component: string; // 表单元素，如：a-input
  subComponent?: string; // 子组件，如：a-radio-button
  options?: {
    value: string;
    label: string;
  }[];
  eventName: string;
  events: {
    [key: string]: (e: any) => void;
  };
}

export interface SettingFormProps {
  text?: string;
  valueName?: string;
  component: string;
  subComponent?: string; // 子组件
  options?: {
    value: string;
    label: string;
  }[];
  initializeOnLoad?: (v: any) => any;
  convertOnChange?: (v: any) => any;
  eventName?: string;
}

export type SettingFormsProps = {
  [P in keyof AllComponentProps]?: SettingFormProps;
};

// 像素值转换数字
const pxNumberConverter = {
  component: "InputNumber",
  initializeOnLoad: (e: string) => parseFloat(e),
  convertOnChange: (e: number) => (e ? `${e}px` : ""),
};

// 所有属性，对应的编辑组件
export const settings: SettingFormsProps = {
  text: {
    text: "文本",
    component: "Input",
    convertOnChange: (e: any) => e.target.value,
  },
  fontSize: {
    text: "字号",
    ...pxNumberConverter,
  },
  textAlign: {
    text: "对齐",
    component: "Radio.Group",
    options: [
      { label: "左", value: "left" },
      { label: "中", value: "center" },
      { label: "右", value: "right" },
    ],
    convertOnChange: (e: any) => e.target.value,
  },
  fontFamily: {
    text: "字体",
    component: "Select",
    options: [
      { label: "宋体", value: "SimSun, 宋体, STSong" },
      { label: "黑体", value: "SimHei, 黑体, STHeiti" },
      { label: "楷体", value: "KaiTi, 楷体, STKaiti" },
      { label: "仿宋", value: "FangSong, 仿宋" },
    ],
  },
  fontWeight: {
    text: "加粗",
    component: "Switch",
    initializeOnLoad: (v: string) => v === "bold",
    convertOnChange: (e: boolean) => (e ? "bold" : "normal"),
    valueName: "checked",
  },
  textDecoration: {
    text: "划线",
    component: "Switch",
    initializeOnLoad: (v: string) => v === "underline",
    convertOnChange: (e: boolean) => (e ? "underline" : "none"),
    valueName: "checked",
  },
  color: {
    text: "字体颜色",
    component: "input-color",
    convertOnChange: (e: any) => e.target.value,
  },
  backgroundColor: {
    text: "背景颜色",
    component: "input-color",
    convertOnChange: (e: any) => e.target.value,
  },
  width: {
    text: "宽度",
    ...pxNumberConverter,
  },
  height: {
    text: "高度",
    ...pxNumberConverter,
  },
  paddingLeft: {
    text: "左边距",
    ...pxNumberConverter,
  },
  paddingRight: {
    text: "右边距",
    ...pxNumberConverter,
  },
  paddingTop: {
    text: "上边距",
    ...pxNumberConverter,
  },
  paddingBottom: {
    text: "下边距",
    ...pxNumberConverter,
  },
  left: {
    text: "X轴坐标",
    ...pxNumberConverter,
  },
  top: {
    text: "Y轴坐标",
    ...pxNumberConverter,
  },
};
