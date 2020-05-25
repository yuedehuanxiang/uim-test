import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import Avatar from '../components/GlobalHeader/AvatarDropdown'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { history, connect, Link } from 'umi';


const { Header, Sider, Content } = Layout;
import styles from './index.less'

function BasicLayout({ children, status }) {
  const [collapsed, setCollapse] = useState(false);
  if (status !== 'ok') {
    history.replace('/user/login')
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo}>
          <a href="/">
            <img src={require('../assets/logo.svg')} alt="logo" />
            {collapsed ? '' : <h1>Ant Design</h1>}
          </a>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/home/welcome">
              home
        </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/home/user">
              user
        </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className={styles.siteLayoutBackground} style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: styles.trigger,
            onClick: () => { setCollapse(!collapsed) },
          })}
          <div className={styles.rightContent}>
            <Avatar />
          </div>
        </Header>
        <Content
          className={styles.siteLayoutBackground}
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
function mapStateToProps(state) {
  const { status } = state.login;
  return {
    status
  };
}
export default connect(mapStateToProps)(BasicLayout)
