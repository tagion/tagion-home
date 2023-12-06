import { BreakpointNames } from "../common/enums";
import { BreakpointsStyleObjectType } from "../common/types/breakpoints-style-object-type";

export const whatIsTagionBlockCardsData: Array<{
  id: string;
  text: string;
  styles?: BreakpointsStyleObjectType;
}> = [
  {
    id: "01",
    text: "Digital payments",
    styles: {
      [BreakpointNames.DESKTOP]: { width: "95px" },
      [BreakpointNames.DESKTOP_LARGE]: { width: "177px" },
      [BreakpointNames.DESKTOP_MAX]: { width: "177px" },
    },
  },
  {
    id: "02",
    text: "Supply chain and logistics",
    styles: {
      [BreakpointNames.DESKTOP]: { width: "127px" },
      [BreakpointNames.DESKTOP_LARGE]: { width: "170px" },
      [BreakpointNames.DESKTOP_MAX]: { width: "170px" },
    },
  },
  { id: "03", text: "Stock Exchanges and trading platforms" },
  { id: "04", text: "Digitalisation of real world assets (RWA)" },
];
