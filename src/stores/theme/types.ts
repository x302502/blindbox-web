import { ThemeConfig } from "antd/es/config-provider";

export type IThemeMode = "default" | "compact";
export type IThemeStyle = "light" | "dark";

export interface IThemeStore {
  mode: IThemeMode;
  themeStyle: IThemeStyle;
  themConfig: ThemeConfig;
  token: ThemeConfig["token"];
  setThemeStyle: (style: IThemeStyle) => void;
  setMode: (mode: IThemeMode) => void;
  changeTheme: (themeOption: {
    mode?: IThemeMode;
    themeStyle?: IThemeStyle;
  }) => void;
}
