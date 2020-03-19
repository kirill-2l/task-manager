const initialState = {
  items: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "TASKS:SET_TASKS":
      return {
        items: payload
      };
    default:
      return state;
  }
};
