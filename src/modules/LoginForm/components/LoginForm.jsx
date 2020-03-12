import React from "react";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Block } from "components";
import { Link } from "react-router-dom";

const LoginForm = () => (
  <Block>
    <div className="auth__header">
      <h2 className="auth__title">Войти в аккаунт</h2>
      <p className="auth__descr">Пожалуйста, войдите в свой аккаунт</p>
    </div>
    <Form name="normal_login" className="login-form">
      <Form.Item name="username">
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Логин"
        />
      </Form.Item>
      <Form.Item name="password">
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" size="large">
          Войти в аккаунт
        </Button>
      </Form.Item>
      <Form.Item>
        <Link to="/register" className="auth__register-link">
          Зарегистрироваться
        </Link>
      </Form.Item>
    </Form>
  </Block>
);
export default LoginForm;
