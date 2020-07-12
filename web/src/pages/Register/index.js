import React, { Fragment, useState } from "react";
import { Form, Input } from "antd";
import { InfoCircleTwoTone } from "@ant-design/icons";
import { withFormik } from "formik";

import { Button } from "components";
import { validateField } from "utils/helpers";
import validate from "utils/validate";

import { registerApi } from "utils/api";

import {
  Form as FormContainer,
  Inner,
  Header,
  Title,
  Description,
  Link,
} from "components/AuthForms";

const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    status,
  } = props;
  console.log(props);
  // console.log(isSubmited);
  return (
    <FormContainer>
      <Inner>
        {!status.isSubmited ? (
          <Fragment>
            <Header>
              <Title>Зарегистрироваться</Title>
              <Description>
                Для входа в task-manager необходимо зарегистрироваться
              </Description>
            </Header>

            <Form onSubmit={handleSubmit}>
              <Form.Item
                validateStatus={validateField({
                  touched,
                  errors,
                  key: "email",
                })}
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
                  key: "password",
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
                  key: "confirmPassword",
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
                <Link to="/login">Авторизоваться</Link>
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
              На вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </Inner>
    </FormContainer>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  }),
  mapPropsToStatus: () => ({
    isSubmited: false,
  }),
  validationSchema: validate,
  handleSubmit: (values, { setSubmitting, setStatus }) => {
    registerApi.addUser(values).then(() => console.log("ok"));
    setSubmitting(false);
    setStatus({ isSubmited: true });
  },

  displayName: "RegisterForm", // helps with React DevTools
})(RegisterForm);
