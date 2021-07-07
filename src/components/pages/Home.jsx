import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const Home = () => {
  return (
    <>
      <Title>Home</Title>
      <Title level={3}>ToDos</Title>
      <Title level={5}>- Add Links to Breadcrumb</Title>
      <Title level={5}>- Add WebsiteToDo-List-Tool</Title>
      <Title level={5}>- Add old Website to Home</Title>
    </>
  );
};

export default Home;
