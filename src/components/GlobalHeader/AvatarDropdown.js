import React from 'react'
import { Avatar, Dropdown, Menu, message } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { history } from 'umi'


export default function AvatarDropdown() {
  const onClick = ({ key }) => {
    if (key === 'loginOut') {
      localStorage.removeItem('userInfo');
      history.replace('/user/login');
      message.info('退出登录成功')
    }
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key='userInfo'>
        <span>用户中心</span>
      </Menu.Item>
      <Menu.Item key='loginOut'>
        <span>退出登录</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Dropdown>
    </div>
  )
}
