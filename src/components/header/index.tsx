import React, { useEffect } from "react";
import { Button, message } from "antd";
import { BackwardOutlined, ForwardOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore, useWorkStore } from "@/hooks/store";
import { useUserInfo } from "@/hooks/login";
import * as api from "@/api/work";
import style from "./style.module.less";

export default React.memo(() => {
  const { userInfo } = useUserStore();
  const { work } = useWorkStore();
  const navigate = useNavigate();
  const params = useParams();
  const create = async () => {
    const res = await api.create({
      title: "test",
      desc: "desc...",
      content: {
        components: [],
        props: {
          backgroundColor: "#ffffff",
          backgroundImage: "",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        },
      },
    });
    if (res.state === 1) {
      message.success("创建成功");
      navigate(`/editor/${res.data._id}`);
    }
  };
  const save = async () => {
    const res = await api.update(params.id as string, {
      title: work.setting.title,
      desc: work.setting.desc,
      content: {
        props: work.setting.props,
        components: work.components,
      },
    });
    if (res) {
      message.success("保存成功");
    }
  };
  const prev = () => {
    console.log("prev");
  };
  const next = () => {
    console.log("next");
  };
  const { fetchUserInfo } = useUserInfo();
  useEffect(() => {
    fetchUserInfo();
  }, []);
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
