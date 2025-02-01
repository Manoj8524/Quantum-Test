import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { 
  DashboardOutlined,
  LinkOutlined,
  AppstoreAddOutlined,
  CalendarOutlined,
  QuestionCircleOutlined,
  SlidersOutlined,
  MailOutlined 
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  // Initialize state based on localStorage
  const [collapsed, setCollapsed] = useState(() => {
    const savedState = localStorage.getItem('sidebarCollapsed');
    return savedState === 'true'; // Convert string to boolean
  });

  // Effect to update localStorage whenever collapsed state changes
  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', collapsed);
  }, [collapsed]);

  return (
    <Sider 
      width={240} 
      collapsible 
      collapsed={collapsed} 
      onCollapse={(value) => setCollapsed(value)} 
      style={{ background: '#fff' }}
    >
      <div style={{ textAlign: 'center', margin: '16px 0' }}>
        <h2 style={{ fontFamily: 'Lato', color: '#353535' }}>Quantum</h2>
      </div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<DashboardOutlined />} style={{ fontFamily: 'Lato' }}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<LinkOutlined />} style={{ fontFamily: 'Lato' }}>
          Shortcuts
        </Menu.Item>
        <Menu.Item key="3" icon={<AppstoreAddOutlined />} style={{ fontFamily: 'Lato' }}>
          Overview
        </Menu.Item>
        <Menu.Item key="4" icon={<CalendarOutlined />} style={{ fontFamily: 'Lato' }}>
          Events
        </Menu.Item>
        <Menu.Item key="5" icon={<QuestionCircleOutlined />} style={{ fontFamily: 'Lato' }}>
          About
        </Menu.Item>
        <Menu.Item key="6" icon={<SlidersOutlined />} style={{ fontFamily: 'Lato' }}>
          Services
        </Menu.Item>
        <Menu.Item key="7" icon={<MailOutlined />} style={{ fontFamily: 'Lato' }}>
          Contact
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;