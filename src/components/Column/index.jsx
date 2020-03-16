import React from "react";
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import "./Column.scss"
const Column = ({ children }) => {
  return (
    <div className="column">
      <div className="column__content">
        <h4 className="column__header">Дизайн</h4>
        <div className="column__body">{children}</div>
        <div className="column__footer">
        <Button className="column__add-btn" type="link" icon={<PlusOutlined />}>Добавить еще одну карточку</Button>
        </div>
      </div>
    </div>
  );
};

export default Column;
