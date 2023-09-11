import { CSSProperties } from "react";
import { BreakpointNames } from "../enums";

export type BreakpointsStyleObjectType = {
  [key in BreakpointNames]?: CSSProperties;
};
