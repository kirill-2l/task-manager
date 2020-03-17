import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./PreviewTask.scss";

const PreviewTask = props => {
  const [activeModal, setActiveModal] = useState(false);
  const { title, description, date } = props;
  const openModal = () => {}

  return (
    <Link onClick={openModal} to="#" className="preview-task">
      <div className="preview-task__wrapper">
        <div className="preview-task__preview"></div>
        <div className="preview-task__title">{title}</div>
      </div>
    </Link>
  );
};

PreviewTask.propTypes = {
  title: PropTypes.string
};

export default PreviewTask;
