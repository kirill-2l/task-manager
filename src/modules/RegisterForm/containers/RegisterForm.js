import { withFormik } from "formik";
import RegisterForm from "../components/RegisterForm.jsx";
import validate from "utils/validate";

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    name: "",
    password: "",
    confirmPassword: ""
  }),
  validationSchema: validate,
  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "RegisterForm" // helps with React DevTools
})(RegisterForm);
