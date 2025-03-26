import { Layout, Space } from "antd";
// import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Articles from "./components/Articles";
import DetailArticle from "./components/DetailArticle";

// import Dashboard from "./components/dashboard";
// import About from "./components/about";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout style={{ height: "100%", width: "100%" }}>
      <Router>
        <Header>
          <nav>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/about">About</Link>
              <Link to="/articles">Articles</Link>
            </Space>
          </nav>
        </Header>

        <Content>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:aid" element={<DetailArticle />} />
            {/* <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </Content>

        <Footer>
          <p>VT6003CEM Demo</p>
        </Footer>
      </Router>
    </Layout>
  );
};
export default App;
