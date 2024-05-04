import React from "react";
import { Tabs, Button } from "antd";
import type { TabsProps } from "antd";
import LText from "@/components/l-text";
import { TextNodeProps } from "@/types/component";
import { defaultTextComponent, defaultImageComponent } from "@/constants/components";
import { useWorkStore } from "@/hooks/store";
import { createComponent } from "@/store/workSlice";
import { useUpload } from "@/components/upload/hooks";
import { OssResponse } from "@/api/oss";
import { loadImageDimensions } from "@/utils";
import style from "./style.module.less";

/**
 * 左侧边栏，功能：添加组件
 */
export default React.memo(() => {
  const { dispatch } = useWorkStore();
  const addComponent = (template: TextNodeProps) => {
    dispatch(
      createComponent({
        name: "l-text",
        props: template,
      })
    );
  };

  const uploadSuccess = async (res: OssResponse) => {
    const info = await loadImageDimensions(res.url);
    if (info) {
      dispatch(
        createComponent({
          name: "l-image",
          props: {
            ...defaultImageComponent,
            src: res.url,
            width: info.width + "px",
            height: info.height + "px",
          },
        })
      );
    }
  };
  const { Uploader, upload, loading } = useUpload({ uploadSuccess });

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "文本",
      children: defaultTextComponent.map(template => {
        return (
          <div className={style.warpper} onClick={() => addComponent(template)} key={template.text}>
            <LText property={{ props: template }} />
          </div>
        );
      }),
    },
    {
      key: "2",
      label: "图片",
      children: (
        <Button onClick={upload} type="primary" loading={loading}>
          上传图片
        </Button>
      ),
    },
  ];

  return (
    <div className={style.sidebar}>
      <Tabs defaultActiveKey="1" items={items} />
      <Uploader />
    </div>
  );
});
