import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Space } from "antd";
import { useUserStore } from "@/hooks/store";
import * as api from "@/api/user";
import { setToken } from "@/store/userSlice";
import style from "./style.module.less";

type FieldType = {
  username?: string;
  password?: string;
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const App: React.FC = () => {
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);

  const { dispatch } = useUserStore();
  const navigate = useNavigate();

  const onReset = () => {
    form.resetFields();
  };

  const [loading, setLoading] = useState<boolean>(false);
  const login = async () => {
    setLoading(true);
    const res = await api.login(values);
    if (res.state === 1) {
      dispatch(setToken(res.data.access_token));
      navigate("/");
    }
    setLoading(false);
  };

  const signup = async () => {
    setLoading(true);
    const res = await api.signup(values);
    if (res.state === 1) {
      dispatch(setToken(res.data.access_token));
      navigate("/");
    }
    setLoading(false);
  };

  return (
    <div className={style.login}>
      <Form {...layout} form={form} name="control-hooks" className={style.form}>
        <Form.Item<FieldType>
          label="账号"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="密码"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" onClick={login} loading={loading}>
              登录
            </Button>
            <Button type="primary" onClick={signup} loading={loading}>
              注册
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default React.memo(App);
