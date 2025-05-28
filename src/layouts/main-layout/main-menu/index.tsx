import {
  UserOutlined,
  GiftOutlined,
  CrownOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { SIDEBAR_WIDTH } from "../constant";
import { styles } from "./styles";

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
        ...styles.mainMenu,
        borderRight: `2px solid ${token.colorPrimary}`,
      }}
    >
      {/* Logo */}
      <div
        style={{
          ...styles.logo,
          backgroundColor: token.colorPrimary,
        }}
      />
      {/* Default AntD Menu */}
      <Menu mode="vertical" defaultSelectedKeys={["1"]} items={menuItems} />
    </Sider>
  );
};

export default MainMenu;
