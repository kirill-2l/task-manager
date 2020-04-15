import React from "react";
import { connect } from "react-redux";

import { Column as BaseColumn } from "components";
import { tasksActions } from "redux/actions";
const Column = (props) => {
  const { _id, createdAt, order, title, updatedAt, tasks, tasksId } = props;
  let items =
    // tasks && tasks.filter((item) => (item.columnId === _id ? item : null));
    tasks && tasks.filter((item) => (item.columnId === _id ? item : null));
    tasks && console.log( tasks.map((item) => item._id === [tasksId] ? item : null));
  return <BaseColumn tasks={items} title={title} columnId={_id} />;
};

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.items,
});
export default connect(mapStateToProps, { ...tasksActions })(Column);
