import React from "react";
import Component from "@/components/component";
import { useComponentCommon } from "@/hooks/component";
import { textStyleNames } from "@/types/component";

interface Props {
  tag?: string; // 标签名称
  property: any;
}

export default React.memo((props: Props) => {
  const { tag, property } = props;
  const { style, handler } = useComponentCommon(property.props, textStyleNames);
  return (
    <Component tag={tag || "div"} property={{ style, handler }}>
      {property.props.text}
    </Component>
  );
});
