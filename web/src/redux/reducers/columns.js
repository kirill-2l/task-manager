const initialState = {
  items: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "COLUMNS:SET_COLUMNS":
      return {
        items: payload
      };
    default:
      return state;
  }
};
