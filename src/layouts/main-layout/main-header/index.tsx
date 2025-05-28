import { Button, Layout, theme, Tooltip } from "antd";
import { styles } from "./styles";
import { useThemeStore } from "~/stores/theme/useThemeStore";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { ConnectButton, Connector } from "@ant-design/web3";

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
        <Connector
          modalProps={{
            mode: "auto",
          }}
        >
          <ConnectButton
            shape="round"
            type="primary"
            style={{
              width: "auto",
            }}
            quickConnect={false}
          />
        </Connector>
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
