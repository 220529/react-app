import React from "react";
import Component from "@/components/component";
import { useNodeAttributes } from "@/hooks/component";
import { textNodeStyleFields } from "@/types/component";

interface Props {
  tag?: string; // 标签名称
  property: any;
}

export default React.memo((props: Props) => {
  const { tag, property } = props;
  const { style, handler } = useNodeAttributes(property.props, textNodeStyleFields);
  return (
    <Component tag={tag || "div"} property={{ style, handler }}>
      {property.props.text}
    </Component>
  );
});
