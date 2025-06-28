import React from "react";
import { MainLayout } from "./layouts/main-layout";
import { ConfigProvider } from "antd";
import { useThemeStore } from "./stores/theme/useThemeStore";
import { DemoPage } from "./pages/demo";

const App: React.FC = () => {
  const { themConfig } = useThemeStore();
  return (
    <ConfigProvider
      theme={{
        ...themConfig,
      }}
    >
      <MainLayout>
        <DemoPage />
      </MainLayout>
    </ConfigProvider>
  );
};

export default App;
