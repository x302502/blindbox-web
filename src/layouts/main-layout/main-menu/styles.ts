import type { CSSProperties } from "react";
import { SIDEBAR_WIDTH } from "../constant";

export const styles: Record<string, CSSProperties> = {
  mainMenu: {
    width: SIDEBAR_WIDTH,
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    borderRight: "2px solid #9b4dff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 16,
    zIndex: 1000,
  },
  menuItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 24,
    color: "#fff",
    fontSize: 12,
    cursor: "pointer",
  },
  logo: {
    width: 32,
    height: 32,
    backgroundColor: "#9b4dff",
    transform: "rotate(45deg)",
    borderRadius: 8,
  },
};
