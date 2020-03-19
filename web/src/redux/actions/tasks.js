import { tasksApi } from "utils/api";

const actions = {
  setTasks: tasks => ({
    type: "TASKS:SET_TASKS",
    payload: tasks
  }),
  fetchTasks: () => dispatch => {
    tasksApi.getAll().then(({ data }) => {
      dispatch(actions.setTasks(data));
    });
  }
};

export default actions;
