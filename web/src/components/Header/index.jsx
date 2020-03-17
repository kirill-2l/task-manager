import React from "react";
import { Avatar, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">Task manager</div>
        <div className="header__nav">
          <div className="header__search-wrapper">
            <Button
              className="header__search"
              type="link"
              icon={<SearchOutlined />}
            >
              Поиск
            </Button>
          </div>

          <Avatar
            style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
            size="large"
          >
            {"K"}
          </Avatar>
        </div>
      </div>
    </header>
  );
};
export default Header;
