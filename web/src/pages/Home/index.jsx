import React, { Fragment } from "react";
import "./Home.scss";
import orderBy from "lodash/orderBy";

import { Header, Column, Board } from "components";

const Home = () => {
  const data = [
    {
      _id: 1,
      order: 1,
      title: "Дизайн",
      tasks: [
        {
          title: "Задизайнить сайтец",
          id: '124124214124',
          description: "Lorem ipsum dolor sit amet.",
          date: new Date()
        }
      ]
    },
    {
      _id: 2,
      order: 2,
      title: "Верстка",
      tasks: [
        {
          title: "Заверстать сайтец, че, сложно?",
          id: '1241242141241',
          description: "Lorem ipsum dolor sit amet.",
          date: new Date()
        }
      ]
    }
  ];
  return (
    <Fragment>
      <Header />
      <Board>
        {orderBy(data, "order", "asc").map(({ tasks, title, _id, order }) => (
          <Column key={_id} title={title} tasks={tasks} />
        ))}
      </Board>
    </Fragment>
  );
};

export default Home;
