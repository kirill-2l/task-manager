import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Board as BaseBoard } from "components";
import { columnsActions } from "redux/actions";
import { tasksActions } from "redux/actions";

const Board = ({ tasks, columns, columnsActions, tasksActions }) => {
  useEffect(() => {
    if (!columns) {
      columnsActions.fetchColumns();
    }
  }, []);
  useEffect(() => {
    if (!tasks) {
      tasksActions.fetchTasks();
    }
  }, []);
  return <BaseBoard columns={columns} />;
};

const mapStateToProps = ({ columns, tasks }) => ({
  columns: columns.items,
  tasks: tasks.items
});
const mapDispatchToProps = dispatch => ({
  tasksActions: bindActionCreators(tasksActions, dispatch),
  columnsActions: bindActionCreators(columnsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
