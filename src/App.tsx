import React from "react";
import { MainLayout } from "./layouts/main-layout";
import { ConfigProvider } from "antd";
import { useThemeStore } from "./stores/theme/useThemeStore";
import { DemoPage } from "./pages/demo";
import {
  CoinbaseWallet,
  MetaMask,
  OkxWallet,
  WagmiWeb3ConfigProvider,
} from "@ant-design/web3-wagmi";
import { ChainType } from "@ant-design/web3";

function App() {
  const { themConfig } = useThemeStore();
  return (
    <ConfigProvider
      theme={{
        ...themConfig,
      }}
    >
      <WagmiWeb3ConfigProvider
        eip6963={{
          autoAddInjectedWallets: true,
        }}
        ens
        wallets={[MetaMask(), CoinbaseWallet(), OkxWallet()]}
        chains={[
          {
            id: 10143,
            name: "Monad testnet",
            nativeCurrency: {
              name: "MON",
              symbol: "MON",
              decimals: 18,
            },
            type: ChainType.EVM,
            wagmiChain: {
              id: 10143,
              name: "Monad testnet",
              nativeCurrency: {
                name: "MON",
                symbol: "MON",
                decimals: 18,
              },
              rpcUrls: {
                default: {
                  http: [
                    "https://monad-testnet.drpc.org",
                    "https://testnet-rpc.monad.xyz",
                  ],
                  webSocket: ["wss://monad-testnet.drpc.org"],
                },
              },
              blockExplorers: {
                default: {
                  name: "SocialScan",
                  url: "https://monad-testnet.socialscan.io",
                },
              },
            },
          },
        ]}
      >
        <MainLayout>
          <DemoPage />
        </MainLayout>
      </WagmiWeb3ConfigProvider>
    </ConfigProvider>
  );
}

export default App;
