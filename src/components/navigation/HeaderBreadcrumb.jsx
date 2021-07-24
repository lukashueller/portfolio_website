import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const HeaderBreadcrumb = (props) => {
  const { menuData, handleHeaderClick } = props;

  const currentPath = window.location.pathname;
  if (currentPath === "/") return null;
  const currentHeaderCategory = currentPath.split("/")[1];
  let currentMenuEntry = [];
  currentMenuEntry = menuData.find(
    (element) => element.link === "/" + currentHeaderCategory
  );

  const pathAsArray = currentPath.split("/").slice(1);

  const getBreadcrumbFromPath = (breadcrumbPathAsArray, breadcrumbData) => {
    if (
      breadcrumbPathAsArray.length === 0 ||
      typeof breadcrumbData === "undefined"
    )
      return [];

    const currentData = breadcrumbData.find(
      (element) => element.link === "/" + breadcrumbPathAsArray[0]
    );

    return [{ title: currentData.title, link: currentData.link }].concat(
      getBreadcrumbFromPath(breadcrumbPathAsArray.slice(1), currentData.subMenu)
    );
  };

  const getPathForIndex = (completePathAsArray, index) => {
    let pathForIndex = "";
    for (let i = 0; i < index; i++) {
      pathForIndex = pathForIndex.concat(completePathAsArray[i]);
    }
    return pathForIndex;
  };

  const getBreadcrumbObject = (breadcrumbObject) => {
    const completePathAsArray = breadcrumbObject.map((element) => element.link);

    breadcrumbObject = [{ link: "/", title: "Home" }].concat(breadcrumbObject);

    return breadcrumbObject.map((element, index) => {
      return {
        title: element.title,
        link: getPathForIndex(completePathAsArray, index),
      };
    });
  };

  const breadcrumb = getBreadcrumbObject(
    getBreadcrumbFromPath(pathAsArray, menuData)
  );

  return (
    <>
      {currentMenuEntry.hasOwnProperty("subMenu") && (
        <Breadcrumb style={{ marginBottom: "1rem" }}>
          {breadcrumb.map((element, index) => (
            <Breadcrumb.Item key={index}>
              <Link to={element.link} onClick={handleHeaderClick}>
                {element.title}
              </Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      )}
    </>
  );
};

export default HeaderBreadcrumb;
