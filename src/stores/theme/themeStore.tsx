import { theme } from "antd";
import { ThemeConfig } from "antd/es/config-provider";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { defaultThemeConfig } from "./constant";

type IThemeMode = "default" | "compact";
type IThemeStyle = "light" | "dark";

type SetStateType<T> = Dispatch<SetStateAction<T>>;

// type SetStateType<T = any> = (value: T) => void;

interface IThemeStore {
  mode: IThemeMode;
  themeStyle: IThemeStyle;
  setThemeStyle: SetStateType<IThemeStyle>;
  themConfig: ThemeConfig;
  token: ThemeConfig["token"];
  changeTheme: (themeOption: {
    mode?: "default" | "compact";
    themeStyle?: "light" | "dark";
  }) => void;
}

const ThemeStoreContext = createContext<IThemeStore | undefined>(undefined);

const ThemeStoreProvider = ({ children }: { children: React.ReactNode }) => {
  const { token } = theme.useToken();
  const [mode, setMode] = useState<IThemeMode>("default");
  const [themeStyle, setThemeStyle] = useState<IThemeStyle>("light");
  const [themConfig, setThemConfig] = useState<ThemeConfig>({});

  useEffect(() => {
    const algorithm = [];
    if (themeStyle === "dark") {
      algorithm.push(theme.darkAlgorithm);
    } else {
      algorithm.push(theme.defaultAlgorithm);
    }
    if (mode === "compact") {
      algorithm.push(theme.compactAlgorithm);
    }

    //  @select-item-selected-option-color: @primary-color;
    // @processing-color: @primary-color;
    // @select-item-selected-bg: @background-color-base;
    // @secondary-color: @primary-color;
    // @skeleton-color: @primary-color;
    // @btn-primary-bg: @primary-color;
    // @layout-header-background: @background-color-base;

    setThemConfig({
      algorithm,
      token: {
        colorPrimary: defaultThemeConfig.token.colorPrimary,
      },
      components: {
        Layout: {
          colorBgHeader: theme.defaultConfig.token.colorBgBase,
        },
        // Form: {
        //   colorBgContainer: token.colorBgTextActive
        // }
        // Slider: {

        // }
        // Input: {
        //   colorBgLayout: theme.defaultConfig.token.colorBgBase
        // }
      },
    });
  }, [mode, themeStyle, token]);

  const changeTheme = useCallback(
    (themeOption: {
      mode?: "default" | "compact";
      themeStyle?: "light" | "dark";
    }) => {
      if (!themeOption || Object.keys(themeOption).length === 0) {
        return;
      }
      const { mode = undefined, themeStyle = undefined } = themeOption;
      if (!mode && !themeStyle) {
        return;
      }
      if (mode) {
        setMode(mode);
      }
      if (themeStyle) {
        setThemeStyle(themeStyle);
      }
    },
    []
  );

  const values = useMemo(
    () => ({
      themeStyle,
      setThemeStyle,
      mode,
      themConfig,
      changeTheme,
      token,
    }),
    [changeTheme, mode, themConfig, themeStyle, token]
  );

  return (
    <ThemeStoreContext.Provider value={values}>
      {children}
    </ThemeStoreContext.Provider>
  );
};

const useThemeStore = () => {
  const context = useContext(ThemeStoreContext);
  if (context === undefined) {
    throw new Error(
      "useThemeStore hook must be used with a ThemeStoreContext component"
    );
  }
  return context;
};

export { ThemeStoreProvider, useThemeStore };
