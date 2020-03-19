import { columnsApi } from "utils/api";

const actions = {
  setColumns: items => ({
    type: "COLUMNS:SET_COLUMNS",
    payload: items
  }),
  fetchColumns: () => dispatch => {
    columnsApi.getAll().then(({ data }) => {
      dispatch(actions.setColumns(data));
    });
  }
};

export default actions;
