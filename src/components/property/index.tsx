import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { useWorkStore } from "@/hooks/store";
import { updateSetting } from "@/store/workSlice";
import { useNodeProperty } from "@/hooks/component";

import Basic from "@/components/settings-basic";
import Settings from "@/components/settings";
import style from "./style.module.less";

export default React.memo(() => {
  const { work } = useWorkStore();
  const { fields: propsFields } = useNodeProperty({
    property: work.setting.props,
    updateProperty: e => updateSetting({ props: e }),
  });
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
    {
      key: "3",
      label: "页面设置",
      children: <Settings fields={propsFields} />,
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
