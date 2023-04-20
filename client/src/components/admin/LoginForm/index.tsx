import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Container from "../../common/Container";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { login, userSelector } from "../../../slices/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Roles } from "../../../utils/types";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [user, navigate]);

  const onFinish = (values: any) => {
    dispatch(login(values));
  };

  return (
    <Container title="Login">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="forgot.com">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="register.com">register now!</a>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default LoginForm;
