import { useMemo } from "react";
import { pick } from "lodash-es";
import { AllComponentProps } from "@/types/component";

// 提取组件的样式，点击事件
export const useComponentCommon = <T extends AllComponentProps>(
  props: Readonly<Partial<T>>,
  fieldsNames: string[]
) => {
  const style = useMemo(() => pick(props, fieldsNames), [props, fieldsNames]);
  const handler = () => {
    if (props.url) {
      window.location.href = props.url;
    }
  };
  return { style, handler };
};
