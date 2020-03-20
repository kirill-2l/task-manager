import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { TaskDetail } from "components";

const TaskDetailContainer = ({ tasks }) => {
  const { id } = useParams();
  const task = tasks ? tasks.filter(item => item._id === id)[0] : null;

  return <Fragment>{task && <TaskDetail task={task} />}</Fragment>;
};

const mapStateToProps = ({ tasks }) => ({ tasks: tasks.items });

export default connect(mapStateToProps)(TaskDetailContainer);
