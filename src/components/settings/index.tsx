import React from "react";
import Component from "@/components/component";
import { FormItemProps } from "@/types/settings";
import style from "./style.module.less";

export default React.memo(({ fields }: { fields: { [key: string]: FormItemProps } }) => {
  return (
    <div className={style.settings}>
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
