import React from "react";
import { Breadcrumb } from "antd";

const HeaderBreadcrumb = (props) => {
  const { menuData } = props;

  const currentPath = window.location.pathname;
  if (currentPath === "/") return null;
  const currentHeaderCategory = currentPath.split("/")[1];
  let currentMenuEntry = [];
  currentMenuEntry = menuData.find(
    (element) => element.link === "/" + currentHeaderCategory
  );

  const pathAsArray = currentPath.split("/").slice(1);

  const getBreadcrumbFromPath = (breadcrumbPathAsArray, breadcrumbData) => {
    if (breadcrumbPathAsArray.length === 0 || typeof breadcrumbData === "undefined")
      return [];

    const currentData = breadcrumbData.find(
      (element) => element.link === "/" + breadcrumbPathAsArray[0]
    );

    return [currentData.title].concat(
      getBreadcrumbFromPath(breadcrumbPathAsArray.slice(1), currentData.subMenu)
    );
  };

  const breadcrumb = getBreadcrumbFromPath(pathAsArray, menuData);

  return (
    <>
      {currentMenuEntry.hasOwnProperty("subMenu") && (
        <Breadcrumb style={{ marginBottom: "1rem" }}>
          <Breadcrumb.Item key="home">Home</Breadcrumb.Item>
          {breadcrumb.map((element, index) => (
            <Breadcrumb.Item key={index}>{element}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
      )}
    </>
  );
};

export default HeaderBreadcrumb;
