import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DragDropContext } from "react-beautiful-dnd";

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

  const onDragEnd = (result) => {
    const {destinationm, source, draggableId} = result;
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BaseBoard columns={columns} />
    </DragDropContext>
  );
};

const mapStateToProps = ({ columns, tasks }) => ({
  columns: columns.items,
  tasks: tasks.items,
});
const mapDispatchToProps = (dispatch) => ({
  tasksActions: bindActionCreators(tasksActions, dispatch),
  columnsActions: bindActionCreators(columnsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
