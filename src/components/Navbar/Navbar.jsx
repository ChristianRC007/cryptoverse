import { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import icon from '../../assets/images/cryptocurrency.png';

const { Title } = Typography;
const { Item } = Menu;

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScrennSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScrennSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Title>
      </div>
      <Button
        className="menu-control-container"
        onClick={() => setActiveMenu(!activeMenu)}
      >
        <MenuOutlined />
      </Button>
      {activeMenu && (
        <Menu theme="dark">
          <Item icon={<HomeOutlined />} key="home">
            <Link to="/">Home</Link>
          </Item>
          <Item icon={<FundOutlined />} key="cryptocurrencies">
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Item>
          <Item icon={<MoneyCollectOutlined />} key="exchanges">
            <Link to="/exchanges">Exchanges</Link>
          </Item>
          <Item icon={<BulbOutlined />} key="news">
            <Link to="/news">News</Link>
          </Item>
        </Menu>
      )}
    </div>
  );
}
