import React, { Fragment } from "react";
import { Form, Input } from "antd";
import { Button } from "components";
import { Link } from "react-router-dom";
import { InfoCircleTwoTone } from "@ant-design/icons";
import { validateField } from "utils/helpers";

const success = false;

const RegisterForm = props => {
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
      {!success ? (
        <Fragment>
          <div className="auth__header">
            <h2 className="auth__title">Зарегистрироваться</h2>
            <p className="auth__descr">
              Для входа в task-manager необходимо зарегистрироваться
            </p>
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
              validateStatus={validateField({ touched, errors, key: "name" })}
              help={touched.name ? errors.name : null}
              hasFeedback
            >
              <Input
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Имя"
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
            <Form.Item
              validateStatus={validateField({
                touched,
                errors,
                key: "confirmPassword"
              })}
              help={touched.confirmPassword ? errors.confirmPassword : null}
              hasFeedback
            >
              <Input
                name="confirmPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                type="text"
                placeholder="Повторите пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                disabled={isSubmitting}
                onClick={handleSubmit}
                size="large"
              >
                Зарегистрироваться
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
    </div>
  );
};
export default RegisterForm;
