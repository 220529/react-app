import React from "react";
import { useNodeAttributes } from "@/hooks/component";
import { imgNodeStyleFields } from "@/types/component";

interface Props {
  tag?: string; // 标签名称
  property: any;
}

export default React.memo((props: Props) => {
  const { property } = props;
  const { style, handler } = useNodeAttributes(property.props, imgNodeStyleFields);
  return <img src={property?.props.src} style={style} onClick={handler} alt="" draggable="false" />;
});
