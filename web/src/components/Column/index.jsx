import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { TasksList } from "containers";

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
          <Button
            className="column__add-btn"
            type="link"
            icon={<PlusOutlined />}
          >
            Добавить еще одну карточку
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Column;
