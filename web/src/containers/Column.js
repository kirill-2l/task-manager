import React from "react";
import { connect } from "react-redux";
import orderBy from "lodash/orderBy";

import { Column as BaseColumn } from "components";
import { tasksActions } from "redux/actions";
const Column = props => {
  const { _id, createdAt, order, title, updatedAt, tasks } = props;
  let items =
    tasks && tasks.filter(item => (item.columnId === _id ? item : null));

  return <BaseColumn tasks={items} title={title} columnId={_id} />;
};

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.items
});
export default connect(mapStateToProps, { ...tasksActions })(Column);
