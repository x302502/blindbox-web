import React from "react";
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "./constant";
import MainMenu from "./main-menu";
import { MainHeader } from "./main-header";
import type { CSSProperties } from "react";
import { Layout, theme } from "antd";
const { Sider, Content } = Layout;
const styles: Record<string, CSSProperties> = {
  mainLayout: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },
  mainSection: {
    marginLeft: SIDEBAR_WIDTH,
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  scrollableContent: {
    marginTop: HEADER_HEIGHT,
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    overflowY: "auto",
    padding: 24,
  },
};

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={styles.mainLayout}>
      {/* Fixed Sidebar with right border */}
      <MainMenu />
      {/* Main Section */}
      <div style={styles.mainSection}>
        {/* Fixed Header with bottom border */}
        <MainHeader />

        {/* Scrollable Content */}
        <Content style={styles.scrollableContent}>{children}</Content>
      </div>
    </Layout>
  );
};
