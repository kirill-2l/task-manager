import { axios } from "core";

export default {
  addUser: ({ name, email, password }) =>
    axios.post("/users", {
      name,
      email,
      password,
    }),
};
