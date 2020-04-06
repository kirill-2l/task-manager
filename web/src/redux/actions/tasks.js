import { tasksApi } from "utils/api";

const actions = {
  setTasks: tasks => ({
    type: "TASKS:SET_TASKS",
    payload: tasks
  }),
  addTask: task => ({
    type: "TASKS:ADD_TASK",
    payload: task
  }),
  fetchTasks: () => dispatch => {
    tasksApi.getAll().then(({ data }) => {
      dispatch(actions.setTasks(data));
    });
  },
  fetchAddTask: ({ title, columnId }) => dispatch => {
    tasksApi.add(title, columnId);
    dispatch(actions.fetchTasks());
  }
};

export default actions;
