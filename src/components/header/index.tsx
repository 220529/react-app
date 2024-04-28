import React from "react";
import { Button, message } from "antd";
import { BackwardOutlined, ForwardOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore, useEditorStore } from "@/hooks/store";
import * as work from "@/api/work";
import style from "./style.module.less";

export default React.memo(() => {
  const { userInfo } = useUserStore();
  const { editor } = useEditorStore();
  const navigate = useNavigate();
  const params = useParams();
  const create = async () => {
    const res: any = await work.create({
      title: "test",
      desc: "desc...",
    });
    if (res._id) {
      message.success("创建成功");
      navigate(`/editor/${res._id}`);
    }
  };
  const save = async () => {
    const res = await work.update(params.id as string, {
      title: editor.work.title,
      desc: editor.work.desc,
      content: {
        components: editor.components,
      },
    });
    if (res) {
      message.success("保存成功");
    }
    console.log("save.res", res);
  };
  const prev = () => {
    console.log("prev");
  };
  const next = () => {
    console.log("next");
  };
  return (
    <div className={style.header}>
      <div className={style.left}>header</div>
      <div className={style.right}>
        <div className={style.operation}>
          <Button type="link" onClick={prev}>
            <BackwardOutlined />
            <span>后退</span>
          </Button>
          <Button type="link" onClick={next}>
            <ForwardOutlined />
            <span>前进</span>
          </Button>
          <Button type="primary" onClick={save}>
            保存
          </Button>
          <Button type="primary" onClick={create}>
            创建作品
          </Button>
        </div>
        <div className={style.user}>{userInfo.username}</div>
      </div>
    </div>
  );
});
