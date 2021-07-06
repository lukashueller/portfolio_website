import "./App.less";
import React, { useState } from "react";
import HeaderNavbar from "./components/navigation/HeaderNavbar";
import SiderNavbar from "./components/navigation/SiderNavbar";
import HeaderBreadcrumb from "./components/navigation/HeaderBreadcrumb";
import Calculator from "./components/Calculator";
import Home from "./components/pages/Home";
import { Layout } from "antd";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "./components/pages/Error";
import Apps from "./components/pages/Apps";
import AdminInterface from "./components/pages/AdminInterface";
import Website from "./components/pages/Website";

const { Content } = Layout;

const App = () => {
  const menuData = [
    {
      title: "Apps",
      link: "/apps",
      subMenu: [
        {
          title: "Finished Projects",
          link: "/finishedProjects",
          icon: "CheckCircleOutlined",
          subMenu: [
            { title: "FinishedProject1", link: "/finishedProject1" },
            { title: "FinishedProject2", link: "/finishedProject2" },
          ],
        },
        {
          title: "Calculator",
          link: "/calculator",
          icon: "CalculatorOutlined",
        },
        {
          title: "Online JS Editor",
          link: "/js-editor",
          icon: "CodeOutlined",
        },
        {
          title: "More to come!",
          link: "/moreToCome",
          icon: "FireOutlined",
        },
      ],
    },
    { title: "Website Projects", link: "/website" },
    { title: "Admin Interface", link: "/admin" },
  ];

  const [refresh, setRefresh] = useState(true);

  return (
    <BrowserRouter>
      <Layout>
        <HeaderNavbar
          menuData={JSON.parse(JSON.stringify(menuData))}
          handleHeaderClick={() => setRefresh(!refresh)}
        />
        <Layout>
          <SiderNavbar
            menuData={JSON.parse(JSON.stringify(menuData))}
            handleHeaderClick={() => setRefresh(!refresh)}
          />
          <Layout style={{ padding: "24px 24px" }}>
            <HeaderBreadcrumb menuData={JSON.parse(JSON.stringify(menuData))} />
            <Content className="site-layout-background">
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/apps" component={Apps} exact />
                <Route path="/website" component={Website} exact />
                <Route path="/admin" component={AdminInterface} exact />
                <Route path="/apps/calculator" component={Calculator} exact />
                <Route component={Error} />
              </Switch>

              {/* <Content style={{ backgroundColor: "blue", minHeight: "280px" }}>
                <Calculator />
              </Content> */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
