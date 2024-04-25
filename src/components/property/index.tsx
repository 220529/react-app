import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Basic from "@/components/settings-basic";
import style from "./style.module.less";

export default React.memo(() => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "属性设置",
      children: <Basic />,
    },
    {
      key: "2",
      label: "图层设置",
      children: "Content of Tab Pane 2",
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className={style.property}>
      <p>property</p>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
});
