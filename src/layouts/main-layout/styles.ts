import type { CSSProperties } from "react";
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "./constant";

export const styles: Record<string, CSSProperties> = {
  mainLayout: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },
  mainSection: {
    marginLeft: SIDEBAR_WIDTH,
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  scrollableContent: {
    marginTop: HEADER_HEIGHT,
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    overflowY: "auto",
    padding: 24,
  },
};
