import React, { useState } from "react";
import cx from "classnames";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useUpload } from "./hooks";
import style from "./style.module.less";

interface Props {
  multiple?: boolean;
  property: any;
}
const App = ({ multiple = false, property }: Props) => {
  const [files, setFiles] = useState<{ url: string; fileName?: string }[]>(
    property?.value ? [{ url: property?.value }] : []
  );
  const uploadSuccess = (file: any) => {
    if (!multiple) {
      setFiles([file]);
      property?.onChange(file?.url);
    } else {
      setFiles([...files, file]);
    }
  };
  const { Uploader, upload, loading } = useUpload({ uploadSuccess });
  const clear = () => {
    setFiles([]);
    property?.onChange("");
  };
  return (
    <>
      <div className={style.items}>
        {files?.map(file => {
          return (
            <div className={cx(style.item, style.image)} key={file.url}>
              <img src={file.url} />
              <div className={style.delete}>
                <Button danger type="link" className={style.btn} onClick={clear}>
                  删除
                </Button>
              </div>
            </div>
          );
        })}
        <div className={cx(style.item, style.upload)} onClick={upload}>
          <UploadOutlined style={{ fontSize: "25px", color: "#08c" }} />
          <span>上传图片</span>
        </div>
      </div>
      <Uploader />
    </>
  );
};

export default React.memo(App);
