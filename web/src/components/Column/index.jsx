import React from "react";
import { TasksList, AddTask } from "containers";

import "./Column.scss";
const Column = ({ title, _id }) => {
  return (
    <div className="column">
      <div className="column__content">
        <h4 className="column__header">{title}</h4>
        <div className="column__body">
          <TasksList columnId={_id} />
        </div>
        <div className="column__footer">
          <AddTask columnId={_id}/>
        </div>
      </div>
    </div>
  );
};

export default Column;
