import type { CSSProperties } from "react";
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "../constant";

export const styles: Record<string, CSSProperties> = {
  mainHeader: {
    height: HEADER_HEIGHT,
    padding: "0 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: SIDEBAR_WIDTH,
    right: 0,
    zIndex: 1000,
    borderBottom: "2px solid #9b4dff", // nét kẻ dưới header
  },
};
