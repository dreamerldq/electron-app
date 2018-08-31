import React from 'react';
import { Menu } from 'antd';
import {
  Link,
} from 'react-router-dom';

class MenuIndex extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">主页</Link>
        <Link to="menu">副页</Link>
        <Link to="counter">计数器</Link>
        <Menu theme="dark">
        <Menu.Item>
          选项一
        </Menu.Item>
        <Menu.Item>
          选项一
        </Menu.Item>
        <Menu.Item>
          选项一
        </Menu.Item>
        <Menu.Item>
          选项一
        </Menu.Item>

      </Menu>
      </div>

    );
  }
}
export default MenuIndex;
