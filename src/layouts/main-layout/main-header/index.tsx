import { Button, Layout, theme, Tooltip } from "antd";
import { styles } from "./styles";
import { useThemeStore } from "~/stores/theme/themeStore";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

const { Header } = Layout;

export const MainHeader = () => {
  const { themeStyle, changeTheme } = useThemeStore();
  const { token } = theme.useToken();

  const toggleTheme = () => {
    changeTheme({
      themeStyle: themeStyle === "dark" ? "light" : "dark",
    });
  };

  return (
    <Header
      style={{
        ...styles.mainHeader,
        backgroundColor: token.colorBgContainer,
      }}
    >
      <div style={{ fontWeight: "bold" }}>📈 PRE-MARKET DASHBOARD</div>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Button type="primary" shape="round">
          Connect Wallet
        </Button>
        <Tooltip title={"Them change"}>
          <span onClick={toggleTheme}>
            {themeStyle === "dark" ? (
              <SunOutlined style={{ fontSize: 20 }} />
            ) : (
              <MoonOutlined style={{ fontSize: 20 }} />
            )}
          </span>
        </Tooltip>
      </div>
    </Header>
  );
};
