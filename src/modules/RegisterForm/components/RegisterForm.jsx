import React, { Fragment } from "react";
import { Form, Input } from "antd";
import { Button, Block } from "components";
import { Link } from "react-router-dom";
import { InfoCircleTwoTone } from "@ant-design/icons";
const RegisterForm = () => {
  const success = true;
  return (
    <Block>
      {!success ? (
        <Fragment>
          <div className="auth__header">
            <h2 className="auth__title">Зарегистрироваться</h2>
            <p className="auth__descr">
              Для входа в task-manager необходимо зарегистрироваться
            </p>
          </div>
          <Form name="normal_login" className="login-form">
            <Form.Item name="email">
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="name">
              <Input placeholder="Имя" />
            </Form.Item>
            <Form.Item name="password">
              <Input type="password" placeholder="Пароль" />
            </Form.Item>
            <Form.Item name="password">
              <Input type="password" placeholder="Повторите пароль" />
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
        </Fragment>
      ) : (
        <div className="auth__success-block">
          <InfoCircleTwoTone
            className="auth__success-icon"
            style={{ fontSize: "50px" }}
          />
          <h3 className="auth__success-title">Подтвердите свой аккаунт.</h3>
          <p className="auth__success-descr">
            На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.
          </p>
        </div>
      )}
    </Block>
  );
};
export default RegisterForm;
