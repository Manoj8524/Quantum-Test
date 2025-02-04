import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { 
  DashboardOutlined,
  LinkOutlined,
  AppstoreAddOutlined,
  SlidersOutlined
} from '@ant-design/icons';

import logo from '../assets/Q.png';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(() => {
    const savedState = localStorage.getItem('sidebarCollapsed');
    return savedState === 'true';
  });

  const navigate = useNavigate(); // For fast routing

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', collapsed);
  }, [collapsed]);

  const handleLogoClick = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <Sider 
      width={240} 
      collapsible 
      collapsed={collapsed} 
      onCollapse={(value) => setCollapsed(value)} 
      style={{ background: '#fff' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
        <img 
          src={logo} 
          alt="Logo" 
          style={{ width: '40px', height: '40px', cursor: 'pointer', marginRight: collapsed ? '0' : '10px' }} 
          onClick={handleLogoClick} 
        />
        {!collapsed && (
          <h2 style={{ fontFamily: 'Lato', color: '#353535', margin: 0 }}>Quantum</h2>
        )}
      </div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<DashboardOutlined style={{ fontSize: '24px' }} />} onClick={() => navigate('/ui')}>
          Explore
        </Menu.Item>
        <Menu.Item key="2" icon={<LinkOutlined style={{ fontSize: '24px' }} />} onClick={() => navigate('/projects')}>
          Projects
        </Menu.Item>
        <Menu.Item key="3" icon={<AppstoreAddOutlined style={{ fontSize: '24px' }} />} onClick={() => navigate('/discover')}>
          Discover
        </Menu.Item>
        <Menu.Item key="4" icon={<SlidersOutlined style={{ fontSize: '24px' }} />} onClick={() => navigate('/settings')}>
          Settings
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
