import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Task.scss";

const Task = props => {
  const { title } = props;
  return (
    <Link to="#" className="preview-task">
      <div className="preview-task__wrapper">
        <div className="preview-task__preview"></div>
        <div className="preview-task__title">{title}</div>
      </div>
    </Link>
  );
};

Task.propTypes = {
  title: PropTypes.string
};

export default Task;
