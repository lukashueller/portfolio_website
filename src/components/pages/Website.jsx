import React from "react";
import { Typography, Row, Col } from "antd";
import styles from "./WebsiteCssTemporary.module.css";

const { Title } = Typography;

const websiteData = [
  { title: "AV-Union" },
  { title: "Südstern Senzig" },
  { title: "Netzwerk für Senzig" },
  { title: "Ortbeirat Senzig" },
  { title: "Hueller EDV" },
  { title: "FeWo MoWo" },
];

const createWebsiteBox = (element) => {
  console.log(element);
  return (
    <Col xs={24} sm={12} md={8} xl={6} xxl={4}>
      <Col className={[styles.box, styles.websiteBox]}>
        <Row
          justify="center"
          align="middle"
          style={{ height: "100%", margin: "0.5rem" }}
        >
          <Title className={styles.title} level={2}>
            {element.title}
          </Title>
        </Row>
      </Col>
    </Col>
  );
};

const Website = () => {
  return (
    <>
      <Title>Website Projects</Title>
      <Row gutter={[16, 16]}>
        {websiteData.map((element) => createWebsiteBox(element))}
      </Row>
    </>
  );
};

export default Website;
