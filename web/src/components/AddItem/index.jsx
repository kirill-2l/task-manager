import React, { useState } from "react";
import { Button, Input } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import classNames from "classnames";

import "./AddItem.scss";

const AddItem = ({ column, addItem }) => {
  const [activeInput, setActiveInput] = useState(false);
  const [inputVal, setInputVal] = useState(null);
  const onClick = () => {
    if (activeInput && inputVal) {
      addItem({ inputVal });
      setActiveInput(!activeInput);
    } else if (!activeInput) {
      setActiveInput(!activeInput);
    }
  };
  const onChange = e => setInputVal(e.target.value);

  return (
    <div className="add-item">
      {!column ? (
        <div className="add-item__card">
          {activeInput && <Input.TextArea onChange={e => onChange(e)} />}
          <div className="add-item__controls">
            <Button
              onClick={onClick}
              className={classNames("add-item__btn", {
                "add-item__btn--active": activeInput
              })}
              icon={<PlusOutlined />}
              type="link"
            >
              {activeInput ? `Добавить карточку` : `Добавить еще одну карточку`}
            </Button>
            {activeInput && (
              <CloseOutlined
                onClick={() => onClick()}
                style={{ fontSize: "22px" }}
              />
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AddItem;
