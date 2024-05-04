import React, { ReactNode } from "react";
import { Input, InputNumber, Switch, Radio, Select, ColorPicker } from "antd";
import LText from "@/components/l-text";
import LImage from "@/components/l-image";
import Upload from "@/components/upload";

interface Props {
  tag: string; // 标签名称
  property: any;
  children?: ReactNode; // 添加 children 属性
}

const Component: React.FC<Props> = ({ tag, property, children }) => {
  const antdProperty: Record<string, any> = {};
  if (property?.component) {
    antdProperty[property.valueName] = property.value;
    antdProperty[property.eventName] = property.events[property.eventName];
    if (property?.options) {
      antdProperty.options = property.options;
    }
  }
  switch (tag) {
    case "l-text":
      return <LText property={property} />;
    case "l-image":
      return <LImage property={property} />;
    case "l-upload":
      return <Upload property={antdProperty} />;
    case "Input":
      return <Input {...antdProperty} />;
    case "InputNumber":
      return <InputNumber {...antdProperty} />;
    case "Switch":
      return <Switch {...antdProperty} />;
    case "Radio.Group":
      return <Radio.Group {...antdProperty} optionType="button" />;
    case "Select":
      return <Select {...antdProperty} style={{ width: 120 }} />;
    case "ColorPicker":
      return <ColorPicker {...antdProperty} />;
    default:
      return React.createElement(
        tag,
        {
          style: property.style,
          onClick: property.handler,
        },
        children
      );
  }
};

export default React.memo(Component);
