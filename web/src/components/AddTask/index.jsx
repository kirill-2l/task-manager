import React, { useState } from "react";

import { Button, Input } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";

const AddTask = () => {
  const [openTask, setOpenTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState(null);
  const onClick = () => setOpenTask(!openTask);
  const onChange = e => setTaskTitle(e.target.value);
  const addTask = () => {
    if(taskTitle){console.log("added")}
  };

  return !openTask ? (
    <Button
      onClick={() => onClick()}
      className="column__add-btn"
      icon={<PlusOutlined />}
    >
      Добавить еще одну карточку
    </Button>
  ) : (
    <div className="column__footer-edit">
      <Input.TextArea onChange={e => onChange(e)} />
      <div className="column__footer-controls">
        <Button
          type="primary"
          onClick={() => addTask()}
          className="column__add-btn"
          icon={<PlusOutlined />}
        >
          Добавить карточку
        </Button>
        <CloseOutlined onClick={() => onClick()} style={{ fontSize: "22px" }} />
      </div>
    </div>
  );
};

export default AddTask;
