import React from "react";
import { connect } from "react-redux";
import { tasksActions } from "redux/actions";
import { AddItem } from "components";

const AddTaskContainer = ({ fetchAddTask, columnId }) => {
  const addItem = ({ inputVal }) => {
    fetchAddTask({
      title: inputVal,
      columnId: columnId
    });
  };
  return <AddItem addItem={addItem} />;
};

export default connect(null, { ...tasksActions })(AddTaskContainer);
