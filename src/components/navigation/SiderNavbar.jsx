import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  CalculatorOutlined,
  CheckCircleOutlined,
  FireOutlined,
  CodeOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

const SiderNavbar = (props) => {
  const { menuData, handleHeaderClick } = props;
  const [collapsed, onCollapse] = useState(false);

  const currentPath = window.location.pathname;
  if (currentPath === "/") return null;
  const currentHeaderCategory = currentPath.split("/")[1];

  let currentMenuEntry = [];
  currentMenuEntry = menuData.find(
    (element) => element.link === "/" + currentHeaderCategory
  );

  const returnIcon = (iconName) => {
    switch (iconName) {
      case "PieChartOutlined":
        return <PieChartOutlined />;
      case "UserOutlined":
        return <UserOutlined />;
      case "DesktopOutlined":
        return <DesktopOutlined />;
      case "FileOutlined":
        return <FileOutlined />;
      case "TeamOutlined":
        return <TeamOutlined />;
      case "CalculatorOutlined":
        return <CalculatorOutlined />;
      case "CheckCircleOutlined":
        return <CheckCircleOutlined />;
      case "FireOutlined":
        return <FireOutlined />;
      case "CodeOutlined":
        return <CodeOutlined />;
      default:
        return undefined;
    }
  };

  const renderMenu = (data, currentPath, menuKey) => {
    return data.map((element, index) => {
      if (element.hasOwnProperty("subMenu")) {
        return (
          <SubMenu key={index} icon={returnIcon(element.icon)} title={element.title}>
            {renderMenu(element.subMenu, element.link, menuKey + "-" + index)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={menuKey + "-" + index} icon={returnIcon(element.icon)}>
            {element.title}
            <Link
              to={"/" + currentHeaderCategory + currentPath + element.link}
              onClick={handleHeaderClick}
            />
          </Menu.Item>
        );
      }
    });
  };

  return (
    <>
      {currentMenuEntry.hasOwnProperty("subMenu") && (
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={() => onCollapse(!collapsed)}
        >
          <Menu theme="light" defaultSelectedKeys={["0"]} mode="inline">
            {renderMenu(currentMenuEntry.subMenu, "", "0")}
          </Menu>
        </Sider>
      )}
    </>
  );
};

export default SiderNavbar;
