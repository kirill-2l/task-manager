import React from "react";
import { Form, Input } from "antd";
import { Button } from "components";
import { withFormik } from "formik";
import validate from "utils/validate";

import {
  Form as AuthForm,
  Inner,
  Header,
  Title,
  Description,
  Link,
} from "components/AuthForms";

import { validateField } from "utils/helpers";

const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <AuthForm>
      <Inner>
        <Header>
          <Title>Войти в аккаунт</Title>
          <Description>Пожалуйста, войдите в свой аккаунт</Description>
        </Header>
        <Form onSubmit={handleSubmit}>
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
            <Link to="/register">Зарегистрироваться</Link>
          </Form.Item>
        </Form>
      </Inner>
    </AuthForm>
  );
};
// export default LoginForm;

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validationSchema: validate,
  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "LoginForm", // helps with React DevTools
})(LoginForm);
