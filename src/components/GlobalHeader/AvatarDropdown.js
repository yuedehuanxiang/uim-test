import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';


export default function AvatarDropdown() {
  return (
    <div>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </div>
  )
}
