import { theme } from "antd";
import { ThemeConfig } from "antd/es/config-provider";
import { create } from "zustand";
import { defaultThemeConfig } from "./constant";
import { IThemeMode, IThemeStyle, IThemeStore } from "./types";

export const useThemeStore = create<IThemeStore>((set, get) => {
  const updateThemeConfig = (
    mode: IThemeMode,
    themeStyle: IThemeStyle
  ): ThemeConfig => {
    const algorithm = [];

    if (themeStyle === "dark") {
      algorithm.push(theme.darkAlgorithm);
    } else {
      algorithm.push(theme.defaultAlgorithm);
    }

    if (mode === "compact") {
      algorithm.push(theme.compactAlgorithm);
    }

    return {
      cssVar: true,
      hashed: false,
      algorithm,
      token: {
        colorPrimary: defaultThemeConfig.token.colorPrimary,
      },
      components: {
        Layout: {
          colorBgHeader: theme.defaultConfig.token.colorBgBase,
          headerBg: theme.defaultConfig.token.colorBgBase,
          siderBg: theme.defaultConfig.token.colorBgBase,
        },
      },
    };
  };

  const initialMode: IThemeMode = "default";
  const initialStyle: IThemeStyle = "light";
  const initialConfig = updateThemeConfig(initialMode, initialStyle);

  return {
    mode: initialMode,
    themeStyle: initialStyle,
    themConfig: initialConfig,
    token: initialConfig.token,

    setThemeStyle: (style) => {
      const mode = get().mode;
      const newConfig = updateThemeConfig(mode, style);
      set({ themeStyle: style, themConfig: newConfig, token: newConfig.token });
    },

    setMode: (mode) => {
      const style = get().themeStyle;
      const newConfig = updateThemeConfig(mode, style);
      set({ mode, themConfig: newConfig, token: newConfig.token });
    },

    changeTheme: ({ mode, themeStyle }) => {
      const currentMode = get().mode;
      const currentStyle = get().themeStyle;
      const newMode = mode ?? currentMode;
      const newStyle = themeStyle ?? currentStyle;

      const newConfig = updateThemeConfig(newMode, newStyle);

      set({
        mode: newMode,
        themeStyle: newStyle,
        themConfig: newConfig,
        token: newConfig.token,
      });
    },
  };
});
