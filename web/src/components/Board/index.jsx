import React from "react";
import './Board.scss'
const Board = ({ children }) => {
  return (
    <div className="board">
      <div className="board__nav">
        <div className="board__title">Board #1</div>
      </div>
      <div className="board__body">{children}</div>
    </div>
  );
};

export default Board;
