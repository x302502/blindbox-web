import {
  UserOutlined,
  GiftOutlined,
  CrownOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { SIDEBAR_WIDTH } from "../constant";

const { Sider } = Layout;

const menuItems = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Profile",
  },
  {
    key: "2",
    icon: <GiftOutlined />,
    label: "Event",
  },
  {
    key: "3",
    icon: <CrownOutlined />,
    label: "Rewards",
  },
  {
    key: "4",
    icon: <ClockCircleOutlined />,
    label: "History",
  },
];

const MainMenu = () => {
  const { token } = theme.useToken();

  return (
    <Sider
      width={SIDEBAR_WIDTH}
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        backgroundColor: token.colorBgContainer,
        borderRight: `2px solid ${token.colorPrimary}`,
        paddingTop: 16,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div
        style={{
          width: 32,
          height: 32,
          margin: "0 auto 24px",
          backgroundColor: token.colorPrimary,
          transform: "rotate(45deg)",
          borderRadius: 8,
        }}
      />

      {/* Default AntD Menu */}
      <Menu mode="vertical" defaultSelectedKeys={["1"]} items={menuItems} />
    </Sider>
  );
};

export default MainMenu;
