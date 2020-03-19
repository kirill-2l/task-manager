import React from "react";
import { connect } from "react-redux";
import { Task } from "components";
import orderBy from "lodash/orderBy";

const TasksList = ({ tasks, columnId }) => {
  const filteredTasks = tasks && tasks.filter(item =>
    item.columnId === columnId ? item : null
  );
  return (
    <div className="tasks-list">
      {filteredTasks &&
        orderBy(filteredTasks, "order", "asc").map(item => (
          <Task key={item._id} {...item} />
        ))}
    </div>
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.items
});
export default connect(mapStateToProps)(TasksList);
