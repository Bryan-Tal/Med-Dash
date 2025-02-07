import { Layout, Menu, Popconfirm, Button } from "antd";
import { BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import {
  HomeOutlined,
  LogoutOutlined,
  BookOutlined,
  LineChartOutlined,
  TrophyOutlined
} from "@ant-design/icons";
import "./index.scss";
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/dashboard_icon.svg';
import { useEffect, useState } from "react";

const { Header, Sider } = Layout;

const GeekLayout = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the login page
  };

  return (
    <Layout>
      <Header className="layout-header">
        <div className="logo-container" >
          <img src={logo} alt="logo landing page button" onClick={handleHomeClick} />
          <span className="logo-text">MedDash</span>
          <div className="user-info">
            <span className="user-name">user.name</span>
            <span className="user-logout">
              <Popconfirm title="Are you sure you want to logout?" okText="Logout" okType= "default" onConfirm={handleHomeClick} cancelText="Cancel">
                  <LogoutOutlined /> Logout
              </Popconfirm>
            </span>
          </div>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background" >
          <Menu
            mode="inline"
            theme="light"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0}}
          >
            <Menu.Item icon={<HomeOutlined />} key="1" >
              <Link to={"/user/home"}>Home Page</Link>
            </Menu.Item>

            <Menu.Item icon={<BookOutlined />} key="2">
            <Link to={"/user/diary"}>Diary Entries</Link>
            </Menu.Item>

            <Menu.Item icon={<LineChartOutlined />} key="3">
            <Link to={"/user/healthAnalysis"}>Health Analysis</Link>
            </Menu.Item>

            <Menu.Item icon={<TrophyOutlined />} key="4">
            <Link to={"/user/healthTracker"}>Health Habit Tracker</Link>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
      
      
          <Outlet/>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default GeekLayout;