/**
 * Idee: Diese Komponente wird mit einem Parameter geroutet, die die Webseite angibt
 * die entsprechende Webseite wird dann gerendert
 *
 */

import React from "react";
import { Button } from "antd";

const WebsiteProject = () => {
  return (
    <>
      <Button type="primary" style={{ width: "100%" }}>
        Primary Button
      </Button>
      <embed
        src="http://www.av-union.de"
        style={{ width: "100%", height: "300px" }}
      />
      ;
    </>
  );
};

export default WebsiteProject;
