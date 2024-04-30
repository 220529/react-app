import React, { useEffect, useState } from "react";
import { ColorPicker } from "antd";
import type { ColorPickerProps, GetProp } from "antd";

type Color = GetProp<ColorPickerProps, "value">;

const Demo: React.FC = () => {
  const [color, setColor] = useState<Color>("#1677ff");
  useEffect(() => {
    // console.log("color", color);
  }, [color]);
  const handler = (e: any) => {
    console.log("handler", e.toHexString());
  };
  return <ColorPicker value={color} onChange={handler} />;
};

export default Demo;
