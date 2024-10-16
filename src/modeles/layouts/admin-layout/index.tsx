import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { admin } from '../../../router/routes';
import { NavLink, Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const removeToken = () => {
    window.localStorage.removeItem('access_token')
    window.localStorage.removeItem("first_name")
    window.localStorage.removeItem("last_name")
    window.localStorage.removeItem("phone_number")
    window.localStorage.removeItem("email")
    window.localStorage.removeItem("password")
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
      <h1 className='text-[#ffc04a] text-[30px] font-bold text-center mt-2 mb-2'>TechnoArk</h1>
        <div className="demo-logo-vertical" />
        <Menu
        className='h-[100vh]'
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={admin.map((item, index) => ({
            key: index + 1,
            label: <NavLink to={item.path}>{item.content}</NavLink>,
         }))}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;