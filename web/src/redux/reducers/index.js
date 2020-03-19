import { combineReducers } from "redux";

import tasks from "./tasks";
import columns from "./columns";

export default combineReducers({
  tasks, columns
});
