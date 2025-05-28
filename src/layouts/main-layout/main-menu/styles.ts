import type { CSSProperties } from "react";
import { SIDEBAR_WIDTH } from "../constant";

export const styles: Record<string, CSSProperties> = {
  mainMenu: {
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    paddingTop: 16,
    zIndex: 1000,
  },
  logo: {
    width: 32,
    height: 32,
    margin: "0 auto 24px",
    transform: "rotate(45deg)",
    borderRadius: 8,
  },
};
