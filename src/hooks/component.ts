import { useMemo } from "react";
import { pick } from "lodash-es";
import { useWorkStore } from "@/hooks/store";
import { TextNodeProps, ImgNodeProps } from "@/types/component";
import { AllElementNodeProps, PageSettingProps } from "@/types/component";
import { settings, FormItemProps } from "@/types/settings";

type NodeProps = TextNodeProps | ImgNodeProps;
// 提取组件的样式，点击事件
export const useNodeAttributes = <T extends NodeProps>(props: T, fieldsNames: (keyof T)[]) => {
  const style = useMemo(() => pick(props, fieldsNames), [props, fieldsNames]);
  const handler = () => {
    if (props.url) {
      window.location.href = props.url;
    }
  };
  return { style, handler };
};

interface PropertyProps {
  property: AllElementNodeProps | PageSettingProps; // 属性对象的类型声明
  updateProperty: (e: Partial<AllElementNodeProps | PageSettingProps>) => any; // 更新属性的函数类型声明
}

export const useNodeProperty = ({ property, updateProperty }: PropertyProps) => {
  const { dispatch } = useWorkStore(); // 使用自定义 hook 获取 store 中的 dispatch 方法

  const fields = useMemo(() => {
    const fieldItems: { [key: string]: FormItemProps } = {}; // 创建一个空对象来存储表单字段的配置项

    // 遍历属性对象，生成表单字段的配置项
    for (const [key, value] of Object.entries(property)) {
      const setting = settings[key as keyof AllElementNodeProps]; // 获取当前属性对应的设置项
      if (setting) {
        const {
          valueName = "value",
          eventName = "onChange",
          initializeOnLoad,
          convertOnChange,
        } = setting;

        const item: FormItemProps = {
          ...setting,
          value: initializeOnLoad ? initializeOnLoad(value) : value, // 根据设置项中的初始化函数初始化属性值
          eventName,
          valueName,
          events: {
            [eventName]: (e: any) => {
              dispatch(
                updateProperty({
                  [key]: convertOnChange ? convertOnChange(e) : e, // 根据设置项中的转换函数转换事件对象的值
                })
              );
            },
          },
        };

        fieldItems[key] = item; // 将生成的表单字段配置项存入字段对象中
      }
    }

    return fieldItems; // 返回生成的表单字段配置项对象
  }, [property]); // 当属性对象发生变化时重新计算

  return { fields }; // 返回表单字段配置项对象
};
