import React from "react";

import { Draggable } from "react-beautiful-dnd";

import { Task } from "components";

const TasksList = ({ tasks }) => {
  return (
    <div className="tasks-list">
      {tasks &&
        tasks.map((item) => (
          <Draggable key={item._id} draggableId={item._id} index={item.order}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Task title={item.title} id={item._id} order={item.order} />
              </div>
            )}
          </Draggable>
        ))}
    </div>
  );
};

export default TasksList;
