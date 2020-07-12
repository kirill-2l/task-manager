import { axios } from "core";

export default {
  getAll: () => axios.get("/tasks"),
  add: (title, columnId) =>
    axios.post("/tasks", {
      title: title,
      columnId: columnId,
    }),
};
