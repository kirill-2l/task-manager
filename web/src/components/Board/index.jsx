import React from "react";
import "./Board.scss";
import { Column } from "containers";
const Board = ({ columns, tasks }) => {
  return (
    <div className="board">
      <div className="board__nav">
        <div className="board__title">Board #1</div>
      </div>
      <div className="board__body">
        {columns &&
          columns.map(item => {
            const { _id } = item;
            return (
              <Column
                key={_id}
                {...item}
              />
            )
          })}
      </div>
    </div>
  );
};

export default Board;
