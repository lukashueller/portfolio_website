import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { getCurrentPath } from "../../utils";

const { Header } = Layout;

const HeaderNavbar = (props) => {
  const { menuData, handleHeaderClick } = props;

  console.log(getCurrentPath());

  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={"/admin"}>
        <Menu.Item key="logo">
          <Link to="/">
            <img
              className="logo"
              style={{ height: "3rem" }}
              src="/favicon_white.png"
              alt="Icon"
            />
          </Link>
        </Menu.Item>
        {menuData.map((menuEntry) => (
          <Menu.Item key={menuEntry.link}>
            {menuEntry.title}
            <Link to={menuEntry.link} onClick={handleHeaderClick} />
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

HeaderNavbar.propTypes = {};

export default HeaderNavbar;
