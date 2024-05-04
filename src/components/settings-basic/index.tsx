import React, { useMemo } from "react";
import { difference } from "lodash-es";
import { Collapse } from "antd";
import { AllElementNodeProps } from "@/types/component";
import { useWorkStore } from "@/hooks/store";
import { defaultEditGroupsKeys, defaultEditGroups } from "@/types/settings";
import Item from "@/components/settings-item";
import style from "./style.module.less";

export default React.memo(() => {
  const { property } = useWorkStore();
  const groups = useMemo(() => {
    if (property?.props) {
      const keys = [
        {
          text: "基本属性",
          fields: difference(
            Object.keys(property.props as AllElementNodeProps),
            defaultEditGroupsKeys
          ),
        },
        ...defaultEditGroups,
      ];
      return keys.map(key => {
        const propsMap = {} as AllElementNodeProps;
        key.fields.forEach(field => {
          const key = field as keyof AllElementNodeProps;
          propsMap[key] = property.props?.[key] as string;
        });
        return {
          text: key.text,
          props: propsMap,
        };
      });
    }
    return null;
  }, [property]);
  if (!property) {
    return <div>请选择节点</div>;
  }

  return (
    <div className={style.basic}>
      {groups?.map(group => {
        return (
          <Collapse
            key={group.text}
            size="small"
            items={[
              {
                key: "1",
                label: group.text,
                children: <Item key={group.text} property={group.props} />,
              },
            ]}
          />
        );
      })}
    </div>
  );
});
