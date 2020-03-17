import * as Yup from "yup";

export default Yup.object().shape({
  email: Yup.string()
    .email("Неправильный email")
    .required("Заполните поле email"),
  name: Yup.string()
    .min(4, "Имя должно быть не менее 4 символов")
    .required("Заполните имя"),
  password: Yup.string()
    .matches(
      /^[A-Za-z]\w{7,14}$/,
      "Пароль должен быть не менее 6 символов, содержать заглавную букву и цифру"
    )
    .required("Заполните пароль"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Пароль не совпадает")
    .required("Повторите пароль")
});
