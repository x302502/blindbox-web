import path from "node:path";
import process from "node:process";
import reactSWC from "@vitejs/plugin-react-swc";
import { codeInspectorPlugin } from "code-inspector-plugin";
import dayjs from "dayjs";
import { defineConfig } from "vite";
import { checker } from "vite-plugin-checker";
import svgrPlugin from "vite-plugin-svgr";
import {
  author,
  dependencies,
  devDependencies,
  license,
  name,
  version,
} from "./package.json";

const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version, license, author },
  lastBuildTime: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
};

const isDev = process.env.NODE_ENV === "development";

// https://vitejs.dev/config/
export default defineConfig({
  base: isDev ? "/" : "/react-antd-admin/",
  plugins: [
    reactSWC(),
    // https://github.com/pd4d10/vite-plugin-svgr#options
    svgrPlugin({
      // https://react-svgr.com/docs/options/
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          floatPrecision: 2,
        },
      },
    }),
    checker({
      typescript: true,
      terminal: false,
      enableBuild: false,
    }),
    codeInspectorPlugin({
      bundler: "vite",
      // hideConsole: true,
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src/"),
    },
  },
  server: {
    port: 3333,
    // https://vitejs.dev/config/server-options#server-proxy
    // proxy: {},
  },
  define: {
    __APP_INFO__: JSON.stringify(__APP_INFO__),
  },
  build: {
    outDir: "build",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router"],
          antd: ["antd", "@ant-design/icons"],
        },
      },
    },
  },
});
