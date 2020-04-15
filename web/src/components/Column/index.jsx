import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { TasksList, AddItem } from "containers";
import "./Column.scss";

const Column = ({ title, columnId, tasks }) => {
  return (
    <div className="column">
      <div className="column__content">
        <h4 className="column__header">{title}</h4>
        <div className="column__body">
          <Droppable droppableId={columnId}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <TasksList tasks={tasks}>{provided.placeholder}</TasksList>
              </div>
            )}
          </Droppable>
        </div>
        <div className="column__footer">
          <AddItem columnId={columnId} />
        </div>
      </div>
    </div>
  );
};

export default Column;
