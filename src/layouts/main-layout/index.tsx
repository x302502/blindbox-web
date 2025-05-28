import React from "react";
import MainMenu from "./main-menu";
import { MainHeader } from "./main-header";
import { Layout } from "antd";
import { styles } from "./styles";
const { Sider, Content } = Layout;

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
