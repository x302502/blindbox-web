import React from "react";
import { MainLayout } from "./layouts/main-layout";
import { ConfigProvider } from "antd";
import { useThemeStore } from "./stores/theme/themeStore";
import { DemoPage } from "./pages/demo";

function App() {
  const { themConfig } = useThemeStore();
  return (
    <ConfigProvider
      theme={{
        ...themConfig,
        cssVar: true,
      }}
    >
      <MainLayout>
        <DemoPage />
      </MainLayout>
    </ConfigProvider>
  );
}

export default App;
