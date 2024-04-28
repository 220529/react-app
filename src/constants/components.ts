import { defaultTextComponentProps } from "@/types/component";

const textComponents = [
  {
    text: "大标题",
    fontSize: "20px",
    fontWeight: "bold",
    tag: "h2",
    width: "100px",
  },
  {
    text: "正文内容",
    tag: "p",
    width: "100px",
  },
  {
    text: "链接内容",
    color: "#1890ff",
    textDecoration: "underline",
    tag: "p",
    width: "100px",
  },
  {
    text: "按钮内容",
    color: "#ffffff",
    backgroundColor: "#1890ff",
    borderWidth: "1px",
    borderColor: "#1890ff",
    borderStyle: "solid",
    borderRadius: "2px",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "5px",
    paddingBottom: "5px",
    width: "100px",
    tag: "button",
    textAlign: "center",
    // position: "absolute",
  },
];

export const defaultTextComponents = textComponents.map(template => ({
  ...defaultTextComponentProps,
  ...template,
}));
