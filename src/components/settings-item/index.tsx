import React, { useMemo } from "react";
import { reduce } from "lodash-es";
import { updateComponent } from "@/store/editorSlice";
import { useEditorStore } from "@/hooks/store";
import Component from "@/components/component";
import { AllComponentProps } from "@/types/component";
import { settings, FormItemProps } from "@/types/settings";
import style from "./style.module.less";

export default React.memo((props: any) => {
  const { property } = props;
  const { editor, dispatch } = useEditorStore();
  const fields = useMemo(() => {
    return reduce(
      property,
      (result, value, key) => {
        const newKey = key as keyof AllComponentProps;
        const setting = settings[newKey];
        if (setting) {
          const {
            valueName = "value",
            eventName = "onChange",
            initializeOnLoad,
            convertOnChange,
          } = setting;
          const item: FormItemProps = {
            ...setting,
            value: initializeOnLoad ? initializeOnLoad(value) : value,
            eventName,
            valueName,
            events: {
              [eventName]: e => {
                dispatch(
                  updateComponent({
                    property: {
                      [key]: convertOnChange ? convertOnChange(e) : e,
                    },
                  })
                );
              },
            },
          };
          result[newKey] = item;
        }
        return result;
      },
      {} as { [key: string]: FormItemProps }
    );
  }, [property]);

  return (
    <div className={style.field}>
      {Object.entries(fields)?.map(([key, value]) => {
        return (
          <div className={style.item} key={key}>
            <span className={style.lable}>{value.text}</span>
            <div className={style.content}>
              <Component tag={value.component} property={value} />
            </div>
          </div>
        );
      })}
    </div>
  );
});
