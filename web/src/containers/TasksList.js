import React from "react";

import { Draggable } from "react-beautiful-dnd";

import { Task } from "components";

const TasksList = ({ tasks }) => {
  return (
    <div className="tasks-list">
      {tasks &&
        tasks.map((item, index) => (
          <Draggable key={item._id} draggableId={item._id} index={index}>
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Task
                  innerRef={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  title={item.title}
                  id={item._id}
                />
              </div>
            )}
          </Draggable>
        ))}
    </div>
  );
};

export default TasksList;
