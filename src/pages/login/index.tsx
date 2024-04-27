import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Space } from "antd";
import { signup } from "@/api/auth";
import style from "./style.module.less";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
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

  const onFinish: FormProps<FieldType>["onFinish"] = async values => {
    const res = await signup(values);
    console.log("signup", res);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ username: "Hello", password: "qqqqqq" });
  };

  return (
    <div className={style.login}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} className={style.form}>
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default React.memo(App);
