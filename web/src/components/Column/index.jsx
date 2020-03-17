import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { PreviewTask } from "components";

import "./Column.scss";
const Column = ({ title, tasks }) => {
  return (
    <div className="column">
      <div className="column__content">
        <h4 className="column__header">{title}</h4>
        <div className="column__body">
          {tasks.map((task) => {
            // console.log({...task})
            return <PreviewTask key={Math.random()} {...task} />;
          })}
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
