import React, { useState } from "react";
import { Modal, Typography } from "antd";
import { useHistory } from "react-router-dom";
// import distanceInWordsToNow from "date-fns/formatDistanceToNow";
// import ruLocale from "date-fns/locale/ru";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import "./TaskDetail.scss";

const TaskDetail = ({ task }) => {
  const history = useHistory();
  const [description, setDescription] = useState(task.description);
  const { Paragraph } = Typography;
  const onChange = str => {
    setDescription(str);
  };
  return (
    <Modal
      title={task.title}
      className="task-detail t-detail"
      visible
      centered
      onCancel={() => history.goBack()}
      footer={null}
    >
      <div className="t-detail__body">
        <div className="t-detail__item">
          <div className="t-detail__title">Описание</div>
          <Paragraph
            editable={{ onChange: onChange }}
            className="t-detail__description"
          >
            {description}
          </Paragraph>
        </div>
        <div className="t-detail__item">
          <div className="t-detail__title">Автор</div>
          <div className="t-detail__description">{task.author}</div>
        </div>
        <div className="t-detail__item">
          <div className="t-detail__title">Задача обновлена</div>
          {/* <div className="t-detail__description">
            {format(Date.parse(task.createdAt), "yyyy dd.MM p", {
              locale: ru
            })}
          </div> */}
        </div>
        <div className="t-detail__item">
          <div className="t-detail__title">Задача создана</div>
          <div className="t-detail__description">
            {/* {format(Date.parse(task.createdAt), "yyyy dd.MM p", {
              locale: ru
            })} */}
          </div>
        </div>
        <div className="t-detail__item">
          <div className="t-detail__title">Автор задачи</div>
          <div className="t-detail__author">{task.author}</div>
        </div>
      </div>
    </Modal>
  );
};

export default TaskDetail;
