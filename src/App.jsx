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
import menuData from "./resources/menuData.json";

const { Content } = Layout;

const App = () => {
  const [refresh, setRefresh] = useState(true);

  return (
    <BrowserRouter>
      <Layout>
        <HeaderNavbar
          menuData={menuData}
          handleHeaderClick={() => setRefresh(!refresh)}
        />
        <Layout>
          <SiderNavbar
            menuData={menuData}
            handleHeaderClick={() => setRefresh(!refresh)}
          />
          <Layout className="site-layout-background">
            <HeaderBreadcrumb menuData={menuData} />
            <Content className="site-layout">
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
