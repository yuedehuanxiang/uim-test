import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
import styles from './index.less'

export default function BasicLayout({ children }) {
  const [collapsed, setCollapse] = useState(false);
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
            nav 1
            </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
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

// export default function BasicLayout({ children }) {
//   const [collapsed, setCollapse] = useState(false);
//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sider className={styles.sider} collapsible collapsed={collapsed} onCollapse={() => { setCollapse(!collapsed) }}>
//         <div className={styles.logo}>
//           <a href="/">
//             <img src={require('../assets/logo.svg')} alt="logo" /><h1>Ant Design Pro</h1>
//           </a>
//         </div>
//         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//           <Menu.Item key="1" icon={<PieChartOutlined />}>
//             Option 1
//             </Menu.Item>
//           <Menu.Item key="2" icon={<DesktopOutlined />}>
//             Option 2
//             </Menu.Item>
//           <SubMenu key="sub1" icon={<UserOutlined />} title="User">
//             <Menu.Item key="3">Tom</Menu.Item>
//             <Menu.Item key="4">Bill</Menu.Item>
//             <Menu.Item key="5">Alex</Menu.Item>
//           </SubMenu>
//           <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
//             <Menu.Item key="6">Team 1</Menu.Item>
//             <Menu.Item key="8">Team 2</Menu.Item>
//           </SubMenu>
//           <Menu.Item key="9" icon={<FileOutlined />} />
//         </Menu>
//       </Sider>
//       <Layout className="site-layout">
//         <Header className="site-layout-background" style={{ padding: 0 }} />
//         <Content style={{ margin: '0 16px' }}>
//           <Breadcrumb style={{ margin: '16px 0' }}>
//             <Breadcrumb.Item>User</Breadcrumb.Item>
//             <Breadcrumb.Item>Bill</Breadcrumb.Item>
//           </Breadcrumb>
//           <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//             {children}
//           </div>
//         </Content>
//         <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//       </Layout>
//     </Layout>
//   )
// }
