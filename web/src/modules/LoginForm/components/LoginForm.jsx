import React from "react";
import { Form, Input } from "antd";
import { Button } from "components";
import { Link } from "react-router-dom";

import { validateField } from "utils/helpers";

const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;

  return (
    <div className="auth__inner">
      <div className="auth__header">
        <h2 className="auth__title">Войти в аккаунт</h2>
        <p className="auth__descr">Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item
          validateStatus={validateField({ touched, errors, key: "email" })}
          help={touched.email ? errors.email : null}
          hasFeedback
        >
          <Input
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          validateStatus={validateField({
            touched,
            errors,
            key: "password"
          })}
          help={touched.password ? errors.password : null}
          hasFeedback
        >
          <Input
            name="password"
            type="text"
            placeholder="Пароль"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
          />
        </Form.Item>
        <Form.Item>
          <Button
            disabled={isSubmitting}
            onClick={handleSubmit}
            type="primary"
            size="large"
          >
            Войти в аккаунт
          </Button>
        </Form.Item>
        <Form.Item>
          <Link to="/register" className="auth__register-link">
            Зарегистрироваться
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginForm;
