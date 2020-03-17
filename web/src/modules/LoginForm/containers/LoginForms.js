import { withFormik } from "formik";
import LoginForm from "../components/LoginForm.jsx";

import validate from "utils/validate";

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),
  validationSchema: validate,
  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "LoginForm" // helps with React DevTools
})(LoginForm);
